import {
  ButtonType,
  NotificationTable,
  RouteChannel,
  SFC,
} from "../../../types";
import * as S from "../../../styles/Styles";
import {
  CustomButton,
  DashboardCard,
  DoughnutChart,
  IncrementCard,
  LineChart,
  NoReplyEmail,
  PageBreadCrumbs,
} from "../../../components";
import { mdiAccountOutline } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { cn, formatNumber } from "../../../utils";
import { useAddNotification, useGetAllRecordCount } from "../../../hooks";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const DashboardPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { records } = useGetAllRecordCount();
  const { add } = useAddNotification();

  const sendEmail = async () => {
    const data: NotificationTable = {
      UserId: 2,
      Description: "Test",
      Link: "test",
      IsRead: false,
    };
    await add(data, true, "Automation Email Test", NoReplyEmail);
  };

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={[]} Active="Dashboard" />
          <S.Actions>
            <CustomButton
              icon={undefined}
              morph={false}
              onClick={sendEmail}
              text="Notify Test"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.Content className="">
          <S.CardContainer className="flex md:flex-row flex-col gap-2 w-full mb-2">
            <IncrementCard
              Text="Today's sales"
              Amount={formatNumber(5355)}
              Percent={1}
              Icon={
                <ShoppingCartOutlinedIcon
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={false}
              PercentText={"Since last week"}
            />
            <IncrementCard
              Text="monthly's sales"
              Amount={formatNumber(94355)}
              Percent={1}
              Icon={
                <AttachMoneyOutlinedIcon
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={false}
              PercentText={"Since last month"}
            />
            <IncrementCard
              Text="most sold item"
              Amount={formatNumber(100)}
              Percent={1}
              Icon={
                <LunchDiningOutlinedIcon
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={false}
              PercentText={"Since last month"}
            />
            <IncrementCard
              Text="new customers"
              Amount={formatNumber(100)}
              Percent={15}
              Icon={
                <PeopleOutlinedIcon
                  className="text-white w-full h-full"
                  style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                  }}
                />
              }
              IsNegative={true}
              PercentText={"Since last month"}
            />
          </S.CardContainer>
          <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <DashboardCard
              Icons={mdiAccountOutline}
              Text={`${records[19]?.Count ?? 0}`}
              Title="User"
              OnClick={() => navigate(RouteChannel.USER)}
            />
          </S.CardContainer>
        </S.Content>
        <S.Content className="mt-2 flex flex-col md:flex-row gap-2">
          <S.Divider className="w-full md:w-8/12">
            <LineChart />
          </S.Divider>
          <S.Divider className="w-full md:w-4/12">
            <DoughnutChart />
          </S.Divider>
        </S.Content>
        {/*<ZReadingReceipt SelectedDate={"02/06/2025"} />*/}
        <S.Divider
          className={`text-sm text-slate-700`}
          dangerouslySetInnerHTML={{ __html: NoReplyEmail ?? "" }}
        ></S.Divider>
      </S.Container>
    </>
  );
};
