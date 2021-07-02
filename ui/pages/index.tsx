import React from "react";
import LoadingComponent from "../src/components/Loading/Loading";
import dynamic from "next/dynamic";
import Section1 from "../src/components/layout/section/BounceSection/BounceSection";
import { CardContainerProps } from "../src/components/CardContainer/CardContainer";
import { CardContainerItemProps } from "../src/components/CardContainer/CardContainer";

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

const Section5 = dynamic(
  () =>
    import("../src/components/CardContainer/CardContainer").catch((err) => {
      return () => <p>Sorry, failed to load {err} </p>;
    }),
  {
    loading: () => <LoadingComponent />,
    ssr: true,
  }
);

const cardViewProps1: CardContainerItemProps = {
  isYoutube: true,
  videoID: "DGTSRSSsWJs",
};
const cardViewProps2: CardContainerItemProps = {
  isYoutube: true,
  videoID: "jvbgDfCUGE0",
};
const cardViewProps3: CardContainerItemProps = {
  isYoutube: true,
  videoID: "wnhvanMdx4s",
};
const cardViewProps4: CardContainerItemProps = {
  isYoutube: true,
  videoID: "wijVtkmjP-o",
};
const cardViewProps5: CardContainerItemProps = {
  isYoutube: true,
  videoID: "HMnatoiMdjA",
};

export default function Home() {
  const cardViewList: CardContainerProps = {
    cardViewList: [
      cardViewProps1,
      cardViewProps2,
      cardViewProps3,
      cardViewProps4,
      cardViewProps5,
    ],
  };

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
        <Section5 {...cardViewList} />
      </div>
    </div>
  );
}
