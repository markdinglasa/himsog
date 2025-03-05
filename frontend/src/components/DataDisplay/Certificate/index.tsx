import { memo } from "react";
import { CertificateTable, SFC } from "../../../types";
import { cn, formatDateToMMDDYY } from "../../../utils";
import { MoreOption } from "../../Surfaces";
import * as S from "./Styles";
import QRCode from "react-qr-code";

interface CertificateProps {
  OnEdit: () => void;
  OnDelete: () => void;
  Data: CertificateTable;
}
export const Certificate: SFC<CertificateProps> = ({
  ClassName,
  Data,
  OnEdit,
  OnDelete,
}) => {
  return (
    <>
      <S.Certificate
        className={cn("w-full p-5 rounded-md border text-slate-200", ClassName)}
      >
        <div className="w-full h-22 items-center justify-between flex mb-10">
          <span className="text-md font-medium">
            {Data?.CertificateNumber ?? "000000"}
          </span>
          <div>
            <MoreOption
              ClassName="relative -mt-2"
              EditOnClick={OnEdit}
              DeleteOnClick={OnDelete}
            />
          </div>
        </div>
        <div className="w-full h-22 items-center justify-center flex flex-col mb-5 ">
          <span className="text-3xl text-slate-100 font-semibold text-center px-3 border-b border-slate-100">
            {Data?.IssuedTo ?? "NA"}
          </span>
          <span className="text-md font-medium text-center">
            {Data?.CertificateType ?? "NA"}
          </span>
        </div>
        <div className="w-full h-22 items-center justify-between flex flex-row gap-10">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <span className="text-md font-medium border-b px-3 border-slate-100">
              {formatDateToMMDDYY(Data?.ExpiryDate) ?? "NA"}
            </span>
            <span>Expiry Date</span>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <span className="text-md font-medium border-b px-3 border-slate-100">
              {Data?.Issuer ?? "NA"}
            </span>
            <span>Issuer</span>
          </div>
        </div>
        <div className="flex justify-end w-full relative h-[50px] items-center">
          <QRCode
            value={Data?.AttachmentURL ?? ""}
            className="w-[50px] h-[50px]"
          />
        </div>
      </S.Certificate>
    </>
  );
};
export default memo(Certificate);
