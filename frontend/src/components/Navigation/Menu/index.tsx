import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
import {
  ButtonColor,
  ButtonType,
  MenuProps,
  SFC,
  TooltipPlacement,
} from "../../../types";
import { CircleButton } from "../../Inputs";
import * as S from "./Styles";
import MdiIcon from "@mdi/react";
import { useToggle } from "react-use";
import { cn } from "../../../utils";

export const Menu: SFC<MenuProps> = ({
  ClassName,
  icon,
  label,
  onClick,
  isParent = false,
  isCollapse = false,
  isChild = false,
  children,
  IsActive = false,
}) => {
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <>
      {!isCollapse ? (
        <S.Container
          $isParent={isParent}
          className={cn("rounded-md", ClassName)}
          onClick={() => {
            if (isParent) {
              // Toggle the parent menu only if it's directly clicked
              toggleDisplay(!isDisplay);
            } else if (!isParent) {
              // Trigger the onClick prop for navigation if it's a child menu
              onClick();
            }
          }}
        >
          {isParent ? (
            <>
              <S.Menu className="rounded-md" $isDisplay={isDisplay}>
                <S.MenuContent $isDisplay={isDisplay}>
                  <S.Icon path={icon} size="30px" className="text-primary" />
                  <S.Text>
                    <S.Label className="text-slate-900">{label}</S.Label>
                    {!isDisplay ? (
                      <S.Icon path={mdiChevronRight} size="30px" />
                    ) : (
                      <S.Icon path={mdiChevronDown} size="30px" />
                    )}
                  </S.Text>
                </S.MenuContent>
              </S.Menu>
              <S.ChildContent
                $isDisplay={isDisplay}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </S.ChildContent>
            </>
          ) : (
            <S.ChildMenu className="" $IsActive={IsActive}>
              <S.Icon path={icon} size="30px" />
              <S.ChildLabel>{label}</S.ChildLabel>
            </S.ChildMenu>
          )}
        </S.Container>
      ) : (
        <>
          {!isParent ? (
            <CircleButton
              OnClick={onClick}
              Title={label}
              Placement={TooltipPlacement.right}
              Color={ButtonColor.white}
              Icon={
                <MdiIcon
                  path={icon}
                  size="30px"
                  className={IsActive ? "text-primary" : "text-slate-600"}
                />
              }
              ClassName={isChild ? "mb-2" : ""}
              Type={ButtonType.button}
            />
          ) : (
            <S.ChilCircleButton>{children}</S.ChilCircleButton>
          )}
        </>
      )}
    </>
  );
};
