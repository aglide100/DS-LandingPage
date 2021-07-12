import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { openSpring, closeSpring } from "./PopUp/animation";

export type DepartmentViewProps = {
  imageUri: string;
  imageAlt: string;
  title: string;
  description: string;
};

const imageVariants = {
  open: {
    width: "100%",
    hight: "100%",
    x: "100%",
    y: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    width: "240px",
    hight: "240px",
    transition: {
      duration: 1,
    },
  },
};

const DepartmentView: React.FC<DepartmentViewProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <div
        className={classNames("flex flex-col items-center pb-10 pt-10", {
          "w-72": !isSelected,
          "top-0 left-0 right-0 fixed overflow-hidden": isSelected,
        })}
        onClick={(ev) => {
          setIsSelected(!isSelected);
        }}
      >
        <motion.div
          className={classNames("transform", {
            relative: isSelected,
          })}
          initial="hidden"
          variants={imageVariants}
          animate={isSelected ? "open" : "hidden"}
        >
          <motion.div animate={isSelected ? openSpring : closeSpring}>
            <div
              className={classNames("", {
                "w-full h-60": isSelected,
                "w-60 h-60 ": !isSelected,
              })}
            >
              <Image
                className="rounded-full"
                src={props.imageUri}
                alt={props.imageAlt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </motion.div>
        {isSelected ? (
          <motion.div className="bg-blend-darken">
            <span className="text-center text-lg text-white">
              {props.description}
            </span>
          </motion.div>
        ) : (
          <span className="text-center text-lg text-white mt-10">
            {props.title}
          </span>
        )}
      </div>
    </AnimatePresence>
  );
};

export default DepartmentView;
