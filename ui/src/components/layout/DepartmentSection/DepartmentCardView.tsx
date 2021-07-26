import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useMotionValue,
} from "framer-motion";
import React, { useState, useRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import Fade from "react-reveal/Fade";
import PreviousMap from "postcss/lib/previous-map";

export type DepartmentCardPreviewProps = {
  id: string;
  imageUri: string;
  imageAlt: string;
  title: string;
  description: string;
  index: number;
};

const durationRegular = 0.35;
const easeRegular = [0.83, 0, 0.17, 1];

const viewVariants = {
  open: {
    backgroundColor: "rgba(107, 114, 128)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
  closed: {
    opacity: 0,
    backgroundColor: "rgba(0,0,0,0)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35,
    },
  },
};

const imageVariants = {
  closed: {
    width: "100%",
    height: "100%",
    transition: {
      duration: durationRegular,
      ease: easeRegular,
    },
  },
  open: {
    width: "100%",
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
        className={classNames("cursor-pointer", {
          flex: props.isSelected,
          "relative w-60 h-60": !props.isSelected,
        })}
      >
        <Image
          className={classNames("", {
            "z-10 rounded-lg": props.isSelected,
            "z-0 rounded-full": !props.isSelected,
          })}
          layout="fill"
          objectFit="cover"
          src={props.isSelected ? "/sample.jpg" : props.imageUri}
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
          layoutId={props.id + "_overlay"}
          className="fixed top-0 left-0 w-screen h-screen bg-black z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          onClick={(ev) => {
            setIsSelected(!isSelected);
          }}
        />
      )}
      <motion.li
        layoutId={props.id + "_view"}
        className={classNames("flex flex-col items-center pb-10 pt-10 ", {
          "fixed top-24 z-20 max-w-screen-lg w-full h-full  rounded-lg": isSelected,
          "": !isSelected,
        })}
        onClick={(ev) => {
          setIsSelected(!isSelected);
        }}
      >
        <motion.div
          className={classNames("", { "overflow-y-auto": isSelected })}
        >
          <Fade bottom duration={800} delay={200 + props.index * 150}>
            <Top
              id={props.id}
              isSelected={isSelected}
              imageUri={props.imageUri}
              imageAlt={props.imageAlt}
            />
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  className="z-10"
                  variants={viewVariants}
                  // initial={viewVariants.closed}
                  animate={viewVariants.open}
                  exit={viewVariants.closed}
                >
                  <motion.div className="text-white text-2xl">
                    {props.description}
                  </motion.div>
                </motion.div>
              )}
              {!isSelected && (
                <motion.div className="text-white text-2xl">
                  {props.title}
                </motion.div>
              )}
            </AnimatePresence>
          </Fade>
        </motion.div>
      </motion.li>
    </>
  );
};

export default DepartmentCardPreview;
