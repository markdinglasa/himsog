import { ButtonType, MealTable, RouteChannel, SFC } from "../../../types";
import { cn } from "../../../utils";
import * as S from "../../../styles/Styles";
import { CustomButton, InputOption } from "../../Inputs";
import { memo, useEffect, useMemo, useState } from "react";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import React from "react";
import { NoRecord } from "../Tables";
import { Pagination, PaginationItem } from "@mui/material";
import Icon from "../../../constants/icon";
import { colors } from "../../../styles/colors";
import { AccessControl } from "..";
import { useNavigate } from "react-router-dom";
import { MoreOption } from "../../Surfaces";
import DefaultImage from "../../../asset/images/default-image.jpg";

export const Meals: SFC = ({ ClassName }) => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {
    data: Meals,
    isLoading,
    refetch,
  } = API.Setup.Meal.GetWithFilter(filter, page);

  // Trigger refetch when filter or page changes
  useEffect(() => {
    refetch();
  }, [filter, page, refetch]);

  const count: number = useMemo(
    () => Math.ceil((Meals?.length || 0) / 30),
    [Meals],
  );

  const navigate = useNavigate();
  return (
    <div className={cn("w-full", ClassName)}>
      <S.Content className="h-full flex flex-col justify-center items-center w-full rounded-md">
        <S.Divider className="w-full flex items-center justify-end mb-2">
          <S.Actions>
            <CustomButton
              type={ButtonType.button}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_NEW)}
              text="New"
              leftIcon={<Icon.Add className="text-primary md:text-white" />}
            />
          </S.Actions>
        </S.Divider>
        <S.Divider className=" flex md:flex-row flex-col md:justify-between justify-start md:items-center gap-[1rem] w-full mb-[1rem]">
          <S.Divider className="w-full md:w-1/2 flex flex-col items-start justify-start ">
            <S.Span className="text-lg font-medium">Meals</S.Span>
            <S.Span className="text-sm text-slate-600">
              Organize and manage your ready-to-go meals with ease.
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
          {isLoading ? (
            <Skeleton />
          ) : Meals && Meals?.length > 0 ? (
            <>
              <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full ">
                {Meals.map((record: MealTable) => {
                  return (
                    <React.Fragment key={record?.Id?.toString()}>
                      <div className="w-full border rounded-md hover:bg-slate-100 bg-white items-center flex flex-row justify-between">
                        <div className="flex items-start justify-start">
                          <div className="rounded-md w-[3rem] h-[3rem]">
                            <img src={record?.Image ?? DefaultImage} />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-md font-medium">
                              {record?.Name ?? "NA"}
                            </span>
                            <span className="text-md font-medium">
                              {record?.Kilocalorie ?? 0} kcal
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <MoreOption
                            EditOnClick={() => {}}
                            DeleteOnClick={() => {}}
                          />
                        </div>
                      </div>
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

export default memo(Meals);
