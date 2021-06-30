import React, { useState, useRef } from "react";
import classNames from "classnames";

import { useGetScroll, UseScrollHooksProps } from "../../Hooks";

export type HeaderProps = {};

export function Header() {
  const node = useRef<HTMLDivElement>(null);
  const [isIconClick, setIconClick] = useState<boolean>(false);

  const useScrollHooksProps: UseScrollHooksProps = {
    receivedRef: node,
  };

  const result = useGetScroll(useScrollHooksProps);

  return (
    <>
      <nav
        className={classNames(
          "group w-screen fixed left-0 top-0 box-border transition duration-500 z-30",
          {
            "h-10 bg-gray-300 bg-opacity-50 transform -translate-y-4 hover:-translate-y-2 hover:bg-gray-500 hover:bg-opacity-100":
              result.scrollY > 100 || result.scrollDirection == "up",
            "h-20 bg-white ":
              result.scrollY < 100 || result.scrollDirection == "down"
                ? true
                : false,
          }
        )}
      >
        <div
          className={classNames(
            "cursor-pointer flex justify-around items-center mt-3 mb-3 transition duration-500",
            {
              "text-gray-300 group-hover:text-black":
                result.scrollY > 100 || result.scrollDirection == "up",
              "text-black":
                result.scrollY < 100 || result.scrollDirection == "down"
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
