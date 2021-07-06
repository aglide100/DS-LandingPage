import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Icon from "../Icon/Icon";

export type HeaderProps = {
  isShow: boolean | undefined;
  scrollDirection: "up" | "down" | undefined;
  scrollY: number;
};

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 10px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 10px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header: React.FC<HeaderProps> = ({
  isShow,
  scrollDirection,
  scrollY,
}) => {
  const [isIconClick, setIconClick] = useState<boolean>(false);

  return (
    <div>
      <nav
        className={classNames(
          "group w-screen fixed left-0 top-0 transition duration-500 z-40 transform shadow",
          {
            "h-20 translate-y-0": isIconClick,
            "h-20 bg-white": scrollY < 100 || !isIconClick,
            "h-20 bg-gray-300 bg-opacity-50 -translate-y-4 hover:translate-y-0 hover:bg-white hover:bg-opacity-100":
              scrollY > 100 && scrollDirection == "up" && !isIconClick,
            "bg-white h-20 translate-y-0 box-border":
              scrollY > 100 && scrollDirection == "down" && !isIconClick,
          }
        )}
      >
        <div
          className={classNames(
            "cursor-pointer w-full flex justify-between items-center mt-1 mb-3 transition duration-500 transform items-center",
            {
              "text-black translate-y-0 box-border":
                isIconClick || (scrollY < 100 && scrollDirection == "down"),
              "text-gray-300 group-hover:text-black hover:translate-y-0":
                scrollY > 100 && scrollDirection == "up" && !isIconClick,
            }
          )}
        >
          <div className="w-52">
            <Icon which="Logo" />
          </div>

          <a
            className={classNames(
              "menu-trigger type12 transform translate-y-4 mr-2 sm:mr-6 z-50",
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
              className={classNames("bg-black", {
                "bg-white": isIconClick,
                // "bg-white e": isIconClick,
                // "bg-gray-500": scrollY < 100 && !isIconClick,
                // "bg-opacity-0 group-hover:bg-opacity-100 bg-gray-500 group-hover:bg-black":
                //   scrollY > 100 && scrollDirection == "up" && !isIconClick,
                // "bg-white":
                //   scrollY > 100 && scrollDirection == "down" && !isIconClick,
              })}
            ></span>
            <span
              className={classNames("bg-black", { "bg-white": isIconClick })}
            ></span>
            <span
              className={classNames("bg-black", { "bg-white": isIconClick })}
            ></span>
          </a>
        </div>
      </nav>
      <motion.nav initial={false} animate={isIconClick ? "open" : "closed"}>
        <motion.div
          className={classNames(
            "fixed bg-black w-screen h-screen z-30 top-0 transition z-30",
            {
              "bg-opacity-100": isIconClick,
              "bg-opacity-0": scrollY > 100,
            }
          )}
          variants={variants}
        >
          {isIconClick && <div className="mt-20">Hello</div>}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Header;
