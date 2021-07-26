import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useState, useRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useScrollConstraints } from "../../../Hooks/index";
import DepartmentPopUp from "./PopUp/DepartmentPopUp";

export type DepartmentCardPreviewProps = {
  id: string;
  imageUri: string;
  imageAlt: string;
  title: string;
  description: string;
};

const durationRegular = 0.35;
const easeRegular = [0.83, 0, 0.17, 1];

const viewVariants = {
  open: {
    backgroundColor: "rgba(107, 114, 128)",
  },
  closed: {
    backgroundColor: "rgba(0,0,0, 0)",
  },
};

const imageVariants = {
  closed: {
    width: "300px",
    height: "300px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    width: "800px",
    height: "400px",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
};
type TopProps = {
  id: string;
  isSelected: boolean;
  imageUri: string;
  imageAlt: string;
};

const Top: React.FC<TopProps> = (props) => {
  return (
    <>
      <motion.div
        layout
        layoutId={props.id + "_image"}
        variants={imageVariants}
        initial={imageVariants.closed}
        animate={props.isSelected ? imageVariants.open : imageVariants.closed}
        className="relative"
      >
        <Image
          className={classNames("w-full h-full rounded-full", {
            "z-10": props.isSelected,
            "z-0": !props.isSelected,
          })}
          layout="fill"
          objectFit="cover"
          src={props.imageUri}
          alt={props.imageAlt}
        />
      </motion.div>
    </>
  );
};

const DepartmentCardPreview: React.FC<DepartmentCardPreviewProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      {isSelected && (
        <motion.div
          layout
          layoutId={props.id + "_container"}
          className="fixed top-0 left-0 w-full h-full bg-black z-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        />
      )}
      <motion.li
        layoutId={props.id + "_view"}
        className={classNames("flex flex-col items-center pb-10 pt-10 ", {
          "fixed top-0 z-20 max-w-screen-lg w-full bg-gray-600 bg-opacity-95 rounded-lg": isSelected,
          relative: !isSelected,
        })}
        variants={viewVariants}
        initial={viewVariants.closed}
        animate={isSelected ? viewVariants.open : viewVariants.closed}
        onClick={(ev) => {
          setIsSelected(!isSelected);
        }}
      >
        <motion.div className="">
          <AnimatePresence>
            <Top
              id={props.id}
              isSelected={isSelected}
              imageUri={props.imageUri}
              imageAlt={props.imageAlt}
            />

            {isSelected ? (
              <motion.div
                className="w-full h-screen z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div className="text-white text-2xl">
                  {props.description}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div className="text-white text-2xl">
                {props.title}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.li>
    </>
  );
};

export default DepartmentCardPreview;
