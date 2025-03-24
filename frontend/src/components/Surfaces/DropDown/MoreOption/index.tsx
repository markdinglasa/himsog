import { useState, useEffect, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import * as S from "./Styles";
import { ButtonType, SFC } from "../../../../types";
import EditIcon from "@mui/icons-material/Edit";
import { twMerge } from "tailwind-merge";
import MoreVert from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
interface OptionProps {
  EditOnClick?: (e: any) => void;
  DeleteOnClick?: (e: any) => void;
  MarkAsRead?: (e: any) => void;
  UnsentMessage?: (e: any) => void;
  IconColor?: string;
}

export const MoreOption: SFC<OptionProps> = ({
  ClassName,
  EditOnClick,
  DeleteOnClick,
  MarkAsRead,
  UnsentMessage,
  IconColor = "text-slate-100",
}) => {
  const [activeDropdown, setActiveDropdown] = useState<null | string>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      setActiveDropdown(null);
  };

  useEffect(() => {
    if (activeDropdown)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div
      className={twMerge("relative inline-block  ", ClassName)}
      ref={dropdownRef}
    >
      <IconButton
        onClick={(e: any) => {
          e.stopPropagation();
          setActiveDropdown(activeDropdown === "NewItem" ? null : "NewItem");
        }}
        type={ButtonType.button}
      >
        <MoreVert className={IconColor} />
      </IconButton>
      {activeDropdown === "NewItem" && (
        <S.Dropdown className="absolute right-0 mt-2 w-48 h-fit  bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden py-2">
          {MarkAsRead && (
            <S.DropdownItem
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
              onClick={(e) => {
                MarkAsRead(e);
                setActiveDropdown(null);
              }}
            >
              <CheckIcon className="text-primary" />{" "}
              <span className="ml-2">Mark as read</span>
            </S.DropdownItem>
          )}
          {UnsentMessage && (
            <S.DropdownItem
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
              onClick={(e) => {
                UnsentMessage(e);
                setActiveDropdown(null);
              }}
            >
              <span className="ml-2">Unsent Message</span>
            </S.DropdownItem>
          )}
          {EditOnClick && (
            <S.DropdownItem
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
              onClick={(e) => {
                EditOnClick(e);
                setActiveDropdown(null);
              }}
            >
              <EditIcon className="text-primary" />{" "}
              <span className="ml-2">Edit</span>
            </S.DropdownItem>
          )}
          {DeleteOnClick && (
            <S.DropdownItem
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
              onClick={(e) => {
                DeleteOnClick(e);
                setActiveDropdown(null);
              }}
            >
              <DeleteIcon className="text-primary" />{" "}
              <span className="ml-2">Delete</span>
            </S.DropdownItem>
          )}
        </S.Dropdown>
      )}
    </div>
  );
};
