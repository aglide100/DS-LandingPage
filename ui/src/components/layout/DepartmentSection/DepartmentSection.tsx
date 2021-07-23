import React from "react";
import Fade from "react-reveal/Fade";
import DepartmentCardView from "./DepartmentCardPreview";
import { departmentCardViewStorys } from "./DepartmentItems";

const DepartmentSection: React.FC<{}> = () => {
  const departmentList = departmentCardViewStorys.map((view, index) => {
    return (
      <Fade
        key={view.title}
        bottom
        triggerOnce={false}
        duration={800}
        delay={200 + index * 150}
      >
        <DepartmentCardView {...view} />
      </Fade>
    );
  });

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

      <div className="flex flex-row justify-around">{departmentList}</div>
    </div>
  );
};

export default DepartmentSection;
