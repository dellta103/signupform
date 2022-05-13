import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { setSignUp } from "./redux/slices/signUpSlice";
export default function Privacy({ setType }) {
  let dispatch = useDispatch();

  const handleChange = (number) => {
    dispatch(setSignUp(number));
  };

  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">Privacy Form:</h2>
      <div className="space-x-3 text-lg font-semibold">
        <input
          type="checkbox"
          className="h-4 w-4"
          onChange={() => {
            handleChange(1);
          }}
        />
        <span>Receive updates about Tray.io product by email</span>
      </div>
      <div className="space-x-3 text-lg font-semibold">
        <input
          type="checkbox"
          className="h-4 w-4"
          onChange={() => {
            handleChange(2);
          }}
        />
        <span>
          Recieve communication by email for other products created by the
          Tray.io team
        </span>
      </div>
      <div className="mt-5 flex justify-between">
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            setType(1);
          }}
        >
          Back
        </Button>
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            setType(3);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
