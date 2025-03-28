import { ButtonType, EventFilter, EventTable, SFC } from "../../../types";
import { cn } from "../../../utils";
import * as S from "../../../styles/Styles";
import { CustomButton, SelectOption } from "../../Inputs";
import { memo, useMemo, useState } from "react";
import API from "../../../hooks/api";
import { Skeleton } from "../../Feedback";
import React from "react";
import Card from "../../Surfaces/Cards";
import { NoRecord } from "../Tables";
import { Pagination, PaginationItem } from "@mui/material";
import Icon from "../../../constants/icon";
import { colors } from "../../../styles/colors";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";
import Form from "../../Surfaces/Forms";
import { AccessControl } from "..";

interface DataDisplayProps {
  IsPublic?: boolean;
}
export const Events: SFC<DataDisplayProps> = ({
  ClassName,
  IsPublic = true,
}) => {
  const [isDisplay, toggleDisplay] = useToggle(false);
  const [filter, setFilter] = useState<EventFilter>(EventFilter.ALL);
  const [page, setPage] = useState<number>(1);
  const { data: events, isLoading } = API.Setup.Event.GetAllWithFilter(
    filter,
    page,
  );
  const count: number = useMemo(
    () => Math.ceil((events?.length || 0) / 30),
    [events],
  );
  // console.log(page);
  // console.log(events);
  return (
    <div className={cn("w-full", ClassName)}>
      <S.Content className="h-full flex flex-col justify-center items-center w-full rounded-md">
        <AccessControl OtherCondition={IsPublic}>
          <S.Divider className="w-full flex items-center justify-end mb-2">
            <S.Actions>
              <CustomButton
                type={ButtonType.button}
                onClick={toggleDisplay}
                text={"New"}
                leftIcon={<Icon.Add />}
              />
            </S.Actions>
          </S.Divider>
        </AccessControl>
        <S.Divider className=" flex flex-row justify-between items-center w-full mb-[1rem]">
          <S.Divider className="w-1/2 flex flex-col items-start justify-start ">
            <S.Span className="text-lg font-medium">
              Health & Nutrition Events
            </S.Span>
            <S.Span className="text-sm text-slate-600">
              Discover and share events related to healty eating and nutrition.
            </S.Span>
          </S.Divider>
          <S.Divider className="">
            <SelectOption
              placeholder="Event Type"
              name="EventType"
              ClassName="bg-white"
              OnChange={(e: any) => {
                setFilter(e.target.value);
              }}
              options={[
                { value: EventFilter.ALL, label: "All Events" },
                { value: EventFilter.UPCOMING, label: "Upcoming Events" },
                { value: EventFilter.PAST, label: "Past Events" },
                { value: EventFilter.MY, label: "My Events" },
              ]}
            />
          </S.Divider>
        </S.Divider>
        <S.Divider className="w-full">
          {isLoading ? (
            <Skeleton />
          ) : events && events?.length > 0 ? (
            <>
              <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full ">
                {events.map((record: EventTable) => {
                  return (
                    <React.Fragment key={record?.Id?.toString()}>
                      <Card.Event Data={record} />
                    </React.Fragment>
                  );
                })}
              </S.CardContainer>
            </>
          ) : (
            <S.Divider className="w-full flex items-center justify-center h-[calc(100vh-18rem)]">
              <NoRecord Message="No Event" />
            </S.Divider>
          )}
        </S.Divider>
        <AccessControl OtherCondition={count > 0}>
          <S.Divider className="w-full flex items-center justify-end pt-5">
            <Pagination
              count={count}
              onClick={(e) =>
                setPage(Number((e.target as HTMLButtonElement).textContent))
              }
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: Icon.Back, next: Icon.Forward }}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: colors.primary, // change background color to the active page
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </S.Divider>
        </AccessControl>
      </S.Content>
      <CustomModal
        ClassName="w-[90vw] md:w-[500px]"
        close={toggleDisplay}
        title={"Request Access"}
        open={isDisplay}
      >
        <S.Divider className="flex flex-col items-start justify-start mb-4">
          <S.Span className="text-lg font-medium">
            Please provide your organization email
          </S.Span>
          <S.Span className="text-sm text-slate-600">
            Only authorized government health establishments are allowed to post
            event or article.
          </S.Span>
        </S.Divider>
        <S.Divider className="w-full">
          <Form.Public.RequestAccess OnClose={toggleDisplay} />
        </S.Divider>
      </CustomModal>
    </div>
  );
};

export default memo(Events);
