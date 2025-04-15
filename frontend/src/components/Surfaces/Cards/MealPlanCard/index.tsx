import { useNavigate } from "react-router-dom";
import { MealPlanTable, Roles, SFC } from "../../../../types";
import { cn, renderPath, truncate } from "../../../../utils";
import { useAuth } from "../../../../hooks";
import { memo } from "react";
import { Avatar, Tooltip } from "@mui/material";
import Icon from "../../../../constants/icon";

interface MealPlanCardProps {
  Data: MealPlanTable;
}

const MealPlanCard: SFC<MealPlanCardProps> = ({ ClassName, Data }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath((auth?.roles ?? "") as Roles);

  return (
    <>
      <div
        onClick={() => navigate(`${path}/meal-plan/d/${Data?.Id ?? 0}`)}
        className={cn(
          "w-full border rounded-md h-fit bg-white shadow-md cursor-pointer hover:bg-slate-100/60 duration-100 ease-in-out",
          ClassName,
        )}
      >
        <Tooltip title={Data?.Name ?? ""}>
          <div className="w-full p-[1rem]">
            <div className="w-full border-b h-12 mb-2 flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div>
                  <Avatar
                    src={Data?.UserImage ?? ""}
                    alt={Data?.UserFullname ?? "NA"}
                  />
                </div>
                <div className="ml-3">
                  <span className="font-medium text-md">
                    {Data?.UserFullname ?? "NA"}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full title flex items-center justify-between">
              <span className="text-md font-medium">{Data?.Name ?? "NA"}</span>
            </div>
            <div className="w-full flex items-center justify-start  ">
              <span className="w-full text-sm h-22 overflow-hidden whitespace-normal text-ellipsis">
                {truncate(Data?.Description ?? "No Description", 200)}
              </span>
            </div>

            {/*<div className="w-full flex items-center justify-between">
            <span className="w-1/2 text-sm">Type</span>
            <span className="w-1/2 text-sm">{Data.Type}</span>
          </div>*/}
            <div className="flex flex-col mt-[1rem]">
              <div className="w-full flex items-center justify-start">
                <span className="text-md text-primary font-medium">
                  ₱ {parseFloat(Data.Price.toString())}
                </span>
                <span className="text-2xl font-bold w-[1rem] text-center">
                  {" ⋅ "}
                </span>
                <span className="text-md">{Data.Duration} Days</span>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-end">
                  <span className="text-sm ">
                    Sold : {parseFloat(Data?.Sold?.toString() ?? "0")}
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <Icon.Star className="text-primary" fontSize="small" />
                  <span className="text-sm  ml-1">
                    {parseFloat(Data?.Rating?.toString() ?? "0")}/10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default memo(MealPlanCard);
