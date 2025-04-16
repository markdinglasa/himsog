import { FormProps, SFC } from "../../../types";
import { cn } from "../../../utils";
import API from "../../../hooks/api";
import { Skeleton } from "@mui/material";
import Ingredients from "../Ingredients";
import NutritionFacts from "../NutritionFacts";

export const MealDetails: SFC<FormProps> = ({ ClassName, RecordId = 0 }) => {
  const { data, isLoading } = API.Setup.Meal.Get(Number(RecordId));
  if (isLoading) return <Skeleton />;
  return (
    <>
      <div className={cn("w-full overflow-auto h-full", ClassName)}>
        <div className="w-full">
          {data?.Image && (
            <div className="w-full flex items-center justify-center">
              <img
                src={data?.Image}
                className="w-full"
                alt={data?.Name ?? "meal-name"}
              />
            </div>
          )}
        </div>
        <div className="w-full mt-[1rem]">
          <div className="mb-[1rem]">
            <span className="text-xl font-medium">{data?.Name ?? "NA"}</span>
            <span className="text-sm text-slate-600 ml-3">
              {parseFloat(data?.Kilocalorie ?? "0")} kcal
            </span>
          </div>
          <div className="w-full">
            <div className="mb-[1rem]">
              <Ingredients IsDisplay={true} IsDetails={true} />
            </div>
            <div className="w-full mb-[1rem]">
              <span className="text-md font-medium">Directions</span>
              <p className="whitespace-pre-line text-slate-600">
                {data?.Recipe ?? "No Recipe"}
              </p>
            </div>
            {data?.Allergen && (
              <div className="w-full mb-[1rem]">
                <span className="text-md font-medium">Allergen</span>
                <p className="whitespace-pre-line">
                  {data?.Allergen ?? "No Allergen"}
                </p>
              </div>
            )}
            <div className="mb-[1rem]">
              <NutritionFacts IsDisplay={true} IsDetails={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
