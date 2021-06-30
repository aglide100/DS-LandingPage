import React from "react";
import LoadingComponent from "../src/components/Loading/Loading";
import dynamic from "next/dynamic";
``;
import Section1 from "../src/components/layout/section/BounceSection/BounceSection";

const IntroSection = dynamic(
  () =>
    import("../src/components/layout/section/IntroSection/IntroSection").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const Section2 = dynamic(
  () =>
    import("../src/components/layout/section/ZoomSection/ZoomSection").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: true }
);

const Section3 = dynamic(
  () =>
    import(
      "../src/components/layout/section/SampleSection1/SampleSection1"
    ).catch((err) => {
      return () => <p>Sorry, failed to load {err} </p>;
    }),
  { loading: () => <LoadingComponent />, ssr: true }
);

const Section4 = dynamic(
  () =>
    import(
      "../src/components/layout/section/SampleSection2/SampleSection2"
    ).catch((err) => {
      return () => <p>Sorry, failed to load {err} </p>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: true,
  }
);

export default function Home() {
  return (
    <div className="w-full flex flex-col content-around">
      <div className="w-full z-0">
        <IntroSection />
      </div>
      <div className="bg-white z-20">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}
