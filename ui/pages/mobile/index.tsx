import React from "react";
import LoadingComponent from "../../src/components/atom/Loading/Loading";
import LoadingError from "../../src/components/atom/LoadingError/LoadingError";
import dynamic from "next/dynamic";
import InterViewSectionWrapper from "../../src/components/layout/InterViewSectionWrapper/InterviewSectionWrapper";
import TrophySectionWrapper from "../../src/components/layout/TrophySectionWrapper/TrophySectionWrapper";
const IntroSection = dynamic(
  () =>
    import("../../src/components/layout/IntroSection/IntroSection").catch(
      (err) => {
        return () => <LoadingError>{err}</LoadingError>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const IntroChildren = dynamic(
  () =>
    import(
      "../../src/components/layout/IntroSection/IntroCardView/IntroCardView"
    ).catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: true }
);

const InterViewSection = dynamic(
  () =>
    import("../../src/components/layout/InterViewSection/InterViewSection").catch(
      (err) => {
        return () => <LoadingError>{err}</LoadingError>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const DepartmentSection = dynamic(
  () =>
    import(
      "../../src/components/layout/DepartmentSection/DepartmentSection"
    ).catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: false }
);

export default function Home() {
  return (
    <div className="w-full flex flex-col content-around">
      <div className="w-full z-0">
        <IntroSection>
          <IntroChildren />
        </IntroSection>
      </div>
      <div className="bg-white z-20">
        <InterViewSectionWrapper>
          <InterViewSection />
          <DepartmentSection />
        </InterViewSectionWrapper>
        <TrophySectionWrapper>
          <span>주요성과</span>
        </TrophySectionWrapper>
      </div>
    </div>
  );
}
