import React from "react";
import LoadingComponent from "../src/components/Loading/Loading";
import LoadingError from "../src/components/LoadingError/LoadingError";
import dynamic from "next/dynamic";
import Section1 from "../src/components/old/BounceSection/BounceSection";
import SectionInterViewWrapper from "../src/components/layout/section/SectionInterViewWrapper/SectionInterverWrapper";

const IntroSection = dynamic(
  () =>
    import("../src/components/layout/section/IntroSection/IntroSection").catch(
      (err) => {
        return () => <LoadingError>{err}</LoadingError>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const IntroChildren = dynamic(
  () =>
    import("../src/components/layout/section/IntroSection/IntroChildren").catch(
      (err) => {
        return () => <LoadingError>{err}</LoadingError>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: true }
);

const InterViewSection = dynamic(
  () =>
    import(
      "../src/components/layout/section/InterViewSection/InterViewSection"
    ).catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: false,
  }
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
        <Section1 />
        <SectionInterViewWrapper>
          <InterViewSection />
        </SectionInterViewWrapper>
      </div>
    </div>
  );
}
