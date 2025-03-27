import { EventTable, RouteChannel, SFC } from "../../../../types";
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
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const handleChanges = (_event: React.SyntheticEvent, newValue: number) => {
    setIndex(newValue);
  };
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const { data: events } = API.Setup.Event.GetAll();
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
        <S.Content className="">
          <S.Content className="h-full flex flex-col justify-center items-center w-full  bg-white rounded-md p-[1rem] ">
            <S.Divider className="border-b flex flex-row justify-between items-center w-full mb-[1rem]">
              <Tabs
                value={index}
                onChange={handleChanges}
                aria-label="New item tabs"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: colors.primary, // Customize the active indicator color
                  },
                }}
              >
                <Tab
                  sx={{
                    textTransform: "none",
                    color: "gray", // Default color
                    "&.Mui-selected": {
                      color: colors.primary, // Active tab color
                    },
                  }}
                  label="Upcoming Events"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    textTransform: "none",
                    color: "gray", // Default color
                    "&.Mui-selected": {
                      color: colors.primary, // Active tab color
                    },
                  }}
                  label="Past Events"
                  {...a11yProps(1)}
                />
              </Tabs>
              <S.Divider className="flex flex-row items-center justify-center w-fit gap-2 ">
                <SelectOption
                  placeholder="Event Type"
                  name="EventType"
                  options={[
                    { value: "Paid", label: "Paid" },
                    { value: "Free", label: "Free" },
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
                          <Card.Event
                            Id={record?.Id?.toString() ?? ""}
                            Image={record?.Image}
                            Title={record?.Title}
                            Descritpion={record?.Description}
                            ScheduleDate={record?.ScheduleDate}
                            Location={record?.Location}
                          />
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
