import {
  APIChannel,
  ButtonColor,
  ButtonType,
  HeadCell,
  mealPlanRequestHC,
  MealPlanRequestTables,
  QueryKey,
  RouteChannel,
  SFC,
  UserRole,
  UserTable,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  AccessControl,
  CircleButton,
  CustomButton,
  EnhancedTable,
  InputOption,
  NoRecord,
  PageBreadCrumbs,
  Skeleton,
} from "../../../../components";
import { cn } from "../../../../utils";
import { Fragment, memo, Suspense, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Surfaces/Cards";
import API from "../../../../hooks/api";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { colors } from "../../../../styles/colors";
import Icon from "../../../../constants/icon";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import { useAuth } from "../../../../hooks";

interface FilterExpertise {
  IsDiabetesManagement: boolean;
  IsPlantBasedDiets: boolean;
  IsPrenatalNutrition: boolean;
  IsFoodAllergies: boolean;
  IsSportsNutrition: boolean;
  IsHearthHealth: boolean;
  IsGutHealth: boolean;
  IsPediatricNutrition: boolean;
  IsWeightManagement: boolean;
}
export const MealPlanRequestViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const [isModal, toggleModal] = useToggle(false);
  const { auth } = useAuth();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
    {
      Text: "Meal Plan",
      OnClick: () => navigate(RouteChannel.CLIENT_MEAL_PLAN),
    },
  ];
  const [filter, setFilter] = useState<string>("all");
  const intialFE: FilterExpertise = {
    IsDiabetesManagement: false,
    IsPlantBasedDiets: false,
    IsPrenatalNutrition: false,
    IsFoodAllergies: false,
    IsSportsNutrition: false,
    IsHearthHealth: false,
    IsGutHealth: false,
    IsPediatricNutrition: false,
    IsWeightManagement: false,
  };
  const [filterExpertise, setFilterExpertise] =
    useState<FilterExpertise>(intialFE);
  const [page, setPage] = useState<number>(1);
  const [expertise, setExpertise] = useState<string>("");
  const { data: requests } = API.Transaction.MealPlanRequest.GetAllByAdvocate(
    Number(auth?.user ?? 0),
  );
  const { data, isLoading, refetch } = API.Setup.User.GetAllByRole(
    UserRole.NUTRITIONIST,
    expertise,
    filter,
    page,
  );

  // Trigger refetch when filter or page changes
  useEffect(() => {
    refetch();
  }, [expertise, filter, page, refetch]);

  const count: number = useMemo(
    () => Math.ceil((data?.length || 0) / 30),
    [data],
  );

  const professionals = () => {
    if (isLoading) return <Skeleton />;
    return (
      <>
        {data && data?.length > 0 ? (
          <>
            <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full ">
              {data.map((record: UserTable) => {
                return (
                  <Fragment key={record?.Id?.toString()}>
                    <Card.Professional Data={record} />
                  </Fragment>
                );
              })}
            </S.CardContainer>
          </>
        ) : (
          <div className="w-full flex items-center justify-center h-[calc(100vh-18rem)]">
            <NoRecord Message="No Professionals" />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Find & Request" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <S.Divider className=" flex md:flex-row flex-col md:justify-between justify-start md:items-center gap-[1rem] w-full mb-[1rem]">
            <S.Divider className="w-full md:w-1/2 flex flex-col items-start justify-start ">
              <S.Span className="text-lg font-medium">Find & Request</S.Span>
              <S.Span className="text-sm text-slate-600">
                Find & request meal plan to a health professionals.
              </S.Span>
            </S.Divider>
            <S.Divider className="flex flex-row gap-2">
              <InputOption
                name="Filter"
                placeholder="Search name"
                onChange={(e) => setFilter(e.target.value)}
              />
              <CircleButton
                Icon={<Icon.Filter className="text-primary" />}
                Type={ButtonType.button}
                OnClick={toggleModal}
              />
            </S.Divider>
          </S.Divider>
          <S.Divider></S.Divider>
          {professionals()}
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
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Requests"
              Rows={(requests as MealPlanRequestTables) ?? []}
              HeadCells={mealPlanRequestHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              DetailsRoute={RouteChannel.CLIENT_REQUEST_MEAL_PLAN_DETAILS}
              RemoveApiRoute={APIChannel.MEAL_PLAN_REQUEST_ID}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.MEAL_PLAN_REQUEST}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
      <CustomModal
        close={toggleModal}
        title={"Filter"}
        open={isModal}
        ClassName="md:w-[30rem] w-[80vw] h-fit"
      >
        <S.Divider className="flex flex-row flex items-start justify-between w-full">
          {/* on apply concat all filters */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="IsDiabetesManagement"
                  color="success"
                  checked={filterExpertise.IsDiabetesManagement}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Diabetest Management"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsPlantBasedDiets"
                  color="success"
                  checked={filterExpertise.IsPlantBasedDiets}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Plant-Based Diets"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsPrenatalNutrition"
                  color="success"
                  checked={filterExpertise.IsPrenatalNutrition}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Prenatal Nutrition"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsFoodAllergies"
                  color="success"
                  checked={filterExpertise.IsFoodAllergies}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Food Allergies"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="IsSportsNutrition"
                  color="success"
                  checked={filterExpertise.IsSportsNutrition}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Sports Nutrition"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsHearthHealth"
                  color="success"
                  checked={filterExpertise.IsHearthHealth}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Hearth Health"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsGutHealth"
                  color="success"
                  checked={filterExpertise.IsGutHealth}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Gut Health"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsPediatricNutrition"
                  color="success"
                  checked={filterExpertise.IsPediatricNutrition}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Pediatric Nutrition"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="IsWeightManagement"
                  color="success"
                  checked={filterExpertise.IsWeightManagement}
                  onChange={(e) =>
                    setFilterExpertise((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
              }
              label="Weight Management"
            />
          </FormGroup>
        </S.Divider>
        <S.Divider className="flex items-end justify-end gap-[1rem] mt-[1rem]">
          <CustomButton
            onClick={() => {
              setFilterExpertise(intialFE);
              setExpertise("");
              toggleModal();
            }}
            text="Cancel"
            type={ButtonType.button}
            leftIcon={<Icon.Cancel className="text-primary " />}
            color={ButtonColor.default}
          />
          <CustomButton
            text="Apply"
            type={ButtonType.button}
            leftIcon={<Icon.Save className="text-primary md:text-white" />}
            onClick={() => {
              // Check each filter if true, then concatenate their keys
              const concatFilter = Object.keys(filterExpertise)
                .filter((key) => filterExpertise[key as keyof FilterExpertise])
                .map(
                  (key) =>
                    key.replace("Is", "").replace(/([a-z])([A-Z])/g, "$1 $2"), // Insert space before the second capital letter
                )
                .join(" ");
              setExpertise(concatFilter);
              refetch();
              toggleModal();
            }}
          />
        </S.Divider>
      </CustomModal>
    </>
  );
};
export default memo(MealPlanRequestViewPage);
