import { Roles, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { a11yProps, cn, renderPath } from "../../../../utils";
import Card from "../../../../components/Surfaces/Cards";
import { Pagination, PaginationItem, Tab, Tabs } from "@mui/material";
import { colors } from "../../../../styles";
import { CustomButton, SelectOption } from "../../../../components";
import Icon from "../../../../constants/icon";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import SampleImage from "../../../../asset/images/sample-image.jpg";
import UIcon from "@mdi/react";
import { mdiAlertOutline, mdiThumbUpOutline } from "@mdi/js";
import Form from "../../../../components/Surfaces/Forms";
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
  const [modIndex, setModIndex] = useState<number>(0);

  return (
    <>
      <S.Container className={cn("flex justify-center mb-10", ClassName)}>
        <S.Content className="h-full flex flex-col justify-center items-center w-full md:w-11/12 mt-10">
          <S.Divider className="h-32 w-full relative mb-5 items-center justify-center flex bg-white">
            <S.Span className="text-md uppercase font-medium">
              Commercial Space for Lease
            </S.Span>
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
                leftIcon={<Icon.Add />}
                onClick={toggleDisplay}
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
      </S.Container>
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
      <CustomModal
        ClassName="w-[90vw] md:w-[500px]"
        close={() => {
          setModIndex(0);
          toggleDisplay();
        }}
        title={""}
        open={modIndex > 0}
      >
        {modIndex === 1 ? (
          <S.Divider className="flex flex-col items-center justify-center ">
            <S.Divider className="relative p-2 mb-2">
              <UIcon
                path={mdiThumbUpOutline}
                className="w-[5rem] h-[5rem] text-primary"
              />
            </S.Divider>
            <S.Divider className="w-full flex flex-col item-center justify-center text-center mb-5">
              <S.Span className="text-bold text-lg">
                Email is authorized!
              </S.Span>
              <S.Span className="text-sm text-slate-600">
                An access link has been sent to your email. This link is valid
                for one-time access only.
              </S.Span>
            </S.Divider>
          </S.Divider>
        ) : (
          <>
            <S.Divider className="flex flex-col items-center justify-center ">
              <S.Divider className="relative p-2 mb-2">
                <UIcon
                  path={mdiAlertOutline}
                  className="w-[5rem] h-[5rem] text-red-300"
                />
              </S.Divider>
              <S.Divider className="w-full flex flex-col item-center justify-center text-center mb-5">
                <S.Span className="text-bold text-lg">Access Denied</S.Span>
                <S.Span className="text-sm text-slate-600 mb-2">
                  Your email is not authorized to post events or artiles. Please{" "}
                  <S.Span className="text-sm text-blue-600">
                    contact the admin
                  </S.Span>{" "}
                  for verification.
                </S.Span>
                <S.Span
                  className="text-sm text-blue-600 cursor-pointer"
                  onClick={() => setModIndex(0)}
                >
                  Try again
                </S.Span>
              </S.Divider>
            </S.Divider>
          </>
        )}
      </CustomModal>
    </>
  );
};

export default memo(PublicEventPage);
