import { EventFilter, EventTable, RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { memo, Suspense, useState } from "react";
import { a11yProps, cn } from "../../../../utils";
import Card from "../../../../components/Surfaces/Cards";
import { Pagination, PaginationItem, Skeleton, Tab, Tabs } from "@mui/material";
import { colors } from "../../../../styles";
import {
  CustomButton,
  NoRecord,
  PageBreadCrumbs,
  SelectOption,
} from "../../../../components";
import Icon from "../../../../constants/icon";
import { useNavigate } from "react-router-dom";
import API from "../../../../hooks/api";
import React from "react";

const NutritionistViewPage: SFC = ({ ClassName }) => {
  const [filter, setFilter] = useState<EventFilter>(EventFilter.ALL);
  const navigate = useNavigate();

  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const { data: events } = API.Setup.Event.GetAllWithFilter(filter);
  return (
    <>
      <S.Container className={cn("w-full ", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Events" />
          <S.Actions>
            <CustomButton
              text="New"
              leftIcon={<Icon.Add />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_EVENT_NEW)}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.Content className="mb-[1rem] border rounded-md">
          <S.Content className="h-full flex flex-col justify-center items-center w-full  bg-white rounded-md p-[1rem] ">
            <S.Divider className=" flex flex-row justify-between items-center w-full mb-[1rem]">
              <S.Divider className="w-1/2 flex flex-col items-start justify-start">
                <S.Span className="text-lg font-medium">
                  Health & Nutrition Events
                </S.Span>
                <S.Span className="text-sm text-slate-600">
                  Discover and share events related to healty eating and
                  nutrition.
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
              <Suspense fallback={<Skeleton />}>
                {events && events?.length > 0 ? (
                  events.map((record: EventTable) => {
                    return (
                      <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full border-red">
                        <React.Fragment key={record?.Id ?? ""}>
                          <Card.Event Data={record} />
                        </React.Fragment>
                      </S.CardContainer>
                    );
                  })
                ) : (
                  <S.Divider className="w-full flex items-center justify-center">
                    <NoRecord Message="No Event" />
                  </S.Divider>
                )}
              </Suspense>
            </S.Divider>
            <S.Divider className="w-full flex items-center justify-center pt-5">
              <Pagination
                count={10}
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
          </S.Content>
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(NutritionistViewPage);
