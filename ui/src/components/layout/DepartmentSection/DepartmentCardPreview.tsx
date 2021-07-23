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

const viewVariants = {
  expanded: {
    width: "100vw",
    hight: "100vw",
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 30 },
  },
  collapsed: {
    overflow: "hidden",
    width: "288px",
    transition: { type: "spring", stiffness: 300, damping: 35 },
  },
};

// const imageVariants = {
//   open: {
//     transition: { duration: 0.6, type: "spring", damping: 10, mass: 0.6 },
//   },
//   collapsed: {
//     transition: { duration: 0.6, type: "spring", damping: 10, mass: 0.6 },
//   },
// };

const DepartmentCardPreview: React.FC<DepartmentCardPreviewProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  return (
    <>
      <motion.div
        ref={cardRef}
        className={classNames("flex flex-col items-center pb-10 pt-10", {
          fixed: isSelected,
        })}
        onClick={(ev) => {
          setIsSelected(!isSelected);
        }}
        drag={isSelected ? "y" : false}
        dragConstraints={constraints}
        variants={viewVariants}
        animate={isSelected ? "expanded" : "collapsed"}
      >
        <AnimateSharedLayout type="crossfade">
          <motion.div className="w-60 h-52">
            <Image
              className="rounded-full"
              src={props.imageUri}
              alt={props.imageAlt}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          {isSelected && (
            <DepartmentPopUp
              imageUri={props.imageUri}
              imageAlt={props.imageAlt}
              title={props.title}
              description={props.description}
            />
          )}
        </AnimateSharedLayout>
      </motion.div>
    </>
  );
};

export default DepartmentCardPreview;
