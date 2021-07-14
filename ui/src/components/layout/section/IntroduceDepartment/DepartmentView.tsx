import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import { openSpring, closeSpring } from "./PopUp/animation";
import { useScrollConstraints } from "../../../../Hooks/index";

export type DepartmentViewProps = {
  imageUri: string;
  imageAlt: string;
  title: string;
  description: string;
};

const viewVariants = {
  active: {
    width: "100vw",
    hight: "100vw",
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 30 },
  },
  inactive: {
    overflow: "hidden",
    width: "288px",
    transition: { type: "spring", stiffness: 300, damping: 35 },
  },
};

const imageVariants = {
  open: {
    transition: { duration: 0.6, type: "spring", damping: 10, mass: 0.6 },
  },
  collapsed: {
    transition: { duration: 0.6, type: "spring", damping: 10, mass: 0.6 },
  },
};

const DepartmentView: React.FC<DepartmentViewProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  return (
    <AnimatePresence>
      <motion.div
        ref={cardRef}
        className={classNames("flex flex-col items-center pb-10 pt-10", {
          "z-50 bg-black fixed left-0 top-0": isSelected,
        })}
        onClick={(ev) => {
          setIsSelected(!isSelected);
        }}
        variants={viewVariants}
        initial="inactive"
        drag={isSelected ? "y" : false}
        dragConstraints={constraints}
        transition={{ duration: 1000 }}
        animate={isSelected ? "active" : "inactive"}
      >
        <motion.div
          className={classNames("transform", {
            "relative w-full": isSelected,
            "w-60": !isSelected,
          })}
        >
          <motion.div
            className={classNames("", {
              "w-full h-80": isSelected,
              "w-60 h-60 ": !isSelected,
            })}
            initial="collapsed"
            variants={imageVariants}
            animate={isSelected ? "open" : "collapsed"}
          >
            <Image
              className="rounded-full"
              src={props.imageUri}
              alt={props.imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
        <p className="text-center text-3xl text-white mt-10 mb-10">
          {props.title}
        </p>

        <motion.div className="bg-blend-darken">
          <p className="text-center text-lg text-white text-center">
            {props.description}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DepartmentView;
