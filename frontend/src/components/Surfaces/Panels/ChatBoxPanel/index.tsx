import { memo, useEffect, useRef } from "react";
import { FormProps, Message, Roles, SFC } from "../../../../types";
import { cn, renderPath } from "../../../../utils";
import { Avatar } from "@mui/material";
import Card from "../../Cards";
import styled from "styled-components";
import { colors } from "../../../../styles/colors";
import Form from "../../Forms";
import API from "../../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import { Skeleton } from "../../../Feedback";
import { NoRecord } from "../../../DataDisplay";

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

export const ChatBoxPanel: SFC<FormProps> = ({
  ClassName,
  IsAdvocate = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { Id } = useParams<{ Id: string }>();
  const { data: chat, isLoading } = API.Messenger.Chat.Get(Number(Id));
  const {
    data: messages,
    isLoading: loadingMessage,
    refetch,
  } = API.Messenger.Message.GetAllByChat(Number(Id), Number(auth?.user ?? 0));
  const path = renderPath(auth?.roles as Roles);
  // Ref to scroll to the latest message
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch(); // Refetch messages every 30 seconds
    }, 30000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [refetch]);

  // Scroll to the latest message whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (Number(Id) === 0)
    return (
      <div className="w-full md:w-8/12 border  rounded-md p-[1rem] flex items-center justify-center h-[calc(100vh-195px)] bg-white">
        <NoRecord Message={"No Messages"} />
      </div>
    );
  if (isLoading) return <Skeleton />;
  return (
    <div
      className={cn(
        "w-full md:w-8/12 border  rounded-md p-[1rem] flex flex-col h-[calc(100vh-195px)] bg-white",
        ClassName,
      )}
    >
      <div className="border-b w-full flex flex-row ">
        <div
          onClick={() =>
            navigate(
              `${path}/profile/${IsAdvocate ? (chat?.NutritionistId ?? 0) : (chat?.AdvocateId ?? 0)}`,
            )
          }
          className="flex flex-row gap-3 items-center justify-center w-fit px-3 p-2 rounded-md duration-300 ease-in-out hover:bg-slate-100 cursor-pointer mb-2"
        >
          <Avatar
            src={
              IsAdvocate
                ? (chat?.NutritionistPhoto ?? "")
                : (chat?.AdvocatePhoto ?? "")
            }
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {IsAdvocate
                ? (chat?.NutritionistFullname ?? "NA")
                : (chat?.AdvocateFullname ?? "NA")}
            </span>
            <span className="text-sm ">
              {IsAdvocate ? "Health Professional" : "Advocate"}
            </span>
          </div>
        </div>
      </div>
      <MessagesContainer className="h-full">
        {loadingMessage ? (
          <Skeleton />
        ) : messages?.length > 1 ? (
          messages.map((record: Message) => (
            <Card.Message
              SenderId={record?.SenderId ?? 0}
              ChatId={record?.ChatId ?? 0}
              key={record?.Id}
              Id={String(record?.Id ?? 0)}
              IsSender={Boolean(
                Number(auth?.user ?? 0) === Number(record?.SenderId ?? 0),
              )}
              Message={record?.Contents ?? ""}
              CurrentDate={String(record?.DateCreated ?? "")}
            />
          ))
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <NoRecord Message="No Messages" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <div className="w-full h-fit border-t h-[10%]">
        <Form.Transaction.Message />
      </div>
    </div>
  );
};

export default memo(ChatBoxPanel);
