import React, { useEffect, useState } from "react";
import LoadingComponent from "../../src/components/atom/Loading/Loading";
import LoadingError from "../../src/components/atom/LoadingError/LoadingError";
import dynamic from "next/dynamic";
import InterViewSectionWrapper from "../../src/components/layout/InterViewSectionWrapper/InterviewSectionWrapper";
import TrophySectionWrapper from "../../src/components/layout/TrophySectionWrapper/TrophySectionWrapper";
import { motion, AnimatePresence } from "framer-motion";

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

const ThirdSection: React.FC<{ children: React.ReactNode }> = props => {
  return (
    <motion.li
      className="absolute top-0 left-0 w-full h-screen"
      initial={{ y: -1000 }}
      animate={{ y: 0, zIndex: 1 }}
      exit={{ y: 1000, zIndex: 1 }}
      transition={{ duration: 1 }}
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

  async function wheelEvtHandler(e) {
    e.preventDefault();

    if (e.deltaY > 0) {
      if (page != lastPage) {
        setPage(page + 1);
      }
    } else if (e.deltaY < 0) {
      if (page != 0) {
        setPage(page - 1);
      }
    }

    console.log(page);
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

  const [touchYpos, setTouchYpos] = useState(0);

  return (
    <div
      className="w-full flex flex-col content-around overflow-y-hidden"
      onWheel={e => {
        debounceWheelEvt(e);
      }}
      onTouchStart={e => {
        setTouchYpos(e.changedTouches[0].clientY);
      }}
      onTouchEnd={e => {
        if (touchYpos > e.changedTouches[0].clientY) {
          if (page != lastPage) {
            setPage(page + 1);
          }
        } else {
          if (page != 0) {
            setPage(page - 1);
          }
        }
      }}
      onKeyDown={e => {
        e.preventDefault();
        if (page != lastPage) {
          setPage(page + 1);
        }
      }}
      onKeyUp={e => {
        e.preventDefault();
        if (page != 0) {
          setPage(page - 1);
        }
      }}
    >
      <motion.ul className="w-full h-screen">
        <AnimatePresence>
          {page == 0 && (
            <ThirdSection key="0">
              <div className="text-5xl">1</div>
            </ThirdSection>
          )}
          {page == 1 && (
            <ThirdSection key="1">
              <div className="text-5xl">2</div>
            </ThirdSection>
          )}
          {page == 2 && (
            <ThirdSection key="2">
              <div className="text-5xl">3</div>
            </ThirdSection>
          )}
          {page == 3 && (
            <ThirdSection key="3">
              <div className="text-5xl">4</div>
            </ThirdSection>
          )}
          {page == 4 && (
            <ThirdSection key="4">
              <div className="text-5xl">5</div>
            </ThirdSection>
          )}
          {page == 5 && (
            <ThirdSection key="5">
              <div className="text-5xl">6</div>
            </ThirdSection>
          )}
          {page == 6 && (
            <ThirdSection key="6">
              <div className="text-5xl">7</div>
            </ThirdSection>
          )}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
