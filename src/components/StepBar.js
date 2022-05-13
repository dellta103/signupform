import React from "react";
import "../Global.scss";
export default function StepBar({ type }) {
  return (
    <div className="stepBar flex justify-around w-full mt-2">
      <div className="flex justify-center flex-col items-center space-y-3">
        <p className="text-sm font-semibold">User</p>
        <div className={"item " + (type === 1 ? "active" : " ")}>
          <span className="font-bold">1</span>
        </div>
      </div>
      <div className="bar"></div>
      <div className="flex justify-center flex-col items-center space-y-3">
        <p className="text-sm font-semibold">Privacy</p>
        <div className={"item " + (type === 2 ? "active" : " ")}>
          <span className="font-bold">2</span>
        </div>
      </div>
      <div className="bar"></div>
      <div className="flex justify-center flex-col items-center space-y-3">
        <p className="text-sm font-semibold">Done</p>
        <div className={"item " + (type === 3 ? "active" : " ")}>
          <span className="font-bold">3</span>
        </div>
      </div>
    </div>
  );
}
