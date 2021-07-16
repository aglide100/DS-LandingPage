import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";
import Image from "next/image";

export type CardViewProps = {
  videoID: string;
  isYoutube: boolean;
  isOpen: boolean;
  order: number;
  onSelect: (videoID: string) => void;
};

const cardVariants = {
  expanded: {
    width: "900px",
    height: "144px",
    transition: {
      duration: 1,
    },
  },
  collapsed: {
    width: "144px",
    hight: "384px",
    transition: {
      duration: 1,
    },
  },
};

const contentVariants = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  hidden: {
    maxWidth: "900px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CardView: React.FC<CardViewProps> = ({
  videoID,
  isYoutube,
  isOpen,
  order,
  onSelect,
}) => {
  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      className={classNames(
        "border border-solid flex-initial h-96 order-" + order,
        {
          "mr-0 flex-nowrap": isOpen,
          "flex-none": !isOpen,
        }
      )}
    >
      <motion.div className="flex flex-col items-center">
        <motion.div
          layout
          className="relative overflow-hidden"
          variants={cardVariants}
          initial={false}
          animate={isOpen ? "expanded" : "collapsed"}
          whileHover={{ width: "500px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div layout className=" h-96">
            <Image
              src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"}
              alt={videoID}
              layout="fill"
              objectFit="cover"
              onClick={(ev) => {
                ev.preventDefault();
                onSelect(videoID);
              }}
            />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full"
            >
              <ReactPlayer
                className="relative left-0 top-0 w-full"
                url={"https://youtube.com/watch?v=" + videoID}
                playing={isOpen}
                controls
                css={{ maxWidth: "900px" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  );
};

export default CardView;