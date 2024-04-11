import React from "react";
import { useInfo } from "../../../hook/useInfo";

const GameBoard = ({ children }: { children: React.ReactElement }) => {
  const mainInfo = useInfo();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="uppercase text-5xl">{mainInfo?.text}</div>
      <div className="flex justify-center items-center bg-neutral-focus w-[54rem] h-[50rem] mb-8">
        {children}
      </div>
    </div>
  );
};

export default GameBoard;
