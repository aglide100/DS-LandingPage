import React from "react";
import Icon from "../../../../Icon/Icon";

const IntroCardView: React.FC<{}> = () => {
  return (
    <div className="w-full bg-white shadow-2xl flex align-middle items-center">
      <div>
        <div>
          <div className="w-80 h-40">
            <Icon which="swLogo" />
          </div>
          <span>소프트웨어 융합대학</span>
        </div>
        <hr />
        <div>
          <div>
            <a href="/sw">
              <span className="text-ds_gray-2">#</span>
              <span className="text-ds_red-1">소프트웨어학과</span>
            </a>

            <a href="/ai">
              <span className="text-ds_gray-2">#</span>
              <span className="text-ds_red-1">인공지능응용학과</span>
            </a>

            <a href="/pro">
              <span className="text-ds_gray-2">#</span>
              <span className="text-ds_red-1">정보보안학과</span>
            </a>

            <a href="/en">
              <span className="text-ds_gray-2">#</span>
              <span className="text-ds_red-1">컴퓨터공학과</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCardView;
