import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames";
import Image from "next/image";

export type CardViewProps = {
  videoID: string;
  isYoutube: boolean;
  isOpen: boolean;
  onSelect: (videoID: string) => void;
};

const CardView: React.FC<CardViewProps> = ({
  videoID,
  isYoutube,
  isOpen,
  onSelect,
}) => {
  const imageWidth = isOpen ? 800 : 144;
  const imageHeight = isOpen ? 144 : 600;
  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      className={classNames("border border-solid flex-initial ", {
        "order-last": isOpen,
      })}
    >
      <motion.div>
        <div className="flex flex-col items-center">
          <Image
            className={classNames(
              "object-cover hover:opacity-50 transition duration-150",
              {
                "w-full h-36": isOpen,
              }
            )}
            src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"}
            alt={videoID}
            width={imageWidth}
            height={imageHeight}
            onClick={(ev) => {
              onSelect(videoID);
            }}
          />
          <motion.div layout>
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
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReactPlayer
              url={"https://youtube.com/watch?v=" + videoID}
              playing={isOpen}
              controls
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CardView;
