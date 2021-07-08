import { motion, AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
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
  const focusTarget = useRef<any>(null);

  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      className={classNames(
        "border border-solid flex-initial h-96 order-" + order,
        {
          "mr-0": isOpen,
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
        >
          <motion.div layout className=" h-96">
            <Image
              className="hover:opacity-50 transition duration-150"
              src={"https://img.youtube.com/vi/" + videoID + "/sddefault.jpg"}
              alt={videoID}
              layout="fill"
              objectFit="cover"
              onClick={(ev) => {
                ev.preventDefault();
                console.log(focusTarget);
                // focusTarget.current.scrollIntoView({ behavior: "smooth" });
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
                ref={focusTarget}
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
