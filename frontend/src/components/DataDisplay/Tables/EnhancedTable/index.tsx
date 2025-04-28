import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { TextField } from "@mui/material";
import {
  ButtonType,
  DialogType,
  EnhancedTableProps,
  HeadCell,
  Order,
  RouteChannel,
  ToastType,
} from "../../../../types";
import {
  IsBoolean,
  displayToast,
  formatDateToMMDDYY,
  formatNumber,
  getComparator,
  stableSort,
  truncate,
} from "../../../../utils";
import { useAxiosPrivate, useToggle } from "../../../../hooks";
import {
  useState,
  MouseEvent,
  ChangeEvent,
  useMemo,
  useCallback,
  memo,
} from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import DeleteIcon from "@mui/icons-material/Delete";
import { Error, Success } from "../../../../shared";
import * as S from "./Styles";
import { CircleButton } from "../../../Inputs";
import { colors } from "../../../../styles";
import { ConfirmationDialog, Skeleton } from "../../../Feedback";
import { useGlobal } from "../../../../hooks/useGlobal";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { NoRecord, TableHeader, TableToolbar } from "..";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DefaultImage from "../../../../asset/images/default-image.jpg";

export const EnhancedTable = <T extends Record<string, any>>({
  Rows,
  HeadCells,
  ClassName,
  Title = "NA",
  DetailsRoute = "",
  IsRemove = true,
  IsLoading = false,
  RemoveApiRoute = "",
  IsModal = false,
  ToggleModal,
  IsTableTool = true,
  IsSales = false,
  IsRecord = false,
  DefaultFilter = "",
  QueryKey,
}: EnhancedTableProps<T>) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState(HeadCells[0].Id as keyof T);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [searchQuery, setSearchQuery] = useState(DefaultFilter);
  const [modalIsOpen, toggleModal] = useToggle(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [activeRowId, setActiveRowId] = useState<string | null>(null);
  const navigate = useNavigate();
  const axios = useAxiosPrivate();
  const { setRecord } = useGlobal();

  const handleRequestSort = (
    _event: MouseEvent<unknown>,
    property: keyof T,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleRowClick = (rowId: string) => {
    setActiveRowId(rowId);
    //setActiveRowId((prevId) => (prevId === rowId ? null : rowId));
  };
  const handleClick = (
    _event: MouseEvent<unknown>,
    id: any,
    //link: any,
    data: any,
    isLocked: boolean,
  ) => {
    if (IsModal) {
      /*if (data.Status === "Approved")
        displayToast("Payment is already approved", ToastType.error);
      else */ if (data.IsApproved)
        displayToast("Request is already approved", ToastType.error);
      else {
        ToggleModal && ToggleModal();
        setRecord({
          RecordId: IsRecord ? null : id,
          Records: [],
          Record: IsRecord ? data : undefined,
        });
      }
    } else {
      /*const reroute = link
        ? link
        : DetailsRoute !== RouteChannel.NO_ACCESS_RIGHT
          ? `${DetailsRoute.slice(0, DetailsRoute.length - (IsSales ? 10 : 3))}${id}`
          : RouteChannel.R403;*/
      // displays Cart Details if the sales is already tendered
      if (isLocked) {
        setRecord({
          RecordId: 0,
          Records: [],
          Record: data ?? undefined,
        });
      } else if (DetailsRoute !== RouteChannel.NO_ACCESS_RIGHT)
        navigate(DetailsRoute.replace(":Id", id)); // reroute to shop if not yet tendered
      else displayToast(Error.m00053, ToastType.error); // display no access right
    }
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const toggle = (event: MouseEvent<unknown>, Id: any) => {
    event.preventDefault();
    event.stopPropagation();
    setSelected(parseInt(Id, 10));
    toggleModal();
  };

  const filteredRows = useMemo(() => {
    return Rows?.filter((row: { [x: string]: { toString: () => string } }) =>
      Object.keys(row).some((key) =>
        row[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [Rows, searchQuery]);
  const visibleRows = useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, filteredRows],
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      await axios.delete(
        `${RemoveApiRoute.replace(":Id", selected?.toString() ?? "")}`,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey] }); // Invalidate and refetch
      displayToast(Success.m00003, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(error.message, ToastType.error);
    },
  });

  const removeRecord = useCallback(async () => {
    if (selected !== null && RemoveApiRoute !== "/no-access-right") {
      try {
        mutation.mutate();
      } catch (error: any) {
        displayToast(error?.response?.data?.message, ToastType.error);
      } finally {
        setRecord({
          RecordId: 0,
          Records: [],
          Record: undefined,
        });
        toggleModal();
      }
    } else {
      displayToast(Error.m00053, ToastType.error);
    }
  }, [selected, RemoveApiRoute, mutation, setRecord, toggleModal]);

  return (
    <>
      <S.Container
        className={twMerge(
          "w-full h-full overflow-auto flex items-start flex-col justify-start p-0",
          ClassName,
        )}
      >
        {IsTableTool && (
          <TableToolbar Title={Title}>
            <TextField
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "400px",
                },
                borderRadius: 0,
                border: "none",
              }}
              className="bg-inherit rounded-none"
              id="Search"
              size="small"
              name="filter"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={"Filter"}
            />
          </TableToolbar>
        )}
        <TableContainer
          sx={{ borderBottom: `1px solid ${colors.palette.neutral["100"]}` }}
        >
          <Table
            sx={{
              minWidth: "100%",
              minHeight:
                Rows.length === 0 && IsRemove ? "calc(100vh - 330px)" : "",
            }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <TableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={Rows.length}
              headCells={HeadCells as HeadCell<unknown>[]}
            />
            <TableBody>
              {IsLoading ? (
                <>
                  <TableRow key={"no-record"}>
                    <TableCell
                      key={"no-record-cell"}
                      colSpan={HeadCells.length}
                      sx={{ border: "none !important" }}
                    >
                      <Skeleton />
                    </TableCell>
                  </TableRow>
                </>
              ) : visibleRows.length > 0 ? (
                visibleRows.map((row, _index) => (
                  <TableRow
                    hover={false}
                    tabIndex={-1}
                    key={row["Id"]}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      "&:hover": {
                        backgroundColor: colors.palette.neutral["050"],
                      },

                      backgroundColor: (() => {
                        if (activeRowId === String(row["Id"])) {
                          return colors.palette.neutral["100"];
                        } else if (
                          row["IsSuspended"] ||
                          row["IsCancelled"] ||
                          row["IsDisapproved"] ||
                          row["Status"] === "Disapproved"
                        ) {
                          return colors.palette.red["200"];
                        } else if (row["Status"] === "Pending") {
                          return colors.palette.orange["200"];
                        } else if (
                          row["IsLocked"] ||
                          row["IsApproved"] ||
                          row["Status"] === "Approved"
                        ) {
                          return colors.palette.green["050"];
                        }
                        return "none";
                      })(),
                    }}
                    onClick={(event) => {
                      handleClick(
                        event,
                        IsSales
                          ? String(row["RecNumber"]).slice(
                              5,
                              String(row["RecNumber"]).length,
                            )
                          : row["Id"],
                        //row["Link"],
                        row,
                        IsSales ? IsBoolean(row["IsLocked"]) : false,
                      );
                      handleRowClick(String(row["Id"]));
                    }}
                  >
                    {HeadCells.map((HeadCell) => {
                      const renderCellContent = () => {
                        switch (HeadCell.Id) {
                          case "UserPhoto":
                          case "Image":
                            return (
                              <Avatar
                                src={row[HeadCell.Id] || DefaultImage}
                                alt="meal-image"
                              />
                            );
                          case "IsAutoDiscount":
                          case "IsVATExempt":
                          case "IsPackage":
                          case "IsPrinted":
                          case "IsOptional":
                          case "IsReturn":
                          case "IsRefund":
                          case "IsCancelled":
                          case "IsLocked":
                          case "IsInventory":
                          case "IsRead":
                          case "IsApproved":
                            return row[HeadCell.Id] ? (
                              <CheckBoxIcon className="text-green-500" />
                            ) : (
                              <DisabledByDefaultIcon className="text-red-500" />
                            );
                          case "DateCreated":
                          case "DateUpdated":
                          case "DateStart":
                          case "DateEnd":
                          case "TrnDate":
                          case "ScheduleDate":
                          case "DatePosted":
                          case "TransactionDate":
                            return formatDateToMMDDYY(
                              row[HeadCell.Id].toString(),
                            );
                          //integer
                          case "Rate":
                          case "DiscountRate":
                          case "OnhandQuantity":
                          case "MarginTop":
                          case "MarginBottom":
                          case "MarginLeft":
                          case "MarginRight":
                          case "Quantity":
                          case "ComponentCount":
                          case "PackageCount":
                          case "TriggerQuantity":
                          case "Kilocalorie":
                            return Number(row[HeadCell.Id] ?? 0).toFixed(2);
                          //float
                          case "Cost":
                          case "Amount":
                          case "CreditLimit":
                          case "Price":
                          case "CreditAmount":
                          case "DebitAmount":
                          case "NetPrice":
                            return `${formatNumber(Number(row[HeadCell.Id] ?? 0))}`;
                          case "Description":
                          case "Address":
                            return row[HeadCell.Id]
                              ? truncate(String(row[HeadCell.Id] ?? ""), 100)
                              : "NA";
                          case "Id":
                            return (
                              IsRemove && (
                                <CircleButton
                                  OnClick={(event: React.MouseEvent<unknown>) =>
                                    toggle(event, row["Id"])
                                  }
                                  IsNotification={false}
                                  Icon={<DeleteIcon className="text-primary" />}
                                  Type={ButtonType.button}
                                />
                              )
                            );

                          default:
                            return row[HeadCell.Id]
                              ? truncate(String(row[HeadCell.Id] ?? ""), 100)
                              : "NA";
                        }
                      };

                      return (
                        <TableCell
                          key={HeadCell.Id as string}
                          align={HeadCell.numeric ? "right" : "left"}
                          sx={{
                            whiteSpace: "nowrap", // Prevent content wrapping
                            textOverflow: "ellipsis", // Show ellipsis if overflow occurs
                            overflow: "hidden", // Hide overflowing content
                            //border: "1px solid red",
                            width:
                              HeadCell.numeric ||
                              (HeadCell.Id as string) === "RecNumber" ||
                              (HeadCell.Id as string) === "Image"
                                ? "7%"
                                : ((HeadCell.Id as string).slice(0, 2) ===
                                      "Is" &&
                                      !HeadCell.numeric) ||
                                    (HeadCell.Id as string) === "Id"
                                  ? "2%"
                                  : "auto", // Specific width for Description, dynamic width for others
                          }}
                        >
                          {renderCellContent()}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow key={"no-record"} className="h-full">
                  <TableCell
                    key={"no-record-cell"}
                    colSpan={HeadCells.length}
                    sx={{ border: "none !important" }}
                  >
                    <NoRecord Message="No records were found" />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </S.Container>
      <TablePagination
        className="position-relative h-12"
        sx={{ width: "100%" }}
        rowsPerPageOptions={[]}
        component="div"
        count={Rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ConfirmationDialog
        open={modalIsOpen}
        ClassName="md:w-2/6 w-11/12"
        dialogType={DialogType.delete}
        close={toggleModal}
        title="Delete Record"
        message="Are you sure to delete this?"
        confirm={removeRecord}
      />
    </>
  );
};

export default memo(EnhancedTable);
