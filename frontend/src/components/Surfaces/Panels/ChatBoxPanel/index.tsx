import { memo } from "react";
import { SFC } from "../../../../types";
import { cn } from "../../../../utils";
import { Avatar } from "@mui/material";
import Card from "../../Cards";
import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import Form from "../../Forms";
const MessagesContainer = styled.div`
  overflow: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 ${colors.palette.neutral["050"]}; /* For Firefox */

  /* Custom scrollbar for WebKit browsers (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.palette.neutral["100"]};
  }

  /* Apply max-width and centering only when zoomed out */
  @media (min-width: 1921px) {
    max-width: 100rem; /* Equivalent to max-w-screen-lg in Tailwind */
    margin: 0 auto; /* Center the content */
  }
`;
export const ChatBoxPanel: SFC = ({ ClassName }) => {
  return (
    <div
      className={cn(
        "w-full md:w-8/12 border border-slate-300 rounded-md p-[1rem] flex flex-col h-[calc(100vh-195px)] bg-white",
        ClassName,
      )}
    >
      <div className="border-b w-full flex flex-row ">
        <div className="flex flex-row gap-3 items-center justify-center w-fit px-3 p-2 rounded-md duration-300 ease-in-out">
          <Avatar />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <span className="text-sm ">Role</span>
          </div>
        </div>
      </div>
      <MessagesContainer>
        <Card.Message
          Id="1"
          IsSender={false}
          Message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          CurrentDate={new Date().toString()}
        />
        <Card.Message
          Id="1"
          IsSender={true}
          Message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          CurrentDate={new Date().toString()}
        />
      </MessagesContainer>
      <div className="w-full h-fit border-t h-[10%]">
        <Form.Transaction.Message />
      </div>
    </div>
  );
};

export default memo(ChatBoxPanel);
