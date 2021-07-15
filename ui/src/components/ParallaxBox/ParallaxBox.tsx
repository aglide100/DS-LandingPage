import React, { ReactNode } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export type ParallaxBoxProps = {
  children: ReactNode;
};

const ParallaxBox: React.FC<ParallaxBoxProps> = (props) => {
  const { scrollY } = useViewportScroll();
  const offsetY = window.innerHeight;
  const y = useTransform(scrollY, [offsetY + 300, 0], [0, offsetY / 2 + 300]);

  return (
    <>
      <motion.div style={{ y: y }}>{props.children}</motion.div>
    </>
  );
};

export default ParallaxBox;
