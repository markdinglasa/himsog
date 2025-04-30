import { ButtonType, HeaderProps, Roles, SFC } from "../../../types";
import { CircleButton } from "../../Inputs";
import { ProfileOption } from "../../Surfaces";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import * as S from "./Styles";
import { AccessControl } from "../../DataDisplay";
import { useAuth } from "../../../hooks";
import { cn, IsBoolean, renderPath } from "../../../utils";
import Logo from "../../../asset/svg/logo.svg";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import API from "../../../hooks/api";

export const Header: SFC<HeaderProps> = ({
  ClassName,
  Toggle,
  Collapse,
  IsTeller = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles ?? Roles.default);

  const { data: IsNotified } = API.Utility.Notification.IsNotified(
    Number(auth?.user ?? 0),
  );
  return (
    <>
      <S.Container className={cn("px-4 py-2 ", ClassName)}>
        <S.LeftContent className="">
          <S.MobileMenu $IsTeller={IsTeller} className="">
            <AccessControl OtherCondition={!IsTeller}>
              <CircleButton
                OnClick={Toggle}
                IsNotification={false}
                Icon={<MenuIcon className="text-primary" />}
                Type={ButtonType.button}
                Title="Menu"
              />
            </AccessControl>
            <S.Image
              className=""
              src={Logo}
              alt="himsog-logo"
              onClick={() => navigate(path)}
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
            </S.DesktopContent>
          </S.DesktopMenu>
        </S.LeftContent>
        <S.RightContent>
          <AccessControl UserRoles={[Roles.nutritionist, Roles.client]}>
            <CircleButton
              OnClick={() => navigate(`${path}/messenger/${0}`)}
              IsNotification={false}
              Title="Messenger"
              Icon={<MessageOutlinedIcon className="text-primary" />}
              Type={ButtonType.button}
            />
          </AccessControl>
          <CircleButton
            OnClick={() => navigate(`${path}/notifications`)}
            IsNotification={IsBoolean(IsNotified?.IsNotification ?? 0)}
            Title="Notifications"
            Icon={<NotificationsNoneOutlinedIcon className="text-primary" />}
            Type={ButtonType.button}
          />
          <ProfileOption />
        </S.RightContent>
      </S.Container>
    </>
  );
};
