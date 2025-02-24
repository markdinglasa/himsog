import { Roles, SFC } from "../../../types";
import * as S from "../../../styles";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { a11yProps, cn, renderPath } from "../../../utils";
import Card from "../../../components/Surfaces/Cards";
import { Pagination, PaginationItem, Tab, Tabs } from "@mui/material";
import { colors } from "../../../styles";
import { CustomButton, SelectOption } from "../../../components";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useToggle } from "react-use";
import { CustomModal } from "../../../modals";

const PublicEventPage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);

  const [index, setIndex] = useState<number>(0);
  const handleChanges = (_event: React.SyntheticEvent, newValue: number) => {
    setIndex(newValue);
  };
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      <S.Container className={cn("flex justify-center mb-10", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10">
          <S.Divider className="h-32 w-full relative mb-5 items-center justify-center flex bg-white">
            Ads here
          </S.Divider>
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
            <S.Divider className="flex flex-row items-center justify-center w-fit gap-2 py-2">
              <SelectOption
                placeholder="Event Type"
                name="EventType"
                options={[
                  { value: "Paid", label: "Paid" },
                  { value: "Free", label: "Free" },
                ]}
              />
              <CustomButton
                text="New"
                leftIcon={<AddIcon />}
                onClick={toggleDisplay}
              />
            </S.Divider>
          </S.Divider>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
            <Card.Event
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
              Location={"Somewhere Cebu City"}
              onClick={() => {}}
            />
            <Card.Event
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
              Location={"Somewhere Cebu City"}
              onClick={() => {}}
            />
          </S.CardContainer>
          <S.Divider className="w-full flex items-center justify-center pt-5">
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
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
      </S.Container>
      <CustomModal
        ClassName="w-[90vw] md:w-[500px]"
        close={toggleDisplay}
        title={"Request Access"}
        open={isDisplay}
      >
        <S.Divider className="flex flex-col items-start justify-start">
          <S.Span className="text-lg font-medium">
            Please provide your organization email
          </S.Span>
          <S.Span className="text-sm text-slate-600">
            Only authorized government health establishments are allowed to post
            event or article.
          </S.Span>
        </S.Divider>
      </CustomModal>
    </>
  );
};

export default PublicEventPage;
