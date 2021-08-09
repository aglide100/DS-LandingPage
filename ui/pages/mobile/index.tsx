import React, { useEffect, useState } from "react";
import LoadingComponent from "../../src/components/atom/Loading/Loading";
import LoadingError from "../../src/components/atom/LoadingError/LoadingError";
import dynamic from "next/dynamic";
import InterViewSectionWrapper from "../../src/components/layout/InterViewSectionWrapper/InterviewSectionWrapper";
import TrophySectionWrapper from "../../src/components/layout/TrophySectionWrapper/TrophySectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  down: {
    y: -1500,
    zIndex: 0
  },
  show: { y: 0, zIndex: 1 },
  exit: { y: 0, zIndex: 0 },
  up: {
    y: 1500,
    zIndex: 0
  }
};

const IntroSection = dynamic(
  () =>
    import("../../src/components/layout/IntroSection/IntroSection").catch(
      err => {
        return () => <LoadingError>{err}</LoadingError>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const IntroChildren = dynamic(
  () =>
    import(
      "../../src/components/layout/IntroSection/IntroCardView/IntroCardView"
    ).catch(err => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: true }
);

const InterViewSection = dynamic(
  () =>
    import(
      "../../src/components/layout/InterViewSection/InterViewSection"
    ).catch(err => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: false }
);

const DepartmentSection = dynamic(
  () =>
    import(
      "../../src/components/layout/DepartmentSection/DepartmentSection"
    ).catch(err => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: false }
);

const lastPage = 6;

const FirstSection = (
  <motion.div
    className="w-full "
    initial={{ y: -2000 }}
    animate={{ y: 0, zIndex: 1 }}
    exit={{ y: 0, zIndex: 0 }}
    transition={{ duration: 1 }}
  >
    <IntroSection>
      <IntroChildren />
    </IntroSection>
  </motion.div>
);

const SecondSection = (
  <motion.div
    className="w-full "
    initial={{ y: -2000 }}
    animate={{ y: 0, zIndex: 1 }}
    exit={{ y: 0, zIndex: 0 }}
    transition={{ duration: 1 }}
  >
    <InterViewSectionWrapper>
      <div className="w-full h-screen">
        <InterViewSection />
      </div>
      <div className="w-full h-screen">
        <DepartmentSection />
      </div>
    </InterViewSectionWrapper>
  </motion.div>
);

const ThirdSection: React.FC<{
  children: React.ReactNode;
  prevPage: number;
  page: number;
}> = props => {
  return (
    <motion.li
      className="absolute top-0 left-0 w-full h-screen"
      variants={sectionVariants}
      initial={props.prevPage > props.page ? "up" : "down"}
      animate="show"
      exit="exit"
      transition={{ duration: 0.7 }}
    >
      <div className="w-full h-screen">
        <TrophySectionWrapper>{props.children}</TrophySectionWrapper>
      </div>
    </motion.li>
  );
};

export default function Home() {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);

  function pageIncrease() {
    setPrevPage(page);
    if (page != lastPage) {
      setPage(page + 1);
    }
  }

  function pageDecrease() {
    setPrevPage(page);
    if (page != 0) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "wheel",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );

      window.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );
    }
  });

  async function wheelEvtHandler(e) {
    e.preventDefault();

    if (e.deltaY > 0) {
      pageIncrease();
    } else if (e.deltaY < 0) {
      pageDecrease();
    }

    console.log(page);
  }

  async function touchStartEvtHandler(e) {
    e.preventDefault();
    setTouchYpos(e.changedTouches[0].clientY);
  }

  async function touchEndEvtHandler(e) {
    e.preventDefault();
    if (touchYpos > e.changedTouches[0].clientY + 5) {
      pageDecrease();
    } else if (touchYpos < e.changedTouches[0].clientY + 5) {
      if (page != lastPage) {
        setPage(page + 1);
      }
    }
  }

  const debounceWheelEvt = e => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(async () => {
      try {
        await wheelEvtHandler(e);
      } catch (error) {
        console.log("error!", error);
      }
    }, 250);
    setTimer(newTimer);
  };

  const [touchYpos, setTouchYpos] = useState(0);

  return (
    <div
      className="w-full flex flex-col content-around overflow-y-hidden"
      onWheel={e => {
        debounceWheelEvt(e);
      }}
      onTouchStart={e => {
        touchStartEvtHandler(e);
      }}
      onTouchEnd={e => {
        touchEndEvtHandler(e);
      }}
    >
      <motion.ul className="w-full h-screen">
        <AnimatePresence>
          {page == 0 && (
            <ThirdSection prevPage={prevPage} page={page} key="0">
              <div className="bg-">
                <div className="text-5xl absolute top-52">1</div>
              </div>
            </ThirdSection>
          )}
          {page == 1 && (
            <ThirdSection prevPage={prevPage} page={page} key="1">
              <div className="bg-">
                <div className="text-5xl absolute top-52">2</div>
              </div>
            </ThirdSection>
          )}
          {page == 2 && (
            <ThirdSection prevPage={prevPage} page={page} key="2">
              <div className="bg-">
                <div className="text-5xl absolute top-52">3</div>
              </div>
            </ThirdSection>
          )}
          {page == 3 && (
            <ThirdSection prevPage={prevPage} page={page} key="3">
              <div className="bg-">
                <div className="text-5xl absolute top-52">4</div>
              </div>
            </ThirdSection>
          )}
          {page == 4 && (
            <ThirdSection prevPage={prevPage} page={page} key="4">
              <div className="bg-">
                <div className="text-5xl absolute top-52">5</div>
              </div>
            </ThirdSection>
          )}
          {page == 5 && (
            <ThirdSection prevPage={prevPage} page={page} key="5">
              <div className="bg-">
                <div className="text-5xl absolute top-52">6</div>
              </div>
            </ThirdSection>
          )}
          {page == 6 && (
            <ThirdSection prevPage={prevPage} page={page} key="6">
              <div className="bg-">
                <div className="text-5xl absolute top-52">7</div>
              </div>
            </ThirdSection>
          )}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
