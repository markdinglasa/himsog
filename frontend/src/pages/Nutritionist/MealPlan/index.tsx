import { ButtonType, MealPlanTable, RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { cn } from "../../../utils";
import { Fragment, memo, useEffect, useMemo, useState } from "react";
import {
  AccessControl,
  CustomButton,
  InputOption,
  NoRecord,
  PageBreadCrumbs,
  Skeleton,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Surfaces/Cards";
import Icon from "../../../constants/icon";
import API from "../../../hooks/api";
import { Pagination, PaginationItem } from "@mui/material";
import { colors } from "../../../styles";

export const NutritionistMealPlan: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const {
    data: mealplans,
    isLoading,
    refetch,
  } = API.Setup.MealPlan.GetWithFilter(filter, page);

  // Trigger refetch when filter or page changes
  useEffect(() => {
    refetch();
  }, [filter, page, refetch]);

  const count: number = useMemo(
    () => Math.ceil((mealplans?.length || 0) / 30),
    [mealplans],
  );
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Pre-Made Meal Plan" />
          <S.Actions>
            <S.Actions>
              <CustomButton
                type={ButtonType.button}
                onClick={() =>
                  navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_NEW)
                }
                text="New"
                leftIcon={<Icon.Add className="text-primary md:text-white" />}
              />
            </S.Actions>
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <S.Divider className=" flex md:flex-row flex-col md:justify-between justify-start md:items-center gap-[1rem] w-full mb-[1rem]">
            <S.Divider className="w-full md:w-1/2 flex flex-col items-start justify-start ">
              <S.Span className="text-lg font-medium">
                Pre-Made Meal Plans
              </S.Span>
              <S.Span className="text-sm text-slate-600">
                Organize and manage your ready-to-go meal plans with ease.
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
            ) : mealplans && mealplans?.length > 0 ? (
              <>
                <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full ">
                  {mealplans.map((record: MealPlanTable) => {
                    return (
                      <Fragment key={record?.Id?.toString()}>
                        <Card.MealPlan Data={record} />
                      </Fragment>
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
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(NutritionistMealPlan);
