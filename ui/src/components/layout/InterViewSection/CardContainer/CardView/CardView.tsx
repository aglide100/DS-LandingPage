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

// const playbackVariants = {
//   hover: {
//     opacity: 0,
//   },
//   collapsed: {
//     opacity: 1,
//   },
// };

const cardVariants = {
  expanded: {
    width: "750px",
    height: "100px",
    transition: {
      duration: 1,
    },
  },
  collapsed: {
    width: "150px",
    hight: "400px",
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
    maxWidth: "750px",
    maxHeight: "900px",
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
      className={classNames("cursor-pointer order-" + order, {
        "flex-nowrap": isOpen,
      })}
      onMouseEnter={(ev) => {
        ev.preventDefault();
        {
          isFirst ? onHover() : null;
        }
      }}
      whileHover="hover"
    >
      <motion.div className="flex flex-col items-center">
        <AnimatePresence>
          <motion.div
            layout
            className="relative overflow-hidden"
            variants={cardVariants}
            initial={false}
            animate={
              isOpen
                ? "expanded"
                : order == 0 && isFirst
                ? { width: "28rem" }
                : "collapsed"
            }
            whileHover={{ width: "28rem" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div className="w-full h-96">
              {/* <motion.div className="z-10 w-10 h-10 absolute top-1/2 right-1/2">
                <Icon which="playback" />
              </motion.div> */}
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
                css={{ maxWidth: "750px" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  );
};

export default CardView;
