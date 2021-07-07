import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";
import Image from "next/image";

export type CardView2Props = {
  videoID: string;
  isYoutube: boolean;
  isOpen: boolean;
  order: number;
  onSelect: (videoID: string) => void;
};

const CardView2: React.FC<CardView2Props> = ({
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
      className={classNames("border border-solid flex-initial order-", {
        "flex-grow": isOpen,
        "flex-none": !isOpen,
      })}
    >
      <motion.div>
        <div className="flex flex-col items-center">
          <div
            className={classNames("relative overflow-auto", {
              "w-full h-36": isOpen,
              "w-36 h-96": !isOpen,
            })}
          >
            <Image
              className={classNames("hover:opacity-50 transition duration-150")}
              src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"}
              alt={videoID}
              layout="fill"
              objectFit="fill"
              onClick={(ev) => {
                onSelect(videoID);
              }}
            />
          </div>
          <motion.div layout className="w-full">
            <Content videoID={videoID} isYoutube={isYoutube} isOpen={isOpen} />
          </motion.div>
        </div>
      </motion.div>
    </motion.li>
  );
};

type ContentProps = {
  videoID: string;
  isYoutube: boolean;
  isOpen: boolean;
};

const Content: React.FC<ContentProps> = ({ videoID, isOpen }) => {
  return (
    <motion.div layout>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-screen h-screen top-0 left-0 fixed bg-black bg-opacity-50"
            layout
            initial={false}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ direction: "-moz-initial" }}
          >
            <ReactPlayer
              className="fixed left-0 right-0 m-auto w-full"
              url={"https://youtube.com/watch?v=" + videoID}
              playing={isOpen}
              controls
              css={{
                width: "100vw",
                height: "100vw",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardView2;
