import React, { useState } from "react";
import { motion } from "framer-motion";

export type DepartmentPopUpProps = {
  imageUri: string;
  imageAlt: string;
  title: string;
  description: string;
};

const DepartmentPopUp: React.FC<DepartmentPopUpProps> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <>
      <motion.div
        className="z-10 fixed top-0 bottom-0"
        css={{ width: "100vw" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        onClick={(ev) => {
          ev.preventDefault(), setIsSelected(!isSelected);
        }}
      ></motion.div>

      <motion.div>{props.description}</motion.div>
    </>
  );
};

export default DepartmentPopUp;
