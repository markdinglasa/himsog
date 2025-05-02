import { Fragment, memo, useEffect, useMemo, useState } from "react";
import { MealPlanRating, SFC } from "../../../types";
import { cn, formatDateToMMDDYY } from "../../../utils";
import { useParams } from "react-router-dom";
import API from "../../../hooks/api";
import {
  Avatar,
  Box,
  Pagination,
  PaginationItem,
  Rating,
  Skeleton,
} from "@mui/material";
import { NoRecord } from "../Tables";
import { AccessControl } from "..";
import { colors } from "../../../styles";
import Icon from "../../../constants/icon";
export const MealPlanReviews: SFC = ({ ClassName }) => {
  const { Id } = useParams<{ Id: string }>();
  const [page, setPage] = useState<number>(1);

  const {
    data: reviews,
    isLoading,
    refetch,
  } = API.Transaction.MealPlanRating.GetAll(Number(Id), page);

  // Trigger refetch when filter or page changes
  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const count: number = useMemo(
    () => Math.ceil((reviews?.length || 0) / 30),
    [reviews],
  );
  const averageRating: number = useMemo(() => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce(
        (acc: number, review: MealPlanRating) => acc + review.Rate,
        0,
      );
      return totalRating / reviews.length;
    }
    return 0;
  }, [reviews]);
  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const hideName = (IsHidden: boolean, Name: string) => {
    return IsHidden
      ? `${Name.charAt(0)}${Name.slice(1).replace(/./g, "*")}`
      : Name; // if ishidden change name to *'s except the first letter
  };

  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div className="w-full mb-2">
          <span className="text-lg font-medium">Meal Plan Ratings</span>
        </div>
        <div className="w-full h flex items-start justify-start  bg-green-100 p-[1rem] rounded-md mb-2 flex-col gap-2">
          <div>
            <span className="text-2xl font-medium">{averageRating} </span>
            <span className="text-lg ">out of 5</span>
          </div>
          <Rating
            readOnly
            name="hover-feedback"
            value={5}
            precision={0.5}
            getLabelText={getLabelText}
            defaultValue={5}
            emptyIcon={
              <Icon.Star style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <div className="w-full">
          {isLoading ? (
            <Skeleton />
          ) : reviews && reviews?.length > 0 ? (
            <>
              <div className="flex flex-col gap-[1rem]">
                {reviews.map((record: MealPlanRating, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div className="w-[30rem] p-[1rem] ">
                        <div className="w-full flex flex-row gap-[1rem] items-start ">
                          <Avatar src={record?.UserPhoto ?? ""} />
                          <div className="w-full ">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">
                                {hideName(
                                  record?.IsHidden ?? false,
                                  record?.UserFullname ?? "NA",
                                )}
                              </span>

                              <span className="text-sm">
                                {formatDateToMMDDYY(record?.DateCreated ?? "")}
                              </span>
                            </div>
                            <div className="w-full flex flex-row ">
                              <Rating
                                readOnly
                                name="hover-feedback"
                                value={record.Rate}
                                precision={0.5}
                                getLabelText={getLabelText}
                                defaultValue={record.Rate}
                                emptyIcon={
                                  <Icon.Star
                                    style={{ opacity: 0.55 }}
                                    fontSize="inherit"
                                  />
                                }
                              />
                              {record.Rate !== null && (
                                <Box sx={{ ml: 2 }}>{labels[record.Rate]}</Box>
                              )}
                            </div>
                            <div className="mt-2">
                              <p>{record.Remarks ?? ""}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="w-full flex items-center justify-center h-[calc(100vh-18rem)]">
              <NoRecord Message="No Reviews" />
            </div>
          )}
        </div>
        <AccessControl OtherCondition={count > 0}>
          <div className="w-full flex items-center justify-end pt-5">
            <Pagination
              count={count}
              onClick={(e) =>
                setPage(Number((e.target as HTMLButtonElement).textContent))
              }
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: Icon.Back, next: Icon.Forward }}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: colors.primary, // change background color to the active page
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </div>
        </AccessControl>
      </div>
    </>
  );
};
export default memo(MealPlanReviews);
