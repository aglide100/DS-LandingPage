import React, { useEffect, useState } from "react";
import LoadingComponent from "../../src/components/atom/Loading/Loading";
import LoadingError from "../../src/components/atom/LoadingError/LoadingError";
import dynamic from "next/dynamic";
import InterViewSectionWrapper from "../../src/components/layout/InterViewSectionWrapper/InterviewSectionWrapper";
import TrophySectionWrapper from "../../src/components/layout/TrophySectionWrapper/TrophySectionWrapper";
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

export default function Home() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "wheel",
        function (e) {
          e.preventDefault();
        },
        { passive: false }
      );
    }
  });

  function OnWheelEvent(e) {
    if (e.deltaY > 0) {
      if (page != lastPage) {
        setPage(page + 1);
      }
    } else if (e.deltaY < 0) {
      if (page != 0) {
        setPage(page - 1);
      }
    }
    const posTop = page * window.outerHeight;
    window.scrollTo({ top: posTop, behavior: "smooth" });
  }

  return (
    <div
      className="w-full flex flex-col content-around"
      onWheel={e => {
        OnWheelEvent(e);
      }}
    >
      <div className="w-full z-0">
        <IntroSection>
          <IntroChildren />
        </IntroSection>
      </div>
      <div className="bg-white z-20">
        <InterViewSectionWrapper>
          <div className="w-full h-screen">
            <InterViewSection />
          </div>
          <div className="w-full h-screen">
            <DepartmentSection />
          </div>
        </InterViewSectionWrapper>
        <TrophySectionWrapper>
          <span>주요성과</span>
        </TrophySectionWrapper>
      </div>
    </div>
  );
}
