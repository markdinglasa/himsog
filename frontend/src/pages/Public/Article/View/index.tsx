import { ButtonType, Roles, SFC, ToastType } from "../../../../types";
import * as S from "../../../../styles";
import { useAuth, useToggle } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { cn, displayToast, renderPath } from "../../../../utils";
import Card from "../../../../components/Surfaces/Cards";
import {
  CustomButton,
  CustomInput,
  SelectOption,
} from "../../../../components";
import AddIcon from "@mui/icons-material/Add";
import { Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomModal } from "../../../../modals";
import UIcon from "@mdi/react";
import { mdiAlertOutline, mdiThumbUpOutline } from "@mdi/js";

export enum SortBy {
  RECENT = "recent",
  ALL = "all",
}
const PublicArticlePage: SFC = ({ ClassName }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      const path = renderPath(auth?.roles ?? Roles.default);
      navigate(path);
    }
  }, [auth]);
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RECENT);
  console.log(sortBy);
  const [isDisplay, toggleDisplay] = useToggle(false);
  const [modIndex, setModIndex] = useState<number>(0);

  const handleSubmitEmail = () => {
    try {
      setModIndex(2);
    } catch (error: any) {
      displayToast(
        error.message || "Something went wrong, please try again.",
        ToastType.error,
      );
    }
  };
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
            <S.Divider className="flex flex-row items-center justify-start w-fit gap-2 p-2">
              <S.Span>Sort by</S.Span>
              <SelectOption
                ClassName="bg-white"
                name="EventType"
                options={[
                  { value: SortBy.RECENT, label: SortBy.RECENT },
                  { value: SortBy.ALL, label: SortBy.ALL },
                ]}
                OnChange={setSortBy}
              />
            </S.Divider>
            <S.Divider className="flex flex-row items-center justify-center w-fit gap-2">
              <CustomButton
                text="New"
                leftIcon={<AddIcon className="text-primary md:text-white" />}
                onClick={toggleDisplay}
              />
            </S.Divider>
          </S.Divider>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
            <Card.Article
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
            />
            <Card.Article
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
            />
            <Card.Article
              Id={"2"}
              Image={null}
              Title={"Lorem ipsum negoro"}
              Descritpion={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
              ScheduleDate={"2025-01-02"}
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
                      backgroundColor: S.colors.primary, // change background color to the active page
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
          <S.Divider className="w-full flex flex-col">
            <CustomInput
              name="Email"
              placeholder="example@doh.gov.ph"
              ClassName="w-full"
            />
          </S.Divider>
          <S.Divider className="w-full flex justify-end items-center">
            <CustomButton
              text="Request Access"
              type={ButtonType.button}
              onClick={handleSubmitEmail}
            />
          </S.Divider>
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

export default memo(PublicArticlePage);
