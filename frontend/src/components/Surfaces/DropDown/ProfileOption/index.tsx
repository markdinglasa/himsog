import { useState, useEffect, useRef } from "react";
import * as S from "./Styles";
import { Roles, SFC, UserInitial } from "../../../../types";
import { useNavigate } from "react-router-dom";
import { useAuth, useSignOut } from "../../../../hooks";
import { Avatar, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";

import { colors } from "../../../../styles";
import { renderPath } from "../../../../utils";

export const ProfileOption: SFC = () => {
  const [activeDropdown, setActiveDropdown] = useState<null | string>(null);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { auth } = useAuth();
  const user = UserInitial;
  //const { records: user } = useGetUser(auth?.user ?? 0);
  const path = renderPath(auth?.roles ?? Roles.default);
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
  const Fullname = `${user?.Firstname ?? "NA"} ${user?.Lastname ?? "NA"}`;
  const { reSignOut } = useSignOut();
  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Tooltip title="Profile">
        <Avatar
          src={auth?.user?.ProfilePhoto ?? ""}
          sx={{ background: colors.primary }}
          onClick={() =>
            setActiveDropdown(activeDropdown === "NewItem" ? null : "NewItem")
          }
          className="uppercase flex justify-center items-center cursor-pointer bg-primary text-primary"
        >
          <span className="text-white font-semibold">
            {user.Firstname.charAt(0) ?? "NA"}
          </span>
        </Avatar>
      </Tooltip>
      {activeDropdown === "NewItem" && (
        <S.Dropdown className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <S.DropdownItem
            className=" block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-center flex"
            onClick={() => {
              setActiveDropdown(null);
              navigate(`${path}/profile/${user.Id ?? 0}`);
            }}
          >
            <div className="w-full flex flex-col items-center">
              <span className="font-bold pt-2">{Fullname ?? "NA"}</span>
              <span className="text-slate-500 uppercase text-sm">
                {user?.Role ?? "NA"}
              </span>
            </div>
          </S.DropdownItem>
          <hr />
          <S.DropdownItem
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
            onClick={() => {
              setActiveDropdown(null);
              navigate(`${path}/settings`);
            }}
          >
            <SettingsOutlinedIcon className="text-primary" />
            <span className="ml-2">Settings</span>
          </S.DropdownItem>
          <S.DropdownItem
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
            onClick={() => {
              setActiveDropdown(null);
              navigate(`${path}/privacy-policy`);
            }}
          >
            <HttpsOutlinedIcon className="text-primary" />
            <span className="ml-2">Privacy Policy</span>
          </S.DropdownItem>
          <S.DropdownItem
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
            onClick={() => {
              setActiveDropdown(null);
              navigate(`${path}/terms-and-conditions`);
            }}
          >
            <BookOutlinedIcon className="text-primary" />
            <span className="ml-2">Terms & Conditions</span>
          </S.DropdownItem>
          <S.DropdownItem
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center justify-start flex"
            onClick={reSignOut}
          >
            <LogoutIcon className="text-primary" />
            <span className="ml-2">Sign Out</span>
          </S.DropdownItem>
        </S.Dropdown>
      )}
    </div>
  );
};
