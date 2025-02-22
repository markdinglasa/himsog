import { ButtonType, HeaderProps, RouteChannel, SFC } from "../../../types";
import { CircleButton } from "../../Inputs";
import { ProfileOption } from "../../Surfaces";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import * as S from "./Styles";
import { AccessRight } from "../../DataDisplay";

export const Header: SFC<HeaderProps> = ({
  ClassName,
  Toggle,
  Collapse,
  IsTeller = false,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container className={ClassName}>
        <S.LeftContent>
          <S.MobileMenu $IsTeller={IsTeller} className="">
            <AccessRight OtherCondition={!IsTeller}>
              <CircleButton
                OnClick={Toggle}
                IsNotification={false}
                Icon={<MenuIcon className="text-primary" />}
                Type={ButtonType.button}
                Title="Menur"
              />
            </AccessRight>
            <S.Image
              className=""
              src={
                "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              }
              onClick={() => navigate(RouteChannel.DASHBOARD)}
            />
          </S.MobileMenu>

          <S.DesktopMenu $IsTeller={IsTeller}>
            <S.DesktopContent>
              <CircleButton
                OnClick={Collapse}
                IsNotification={false}
                Icon={<MenuIcon className="text-primary" />}
                Type={ButtonType.button}
                Title="Menu"
              />

              <S.SearchCon>
                <S.TextField
                  label=""
                  id="Search"
                  size="small"
                  name="filter"
                  placeholder={"Search"}
                  disabled
                />
              </S.SearchCon>
            </S.DesktopContent>
          </S.DesktopMenu>
        </S.LeftContent>
        <S.RightContent>
          <CircleButton
            OnClick={() => {}}
            IsNotification={false}
            Icon={<SearchIcon className="text-primary" />}
            Type={ButtonType.button}
            ClassName="block md:hidden"
          />
          <CircleButton
            OnClick={() => navigate(RouteChannel.NOTIFICATIONS)}
            IsNotification={false}
            Title="Notifications"
            Icon={<NotificationsIcon className="text-primary" />}
            Type={ButtonType.button}
          />
          <ProfileOption />
        </S.RightContent>
      </S.Container>
    </>
  );
};
