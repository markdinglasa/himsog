import { ButtonType, InputType, SFC } from "../../../types";
import * as S from "../../../styles";
import { InputOption } from "../InputOption";
import { CustomButton } from "../Button";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export interface PaymentmethodProps {
  Id: string;
  PaytypeName: string;
  OtherDetailsOnClick: () => void;
  onAmountChange: (paytypeId: number, amount: number) => void;
}
export const PaymentMethod: SFC<PaymentmethodProps> = ({
  ClassName,
  Id,
  PaytypeName,
  OtherDetailsOnClick,
  onAmountChange,
}) => {
  return (
    <S.Container className={ClassName} key={Id}>
      <S.Divider className="w-full  border p-2 flex gap-2 flex-col md:flex-row justify-start items-center bg-slate-200  rounded-md ">
        <S.Divider className="md:w-5/12">
          <S.Span className="md:text-[30px] text-slate-500 ">
            {PaytypeName}
          </S.Span>
        </S.Divider>

        <S.Divider className="w-full md:w-7/12 gap-2 flex flex-row relative">
          <S.Divider className="w-fit flex justify-end">
            <CustomButton
              icon={<BorderColorIcon className="text-primary md:text-white" />}
              text="Details"
              type={ButtonType.button}
              onClick={OtherDetailsOnClick}
            />
          </S.Divider>
          <S.Divider className="w-full ">
            <InputOption
              name={Id}
              ClassName="w-full"
              inputClassName="text-right text-[14px]"
              placeholder="0.00"
              type={InputType.number}
              onChange={(e) =>
                onAmountChange(Number(Id), parseFloat(e.target.value))
              }
            />
          </S.Divider>
        </S.Divider>
      </S.Divider>
    </S.Container>
  );
};
