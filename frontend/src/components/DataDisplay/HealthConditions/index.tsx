import { useAuth } from "../../../hooks";
import { HealthConditionTable, SFC } from "../../../types";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import { Chip } from "@mui/material";
import Icon from "../../../constants/icon";
import { colors } from "../../../styles";
import { memo } from "react";
import { NoRecord } from "../Tables";

interface HealthConditionProps {
  IsAllergen: boolean;
}
export const HealthConditions: SFC<HealthConditionProps> = ({
  ClassName,
  IsAllergen = false,
}) => {
  const { auth } = useAuth();
  const { remove } = API.Setup.HealthCondition.Remove();
  const { data: health } = API.Setup.Health.Get(auth?.user ?? 0);
  const { data: dietary, isLoading } = API.Setup.HealthCondition.GetAll(
    health?.Id ?? 0,
  );

  return (
    <>
      <div className={ClassName}>
        <div className="w-full mb-2 flex flex-wrap gap-2">
          {isLoading ? (
            <Skeleton />
          ) : dietary?.length ? (
            dietary
              .filter(
                (record: HealthConditionTable) =>
                  record.Category ==
                  (IsAllergen ? "allergen" : "dietery-preference"),
              )
              .map((record: HealthConditionTable) => (
                <div key={record.Id?.toString()} className="w-fit h-22">
                  <Chip
                    label={record?.Description ?? ""}
                    onDelete={() => remove(Number(record?.Id ?? 0))}
                    deleteIcon={
                      <Icon.Delete style={{ color: colors.primary }} />
                    }
                    variant="outlined"
                  />
                </div>
              ))
          ) : (
            <div className="w-full">
              <span>
                {IsAllergen ? (
                  <div className="w-full">
                    <NoRecord Message={"No Allergies"} />
                  </div>
                ) : (
                  <NoRecord Message={"No Dietery Preferences"} />
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default memo(HealthConditions);
