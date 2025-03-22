import { RouteChannel, SFC, UserRole } from "../../../types";
import * as S from "../../../styles/Styles";
import { a11yProps, cn, CustomTabPanel } from "../../../utils";
import { memo, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { colors } from "../../../styles";
import { AccessControl, PageBreadCrumbs } from "../../../components";
import { useNavigate } from "react-router-dom";
import Panel from "../../../components/Surfaces/Panels";
import { ActivatedProfessional } from "../../../components/DataDisplay/Activated";
import { useAuth } from "../../../hooks";

export const NutritionistSettings: SFC = ({ ClassName }) => {
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
  const { auth } = useAuth();
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
                label="Personal"
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
                label="Professional Credentials"
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
                label="Transactions"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                  color: "gray", // Default color
                  "&.Mui-selected": {
                    color: colors.primary, // Active tab color
                  },
                }}
                label="Subscription"
                {...a11yProps(3)}
              />
              <Tab
                sx={{
                  textTransform: "none",
                  color: "gray", // Default color
                  "&.Mui-selected": {
                    color: colors.primary, // Active tab color
                  },
                }}
                label="Security"
                {...a11yProps(4)}
              />
            </Tabs>
          </S.Divider>
          <S.Divider className="w-full">
            <CustomTabPanel index={0} value={index}>
              <Panel.Credential />
            </CustomTabPanel>
            <CustomTabPanel index={1} value={index}>
              <Panel.Profession />
            </CustomTabPanel>
            <CustomTabPanel index={2} value={index}>
              <Panel.Certificates />
            </CustomTabPanel>
            <CustomTabPanel index={3} value={index}>
              <Panel.Subscription />
            </CustomTabPanel>
            <CustomTabPanel index={4} value={index}>
              <Panel.Security />
            </CustomTabPanel>
          </S.Divider>
        </S.PageContent>
        <AccessControl
          OtherCondition={
            index === 0 &&
            (auth?.roles as unknown as UserRole) === UserRole.NUTRITIONIST
          }
        >
          <S.Divider className="w-full mb-5 mt-5">
            <ActivatedProfessional IsActivated={false} Remarks={null} />
          </S.Divider>
        </AccessControl>
      </S.Container>
    </>
  );
};

export default memo(NutritionistSettings);
