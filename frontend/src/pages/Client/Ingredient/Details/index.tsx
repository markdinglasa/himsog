import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";

export const ClientIngredientDetailsPage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Content className="">Ingredient Details</S.Content>
      </S.Container>
    </>
  );
};

export default ClientIngredientDetailsPage;
