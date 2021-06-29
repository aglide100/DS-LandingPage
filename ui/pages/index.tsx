import React from "react";
import LoadingComponent from "../src/components/Loading/Loading";
import dynamic from "next/dynamic";
import IntroBlock from "../src/components/layout/IntroBlock/IntroBlock";
import Section1 from "../src/components/layout/BounceSection/BounceSection";

const IntroSection = dynamic(
  () =>
    import("../src/components/layout/IntroSection/IntroSection").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: false }
);

const Section2 = dynamic(
  () =>
    import("../src/components/layout/ZoomSection/ZoomSection").catch((err) => {
      return () => <p>Sorry, failed to load {err} </p>;
    }),
  { loading: () => <LoadingComponent />, ssr: true }
);

const Section3 = dynamic(
  () =>
    import("../src/components/layout/SampleSection1/SampleSection1").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  { loading: () => <LoadingComponent />, ssr: true }
);

const Section4 = dynamic(
  () =>
    import("../src/components/layout/SampleSection2/SampleSection2").catch(
      (err) => {
        return () => <p>Sorry, failed to load {err} </p>;
      }
    ),
  {
    loading: () => <LoadingComponent />,
    ssr: true,
  }
);

// const CatSection = dynamic(
//   () =>
//     import("../src/components/layout/Cat/Cat").catch((err) => {
//       return () => <p>Sorry, failed to load {err} </p>;
//     }),
//   { loading: () => <LoadingComponent />, ssr: false }
// );

export default function Home() {
  return (
    <div className="p-8">
      <div className="z-0">
        <IntroSection />
      </div>
      <div className="bg-white">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}
