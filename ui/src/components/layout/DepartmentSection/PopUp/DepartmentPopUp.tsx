import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type DepartmentPopUpProps = {
  imageUri: string;
  imageAlt: string;
  title: string;
  description: string;
  id: string;
  setIsSelected: (boolean) => void;
  children: React.ReactNode;
};
const imageVariants = {
  open: {
    transition: { duration: 0.6, type: "spring", damping: 10, mass: 0.6 },
  },
  collapsed: {
    transition: { duration: 0.6, type: "spring", damping: 10, mass: 0.6 },
  },
};

const DepartmentPopUp: React.FC<DepartmentPopUpProps> = (props) => {
  const isOK = true;

  return (
    <>
      <motion.div className="fixed top-0 left-0">
        {props.children}
        <motion.div>{props.description}</motion.div>
      </motion.div>
    </>
  );
};

export default DepartmentPopUp;
