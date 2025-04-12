import { useNavigate } from "react-router-dom";
import { MealPlanTable, Roles, SFC } from "../../../../types";
import { cn, renderPath } from "../../../../utils";
import { useAuth } from "../../../../hooks";
import { memo } from "react";
import { MoreOption } from "../../DropDown";
import API from "../../../../hooks/api";

interface MealPlanCardProps {
  Data: MealPlanTable;
}

const MealPlanCard: SFC<MealPlanCardProps> = ({ ClassName, Data }) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath((auth?.roles ?? "") as Roles);
  const { remove } = API.Setup.MealPlan.Remove();

  return (
    <>
      <div
        onClick={() => navigate(`${path}/meal-plan/d/${Data?.Id ?? 0}`)}
        className={cn(
          "w-full border rounded-md h-fit bg-white shadow-md cursor-pointer",
          ClassName,
        )}
      >
        <div className="w-full p-[1rem]">
          <div className="w-full title flex items-center justify-between">
            <span className="text-lg font-medium">{Data?.Name ?? "NA"}</span>
            <MoreOption
              DeleteOnClick={() => remove(Number(Data?.Id ?? 0))}
              IconColor="text-primary"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="w-1/2 text-sm">Duration</span>
            <span className="w-1/2 text-sm">{Data.Duration} Days</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="w-1/2 text-sm">Price</span>
            <span className="w-1/2 text-sm">{Data.Price}</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="w-1/2 text-sm">Type</span>
            <span className="w-1/2 text-sm">{Data.Type}</span>
          </div>
          <div className="w-full flex items-center justify-start">
            <span className="w-full text-sm">{Data.Description}</span>
          </div>
        </div>
        <div className="border-t h-12"></div>
      </div>
    </>
  );
};

export default memo(MealPlanCard);
