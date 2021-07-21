import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";
import Image from "next/image";

export type CardViewProps = {
  videoID: string;
  isOpen: boolean;
  order: number;
  isFirst: boolean;
  onSelect: (videoID: string, order: number) => void;
  onHover: () => void;
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
  isOpen,
  order,
  isFirst,
  onSelect,
  onHover,
}) => {
  return (
    <motion.li
      layout
      className={classNames(
        "border border-solid cursor-pointer h-96 order-" + order,
        {
          "flex-nowrap": isOpen,
        }
      )}
      onMouseEnter={(ev) => {
        ev.preventDefault();
        {
          isFirst ? onHover() : null;
          console.log(isFirst);
        }
      }}
    >
      <motion.div className="flex flex-col items-center">
        <motion.div
          layout
          className="relative overflow-hidden"
          variants={cardVariants}
          initial={false}
          animate={
            isOpen
              ? "expanded"
              : order == 0 && isFirst
              ? { width: "31.25rem" }
              : "collapsed"
          }
          whileHover={{ width: "31.25rem" }}
          transition={{ duration: 0.7 }}
        >
          <motion.div className="w-full h-96">
            <Image
              src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"}
              alt={videoID}
              layout="fill"
              objectFit="cover"
              onClick={(ev) => {
                ev.preventDefault();
                onSelect(videoID, order);
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
              onKeyPress={(ev) => {
                ev.preventDefault();
                if (ev.key === "esc") {
                  onSelect(videoID, order);
                }
              }}
            >
              <ReactPlayer
                className="relative left-0 top-0 w-full"
                url={"https://youtube.com/watch?v=" + videoID}
                playing={isOpen}
                controls
                css={{ maxWidth: "800px" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  );
};

export default CardView;
