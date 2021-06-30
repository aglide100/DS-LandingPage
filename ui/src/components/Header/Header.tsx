import React, { useState, useRef } from "react";
import classNames from "classnames";
import Fade from "react-reveal/Fade";
import TransitionGroup from "react-transition-group/TransitionGroup";

export type HeaderProps = {
  isShow: boolean | undefined;
  scrollDirection: "up" | "down" | undefined;
  scrollY: number;
};

export function Header(props: HeaderProps) {
  const [isIconClick, setIconClick] = useState<boolean>(false);

  return (
    <div>
      <nav
        className={classNames(
          "group w-screen fixed left-0 top-0 box-border transition duration-500 z-30 transform",
          {
            "bg-gray-500 h-20 translate-y-0": isIconClick,
            "h-20 bg-white": props.scrollY < 100 || !isIconClick,
            "h-20 bg-gray-300 bg-opacity-50 -translate-y-4 hover:translate-y-0 hover:bg-gray-500 hover:bg-opacity-100":
              props.scrollY > 100 &&
              props.scrollDirection == "up" &&
              !isIconClick,
            "bg-gray-500 h-20 translate-y-0 box-border":
              props.scrollY > 100 &&
              props.scrollDirection == "down" &&
              !isIconClick,
          }
        )}
      >
        <div
          className={classNames(
            "cursor-pointer w-full flex justify-between items-center mt-1 mb-3 transition duration-500 transform items-center",
            {
              "text-black translate-y-0 box-border":
                isIconClick ||
                (props.scrollY < 100 && props.scrollDirection == "down"),
              "text-gray-300 group-hover:text-black hover:translate-y-0":
                props.scrollY > 100 &&
                props.scrollDirection == "up" &&
                !isIconClick,
            }
          )}
        >
          <div>Logo</div>

          <a
            className={classNames(
              "menu-trigger type12 transform translate-y-4 mr-2 sm:mr-6",
              {
                "active-12": isIconClick,
                "": !isIconClick,
              }
            )}
            // href="#"
            onClick={() => {
              setIconClick(!isIconClick);
            }}
          >
            <span
              className={classNames("", {
                "bg-white e": isIconClick,
                "bg-gray-500": props.scrollY < 100 && !isIconClick,
                "bg-opacity-0 group-hover:bg-opacity-100 bg-gray-500 group-hover:bg-white":
                  props.scrollY > 100 &&
                  props.scrollDirection == "up" &&
                  !isIconClick,
                "bg-white":
                  props.scrollY > 100 &&
                  props.scrollDirection == "down" &&
                  !isIconClick,
              })}
            ></span>
            <span
              className={classNames("", {
                "bg-white e": isIconClick,
                "bg-gray-500": props.scrollY < 100 && !isIconClick,
                "bg-opacity-0 group-hover:bg-opacity-100 bg-gray-500 group-hover:bg-white":
                  props.scrollY > 100 &&
                  props.scrollDirection == "up" &&
                  !isIconClick,
                "bg-white":
                  props.scrollY > 100 &&
                  props.scrollDirection == "down" &&
                  !isIconClick,
              })}
            ></span>
            <span
              className={classNames("", {
                "bg-white e": isIconClick,
                "bg-gray-500": props.scrollY < 100 && !isIconClick,
                "bg-opacity-0 group-hover:bg-opacity-100 bg-gray-500 group-hover:bg-white":
                  props.scrollY > 100 &&
                  props.scrollDirection == "up" &&
                  !isIconClick,
                "bg-white":
                  props.scrollY > 100 &&
                  props.scrollDirection == "down" &&
                  !isIconClick,
              })}
            ></span>
          </a>
        </div>
      </nav>

      <TransitionGroup>
        {isIconClick ? (
          <Fade collapse bottom duration={500}>
            <div
              className={classNames(
                "fixed bg-green-100 mt-20 w-screen h-screen z-50",
                {
                  visible: isIconClick,
                  invisible: !isIconClick,
                }
              )}
            >
              <div>햄버거 클릭시 보여줄 내용!!</div>
            </div>
          </Fade>
        ) : null}
      </TransitionGroup>
    </div>
  );
}
