import { Toolbar, Typography } from "@mui/material";
import { SFC, TableToolbarProps } from "../../../../../types";
import * as S from "./Styles";
import { memo } from "react";
import { colors } from "../../../../../styles";

const TableToolbar: SFC<TableToolbarProps> = ({ Title, children }) => {
  return (
    <>
      <Toolbar
        sx={{
          padding: "0px !important",
          textAlign: "left",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <S.Container className="w-full flex flex-col md:flex-row">
          <S.Content className=" mb-2 w-full md: w-1/2 ">
            <Typography
              sx={{
                fontFamily: "Montserrat",
                minWidth: "300px",
                maxWidth: "100%",
                flex: "1 1 100%",
                fontSize: { xs: "large", md: "large" },
                fontWeight: "medium",
              }}
              id="tableTitle"
              component="div"
            >
              {Title}
            </Typography>
          </S.Content>
          <S.ChildContent className="">{children}</S.ChildContent>
        </S.Container>
      </Toolbar>
    </>
  );
};

export default memo(TableToolbar);
