import { Tooltip } from "@mui/material";
import { SFC } from "../../../types";
import { cn } from "../../../utils";
import VerifiedIcon from "@mui/icons-material/Verified";

export const Verified: SFC = ({ ClassName }) => {
  return (
    <div className={cn("", ClassName)}>
      <Tooltip title="Verified">
        <VerifiedIcon className="text-primary" fontSize="small" />
      </Tooltip>
    </div>
  );
};
