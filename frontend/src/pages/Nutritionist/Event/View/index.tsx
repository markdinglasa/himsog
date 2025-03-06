import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { memo, useState } from "react";
import { a11yProps, cn } from "../../../../utils";
import Card from "../../../../components/Surfaces/Cards";
import { Pagination, PaginationItem, Tab, Tabs } from "@mui/material";
import { colors } from "../../../../styles";
import {
  CustomButton,
  PageBreadCrumbs,
  SelectOption,
} from "../../../../components";
import Icon from "../../../../constants/icon";
import SampleImage from "../../../../asset/images/sample-image.jpg";
import { useNavigate } from "react-router-dom";

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
            <S.Divider className="border-b flex flex-row justify-between items-center w-full mb-10">
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
            <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
              <Card.Event
                Id={"2"}
                Image={SampleImage}
                Title={"Lorem ipsum negoro"}
                Descritpion={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
                ScheduleDate={"2025-01-02"}
                Location={"Cebu City"}
              />
              <Card.Event
                Id={"3"}
                Image={null}
                Title={"Lorem ipsum negoro"}
                Descritpion={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
                ScheduleDate={"2025-01-02"}
                Location={"Somewhere Cebu City"}
              />
              <Card.Event
                Id={"3"}
                Image={null}
                Title={"Lorem ipsum negoro"}
                Descritpion={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
                ScheduleDate={"2025-01-02"}
                Location={"Somewhere Cebu City"}
              />
              <Card.Event
                Id={"3"}
                Image={null}
                Title={"Lorem ipsum negoro"}
                Descritpion={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
                ScheduleDate={"2025-01-02"}
                Location={"Somewhere Cebu City"}
              />
            </S.CardContainer>
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
