import { memo, useRef, useState } from "react";
import { ButtonType, RouteChannel, SFC } from "../../../../../types";
import { cn } from "../../../../../utils";
import * as S from "../../../../../styles/Styles";
import {
  CustomButton,
  NoRecord,
  PageBreadCrumbs,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import html2pdf from "html2pdf.js";
import _ from "lodash";
import Icon from "../../../../../constants/icon";
const currentYear = new Date().getFullYear();
export const years = _.range(currentYear, 1980).map((year) => ({
  value: `${year}`,
  label: `${year}`,
}));
import API from "../../../../../hooks/api";

export const yearOpt = [{ value: "", label: "Select option" }, ...years];
export const UserReportPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const [year, setYear] = useState<string>("");
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const { data: subsSales } = API.Utility.Count.AdminUserReport(Number(year));

  const pointerRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date().toLocaleDateString();
  const print = () => {
    const element = pointerRef.current;
    if (element) {
      const options = {
        margin: 0.1,
        filename: `Users_${currentDate}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
      };

      html2pdf().from(element).set(options).save();
    }
  };
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  const totalAdvocate = (): number => {
    return (
      subsSales?.reduce((total: number, record: { Advocates: number }) => {
        return total + (record.Advocates ?? 0);
      }, 0) ?? 0
    );
  };
  const totalProfessionals = (): number => {
    return (
      subsSales?.reduce((total: number, record: { Professionals: number }) => {
        return total + (record.Professionals ?? 0);
      }, 0) ?? 0
    );
  };
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Reports - Subscription" />
          <S.Actions>
            <CustomButton
              text="Print"
              leftIcon={<Icon.Print className="text-primary md:text-white" />}
              type={ButtonType.button}
              onClick={print}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <S.Content className="flex mb-2 bg-white p-0 flex-col gap-2 w-full h-fit rounded-md text-zinc-800 items-center">
            <S.Divider className="w-full flex justify-between items-center mb-2">
              <S.Divider className="">
                <S.Span className="text-lg font-medium">Report - Users</S.Span>
              </S.Divider>
              <S.Divider className="">
                <FormControl sx={{ minWidth: 200 }} size="small">
                  <InputLabel id="demo-select-small-label">Year</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={String(year)}
                    label="SY"
                    onChange={handleChange}
                  >
                    {yearOpt.map((year) => (
                      <MenuItem key={year.value} value={year.value}>
                        {year.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </S.Divider>
            </S.Divider>
            <S.Container className="w-full rounded-lg flex items-center justify-center ">
              <S.Content ref={pointerRef} className="w-full" id="content">
                <S.Divider className="flex w-full justify-between items-center mb-2">
                  <p className="text-sm">Report - Users Per Month</p>
                  <p className="text-sm">Printed on: {currentDate}</p>
                </S.Divider>

                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-1 font-medium text-md">Year</th>
                      <th className="border p-1 font-medium text-md">Month</th>
                      <th className="border p-1 font-medium text-md">
                        Advocates
                      </th>
                      <th className="border p-1 font-medium text-md">
                        Health Professionals
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subsSales?.length < 1 && (
                      <tr>
                        <td className="h-[20rem]" colSpan={4}>
                          <NoRecord Message="No records found" />
                        </td>
                      </tr>
                    )}
                    {subsSales &&
                      subsSales.map((record: any, index: number) => (
                        <tr key={index} className="text-center">
                          <td className=" p-1 text-slate-800">{year}</td>
                          <td className=" p-1 text-slate-800">
                            {record?.MonthName ?? "NA"}
                          </td>
                          <td className=" p-1 text-slate-800">
                            {record?.Advocates ?? 0}
                          </td>
                          <td className=" p-1 text-slate-800">
                            {record?.Professionals ?? 0}
                          </td>
                        </tr>
                      ))}
                    <tr className="h-12 text-center">
                      <td colSpan={2}></td>
                      <td>
                        <span className="font-medium text-sm">
                          Total Advocates: {totalAdvocate()}
                        </span>
                      </td>
                      <td>
                        <span className="font-medium text-sm">
                          Total Professionals: {totalProfessionals()}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </S.Content>
            </S.Container>
          </S.Content>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(UserReportPage);
