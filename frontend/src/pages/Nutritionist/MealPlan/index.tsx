import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { a11yProps, cn, CustomTabPanel } from "../../../utils";
import { memo, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { colors } from "../../../styles";
import { PageBreadCrumbs } from "../../../components";
import { useNavigate } from "react-router-dom";
import Panel from "../../../components/Surfaces/Panels";

export const NutritionistMealPlan: SFC = ({ ClassName }) => {
  const [index, setIndex] = useState<number>(0);
  const handleChanges = (_event: React.SyntheticEvent, newValue: number) => {
    setIndex(newValue);
  };
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Settings" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <S.Divider className="border-b flex flex-row justify-between items-center w-full mb-3">
            <Tabs
              value={index}
              onChange={handleChanges}
              aria-label="New tabs"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: colors.primary, // Customize the active indicator color
                },
              }}
            >
              <Tab
                sx={{
                  textTransform: "none",
                  color: "gray", // Default color
                  "&.Mui-selected": {
                    color: colors.primary, // Active tab color
                  },
                }}
                label="Pre-Made Plans"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                  color: "gray", // Default color
                  "&.Mui-selected": {
                    color: colors.primary, // Active tab color
                  },
                }}
                label="Custom-Made Plan"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                  color: "gray", // Default color
                  "&.Mui-selected": {
                    color: colors.primary, // Active tab color
                  },
                }}
                label="Standard Meal Plan"
                {...a11yProps(2)}
              />
            </Tabs>
          </S.Divider>
          <S.Divider className="w-full">
            <CustomTabPanel index={0} value={index}>
              <Panel.PreMadePlan />
            </CustomTabPanel>
            <CustomTabPanel index={1} value={index}>
              <Panel.CustomMadePlan />
            </CustomTabPanel>
            <CustomTabPanel index={2} value={index}>
              <Panel.MealPlan />
            </CustomTabPanel>
          </S.Divider>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(NutritionistMealPlan);
