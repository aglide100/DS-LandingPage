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

const contentVariants = {
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const CardView: React.FC<CardViewProps> = ({
  videoID,
  isYoutube,
  isOpen,
  order,
  onSelect
}) => {
  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      className={classNames("border border-solid flex-initial order-", {
        "flex-grow": isOpen,
        "flex-none": !isOpen
      })}
    >
      <motion.div>
        <div className="flex flex-col items-center">
          <motion.div
            className={classNames("relative overflow-auto", {
              "w-full h-36": isOpen,
              "w-36 h-96": !isOpen
            })}
          >
            <Image
              className={classNames("hover:opacity-50 transition duration-150")}
              src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"}
              alt={videoID}
              layout="fill"
              objectFit="fill"
              onClick={ev => {
                onSelect(videoID);
              }}
            />
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col items-center w-screen h-screen top-0 left-0 fixed bg-black bg-opacity-50 z-50"
                layout
                variants={contentVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <div
                  onClick={e => {
                    e.preventDefault();
                    onSelect(videoID);
                  }}
                  className="bg-green-100 text-2xl mt-52"
                >
                  창닫기
                </div>
                <ReactPlayer
                  className="top-28 "
                  url={"https://youtube.com/watch?v=" + videoID}
                  playing={isOpen}
                  controls
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.li>
  );
};

export default CardView;
