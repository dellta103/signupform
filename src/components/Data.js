import React from "react";
import { useSelector } from "react-redux";

export default function Data() {
  let state = useSelector((state) => state.signUpSlice);
  return (
    <div className="mt-3 flex flex-col justify-center items-center">
      <h2 className="text-2xl text-green-600 text-center font-semibold">
        Success!
      </h2>
      <img src="./img/success.png" alt="" className="rounded-full w-20 h-16" />
      <p className="text-center text-green-600 font-medium text-lg mt-3">
        Please verify your email address, you should have recieved an email from
        us already!
      </p>
      <pre className="p-3 bg-gray-300 rounded-lg">
        JSON Data Form-Completed:
        {JSON.stringify(state, null, 4)}
      </pre>
    </div>
  );
}
