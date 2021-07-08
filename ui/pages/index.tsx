import React from "react";
import LoadingComponent from "../src/components/Loading/Loading";
import LoadingError from "../src/components/LoadingError/LoadingError";
import dynamic from "next/dynamic";
import Section1 from "../src/components/layout/section/BounceSection/BounceSection";
import SectionFirst from "../src/components/layout/section/SectionFirst/SectionFirst";

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

const Section2 = dynamic(
  () =>
    import("../src/components/layout/section/ZoomSection/ZoomSection").catch(
      (err) => {
        return () => <LoadingError>{err}</LoadingError>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: true }
);

const Section3 = dynamic(
  () =>
    import(
      "../src/components/layout/section/SampleSection1/SampleSection1"
    ).catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: true }
);

const Section4 = dynamic(
  () =>
    import(
      "../src/components/layout/section/SampleSection2/SampleSection2"
    ).catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: true,
  }
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
    ssr: true,
  }
); 

const Section99 = dynamic(
  () =>
    import(
      "../src/components/layout/section/SampleSection99/SampleSection99"
    ).catch((err) => {
      return () => <LoadingError>{err}</LoadingError>;
    }),
  { loading: () => <LoadingComponent />, ssr: true }
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
        <Section2 />
        <Section3 />
        <Section4 />
        <SectionFirst>
          <InterViewSection />
        </SectionFirst>
        <Section4 />
        <Section99 />
      </div>
    </div>
  );
}
