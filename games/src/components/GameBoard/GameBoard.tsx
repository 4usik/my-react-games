import React from "react";
import { useInfo } from "../../../hook/useInfo";

const GameBoard = ({ children }: { children: React.ReactElement }) => {
  const mainInfo = useInfo();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="uppercase">{mainInfo?.text}</div>
      <div className="bg-neutral-focus min-h-24 p-8 grid gap-0.5 mb-8">
        {children}
      </div>
    </div>
  );
};

export default GameBoard;
