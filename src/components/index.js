import React, { useState } from "react";
import Data from "./Data";
import FormUser from "./FormUser";
import Privacy from "./Privacy";
import StepBar from "./StepBar";

export default function Test() {
  const [done, setDone] = useState(false);
  const [type, setType] = useState(1);
  return (
    <div className="p-5 rounded-3xl container max-w-lg bg-white ">
      <h1 className="display-4 font-semibold text-center ">Signup Form</h1>
      <div className="flex justify-center items-center">
        <StepBar type={type} />
      </div>
      {(type === 1 && <FormUser setType={setType} />) ||
        (type === 2 && <Privacy setType={setType} />) ||
        (type === 3 && <Data />)}
    </div>
  );
}
