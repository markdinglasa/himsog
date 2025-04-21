import { FormProps, MealPlanTable, MealPlanTables, SFC } from "../../../types";
import { cn } from "../../../utils";
import * as S from "../../../styles/Styles";
import { InputOption } from "../../Inputs";
import { memo, useEffect, useMemo, useState } from "react";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import React from "react";
import Card from "../../Surfaces/Cards";
import { NoRecord } from "../Tables";
import { Pagination, PaginationItem } from "@mui/material";
import Icon from "../../../constants/icon";
import { colors } from "../../../styles/colors";
import { AccessControl } from "..";
import { useAuth } from "../../../hooks";

export const MealPlans: SFC<FormProps> = ({ ClassName, IsMy = false }) => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { auth } = useAuth();
  const {
    data: mealplans,
    isLoading,
    refetch,
  } = API.Setup.MealPlan.GetWithFilter(filter, page);
  console.log(mealplans);
  const {
    data: mymealplans,
    isLoading: myIsLoading,
    refetch: myRefetch,
  } = API.Setup.MealPlan.GetAllMy(filter, page, Number(auth?.user ?? 0));

  // Trigger refetch when filter or page changes
  useEffect(() => {
    if (IsMy) myRefetch();
    else refetch();
  }, [filter, page, refetch, myRefetch, IsMy, auth?.user]);

  const count: number = useMemo(
    () =>
      Math.ceil(
        (IsMy ? mymealplans?.length || 0 : mealplans?.length || 0) / 30,
      ),
    [mealplans],
  );
  const loading: boolean = IsMy ? myIsLoading : isLoading;
  const records: MealPlanTables | [] = IsMy ? mymealplans : mealplans;
  return (
    <div className={cn("w-full", ClassName)}>
      <S.Content className="h-full flex flex-col justify-center items-center w-full rounded-md">
        <S.Divider className=" flex md:flex-row flex-col md:justify-between justify-start md:items-center gap-[1rem] w-full mb-[1rem]">
          <S.Divider className="w-full md:w-1/2 flex flex-col items-start justify-start ">
            <S.Span className="text-lg font-medium">
              {IsMy && "My"} Meal Plans
            </S.Span>
            <S.Span className="text-sm text-slate-600">
              Professionals made meal plans, for your healthy diet.
            </S.Span>
          </S.Divider>
          <S.Divider className="">
            <InputOption
              name="Filter"
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full">
          {loading ? (
            <Skeleton />
          ) : records && records?.length > 0 ? (
            <>
              <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full ">
                {records.map((record: MealPlanTable) => {
                  return (
                    <React.Fragment key={record?.Id?.toString()}>
                      <Card.MealPlan Data={record} />
                    </React.Fragment>
                  );
                })}
              </S.CardContainer>
            </>
          ) : (
            <S.Divider className="w-full flex items-center justify-center h-[calc(100vh-18rem)]">
              <NoRecord Message="No Meal Plan" />
            </S.Divider>
          )}
        </S.Divider>
        <AccessControl OtherCondition={count > 0}>
          <S.Divider className="w-full flex items-center justify-end pt-5">
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
          </S.Divider>
        </AccessControl>
      </S.Content>
    </div>
  );
};

export default memo(MealPlans);
