import React from "react";
import Fade from "react-reveal/Fade";
import DepartmentView, { DepartmentViewProps } from "./DepartmentView";

const departmentViewStorySW: DepartmentViewProps = {
  imageAlt: "소프트웨어",
  imageUri: "/1.webp",
  title: "소프트웨어",
  description:
    "국가 IT 발전의 핵심기술인 소프트웨어 프로그래밍, 인공지능, 데이터베이스, 클라우드 컴퓨팅,빅데이터, 증강현실 등의 기술에 관한 전문기술을 습득할 수 있다. IT기술의 중추적 분야에서 활동할 경쟁력 있는 전문가 양성을 목표로 한다.",
};
const departmentViewStoryAI: DepartmentViewProps = {
  imageAlt: "인공지능응용",
  imageUri: "/4.webp",
  title: "인공지능응용",
  description:
    "국가 IT 발전의 핵심기술인 소프트웨어 프로그래밍, 인공지능, 데이터베이스, 클라우드 컴퓨팅,빅데이터, 증강현실 등의 기술에 관한 전문기술을 습득할 수 있다. IT기술의 중추적 분야에서 활동할 경쟁력 있는 전문가 양성을 목표로 한다.",
};
const departmentViewStoryPROTECT: DepartmentViewProps = {
  imageAlt: "정보보안",
  imageUri: "/3.webp",
  title: "정보보안",
  description:
    "국가 IT 발전의 핵심기술인 소프트웨어 프로그래밍, 인공지능, 데이터베이스, 클라우드 컴퓨팅,빅데이터, 증강현실 등의 기술에 관한 전문기술을 습득할 수 있다. IT기술의 중추적 분야에서 활동할 경쟁력 있는 전문가 양성을 목표로 한다.",
};
const departmentViewStoryENGINEER: DepartmentViewProps = {
  imageAlt: "컴퓨터공학",
  imageUri: "/2.webp",
  title: "컴퓨터공학",
  description:
    "국가 IT 발전의 핵심기술인 소프트웨어 프로그래밍, 인공지능, 데이터베이스, 클라우드 컴퓨팅,빅데이터, 증강현실 등의 기술에 관한 전문기술을 습득할 수 있다. IT기술의 중추적 분야에서 활동할 경쟁력 있는 전문가 양성을 목표로 한다.",
};

const IntroduceDepartment: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center mt-20 mb-20">
      <div className="w-full">
        <Fade bottom triggerOnce={false} delay={100}>
          <div className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded-full"
              style={{
                boxShadow: "0px 30px 25px 0 rgba(0, 0, 0, 0.4)",
                backgroundColor: "#d00c27",
              }}
            />

            <div
              className="flex flex-row justify-between mt-7 items-center"
              style={{ width: "calc(100vw - 7vw)" }}
            >
              <div className="w-full h-px bg-ds_gray-1 bg-gradient-to-l from-ds_gray-1 via-ds_gray-1" />
              <span className="whitespace-nowrap text-white text-4xl ml-6 mr-6">
                학과 소개
              </span>
              <div className="w-full h-px bg-ds_gray-1 bg-gradient-to-r from-ds_gray-1 via-ds_gray-1" />
            </div>
          </div>
        </Fade>
      </div>
      <Fade bottom triggerOnce={false} delay={200}>
        <div className="flex flex-row justify-around">
          <DepartmentView {...departmentViewStorySW} />
          <DepartmentView {...departmentViewStoryAI} />
          <DepartmentView {...departmentViewStoryPROTECT} />
          <DepartmentView {...departmentViewStoryENGINEER} />
        </div>
      </Fade>
    </div>
  );
};

export default IntroduceDepartment;
