import React, { useState, useRef } from "react";
import classNames from "classnames";

export type HeaderProps = {
  isShow: boolean | undefined;
  scrollDirection: "up" | "down" | undefined;
  scrollY: number;
};

export function Header(props: HeaderProps) {
  const [isIconClick, setIconClick] = useState<boolean>(false);

  return (
    <>
      <nav
        className={classNames(
          "group w-screen fixed left-0 top-0 box-border transition duration-500 z-30 transform",
          {
            "h-10 bg-gray-300 bg-opacity-50 -translate-y-4 hover:-translate-y-2 hover:bg-gray-500 hover:bg-opacity-100":
              props.scrollY > 100 || props.scrollDirection == "up",
            "h-20 bg-white": props.scrollY < 100 ? true : false,
            "bg-gray-500 h-20 translate-y-0": props.scrollDirection == "down",
          }
        )}
      >
        <div
          className={classNames(
            "cursor-pointer flex justify-around items-center mt-3 mb-3 transition duration-500",
            {
              "text-gray-300 group-hover:text-black":
                props.scrollY > 100 || props.scrollDirection == "up",
              "text-black":
                props.scrollY < 100 || props.scrollDirection == "down"
                  ? true
                  : false,
            }
          )}
        >
          <span>Logo</span>

          <a
            className={classNames("menu-trigger type12", {
              "active-12": isIconClick,
              "": !isIconClick,
            })}
            // href="#"
            onClick={() => {
              setIconClick(!isIconClick);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </nav>

      <div
        className={classNames(
          "fixed bg-green-100 mt-8 w-screen h-screen z-20",
          {
            visible: isIconClick,
            invisible: !isIconClick,
          }
        )}
      >
        <div>햄버거 클릭시 보여줄 내용!!</div>
      </div>
    </>
  );
}
