import { useAuth } from "../../../hooks";
import { HealthConditionTable, SFC } from "../../../types";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import { Chip } from "@mui/material";
import Icon from "../../../constants/icon";
import { colors } from "../../../styles";
import { memo } from "react";
import { NoRecord } from "../Tables";
import { useParams } from "react-router-dom";

interface HealthConditionProps {
  IsAllergen: boolean;
  IsDisplay?: boolean;
}
export const HealthConditions: SFC<HealthConditionProps> = ({
  ClassName,
  IsAllergen = false,
  IsDisplay = false,
}) => {
  const { auth } = useAuth();
  const { Id } = useParams<{ Id: string }>();
  const { remove } = API.Setup.HealthCondition.Remove();
  const UserId: number = IsDisplay ? Number(Id) : Number(auth?.user ?? 0);
  const { data: health } = API.Setup.Health.Get(UserId);
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
                    disabled={IsDisplay}
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
