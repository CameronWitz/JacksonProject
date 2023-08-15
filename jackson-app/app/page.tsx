"use client";
import { useState } from "react";

export default function Home() {
  const myName: string = "jackson";
  const [clicked, setClicked] = useState("false");

  return (
    <div
      className="mt-24 flex flex-col border  justify-center border-black mx-auto items-center"
      style={{ height: "30vw", width: "50%" }}
      onClick={() => {
        if (clicked === "false") {
          setClicked("true");
        } else {
          setClicked("false");
        }
      }}
    >
      <div className="flex text-center align-middle">{`My name is ${myName}, and clicked is ${clicked}`}</div>
    </div>
  );
}
