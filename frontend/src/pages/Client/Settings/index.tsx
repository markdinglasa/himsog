import { SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { a11yProps, cn, CustomTabPanel } from "../../../utils";
import { memo, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { colors } from "../../../styles";
import Panels from "./Panels";

export const ClientSettings: SFC = ({ ClassName }) => {
  const [index, setIndex] = useState<number>(0);
  const handleChanges = (_event: React.SyntheticEvent, newValue: number) => {
    setIndex(newValue);
  };
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageContent className="border rounded-md">
          <S.Divider className="border-b flex flex-row justify-between items-center w-full mb-10">
            <Tabs
              value={index}
              onChange={handleChanges}
              aria-label="New item tabs"
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
                label="Credentials"
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
                label="Diet & Nutrition"
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
                label="Medical Records"
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
              <Panels.Credential />
            </CustomTabPanel>
            <CustomTabPanel index={1} value={index}>
              <Panels.Health />
            </CustomTabPanel>
            <CustomTabPanel index={2} value={index}>
              <Panels.MedicalRecord />
            </CustomTabPanel>
            <CustomTabPanel index={3} value={index}>
              <Panels.Subscription />
            </CustomTabPanel>
            <CustomTabPanel index={4} value={index}>
              <Panels.Security />
            </CustomTabPanel>
          </S.Divider>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(ClientSettings);
