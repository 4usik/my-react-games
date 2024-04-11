import { createContext, useState } from "react";

export const HeaderContext = createContext<{
  text: string;
  setText?: any;
}>({ text: "All games" });

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState("all games");
  const value = { text, setText };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
