import { SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { cn } from "../../../../utils";
import { memo } from "react";
import Form from "../../../../components/Surfaces/Forms";
import HealthConditions from "../../../DataDisplay/HealthConditions";
import { FeedbackEmail } from "../../../../components";

export const HealthPanel: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.Content className="w-full">
          <S.Divider className="w-full mb-2">
            <Form.Setup.Health
              IsSetup={false}
              IsDetails={true}
              Title="Health Info"
            />
          </S.Divider>
          <S.Divider className="w-full mb-2">
            <Form.Setup.HealthCondition
              IsSetup={false}
              IsDetails={true}
              Title="Dietary Preference"
            />
            <S.Divider className="w-full py-2">
              <HealthConditions IsAllergen={false} />
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full mb-2">
            <Form.Setup.HealthCondition
              IsSetup={false}
              IsDetails={true}
              Title="Allergen"
              IsAllergen={true}
            />
            <S.Divider className="w-full py-2">
              <HealthConditions IsAllergen={true} />
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full">
            <FeedbackEmail />
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(HealthPanel);
