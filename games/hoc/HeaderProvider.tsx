import { createContext, useState } from "react";

export const HeaderContext = createContext<null | {
  text: string;
  setText: any;
}>(null);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState("all games");
  const value = { text, setText };

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};
