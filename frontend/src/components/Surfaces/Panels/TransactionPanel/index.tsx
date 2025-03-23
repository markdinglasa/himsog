import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import PayTypes from "../../../DataDisplay/PayTypes";

export const TransactionPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("w-full ", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full ">
            <PayTypes />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(TransactionPanel);
