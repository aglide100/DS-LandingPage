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
    <motion.div
      onClick={(ev) => {
        ev.preventDefault(), setIsSelected(!isSelected);
      }}
    ></motion.div>
  );
};

export default DepartmentPopUp;
