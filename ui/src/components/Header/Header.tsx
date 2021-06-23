import React, { useState, useEffect } from "react";
import classNames from "classnames";

export type HeaderProps = {};

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  });

  return (
    <nav
      className={classNames(
        "group w-screen fixed left-0 top-0 box-border transition duration-500 z-10",
        {
          "h-10 bg-gray-300 bg-opacity-50 transform -translate-y-4 hover:translate-y-0 hover:bg-gray-500 hover:bg-opacity-100":
            scrollPosition > 100,
          "h-20 bg-white ": scrollPosition < 100,
        }
      )}
    >
      <div
        className={classNames(
          "cursor-pointer flex justify-around items-center mt-3 mb-3 transition duration-500",
          {
            "text-gray-300 group-hover:text-black": scrollPosition > 100,
            "text-black": scrollPosition < 100,
          }
        )}
      >
        <span>Hello!</span>
        <span>Foo</span>
        <span>Bar</span>
      </div>
    </nav>
  );
}
