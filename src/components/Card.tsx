import React from "react";
import { CiTrash, CiPlay1 } from "react-icons/ci";
import Button from "./Button";

function Card({ massage }) {
  return (
    <div className="flex col items-center justify-around py-4 px-5 bg-gray-600 rounded-lg shadow-md text-white gap-4">
      <h2 className="text-2xl capitalize mr-12 font-semibold">{massage}</h2>
      <div className="flex gap-2">
        <Button
          icon={
            <CiPlay1
              size={"4vh"}
              color="white"
              style={{ transform: "rotate(270deg)" }}
            />
          }
          css={"bg-green-700"}
          text={"0"}
        />
        <Button
          icon={
            <CiPlay1
              size={"4vh"}
              color="white"
              style={{ transform: "rotate(90deg)" }}
            />
          }
          css={"bg-red-700"}
          text={"0"}
        />
      </div>
      <div className="border-l-2 border-[#f8fafc42] ">
        <Button
          css={"bg-black ml-2"}
          icon={<CiTrash size={"4vh"} />}
          text={"."}
        />
      </div>
    </div>
  );
}

export default Card;
