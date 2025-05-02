import { Box } from "@mui/material";
import { TabPanelProps } from "../types";
import * as S from "../styles";

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <S.Container
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      className="w-full relative"
    >
      {value === index && <Box>{children}</Box>}
    </S.Container>
  );
}

export function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}
