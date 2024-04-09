import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const BaseLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="min-h-screen font-main overflow-hidden bg-dark text-white flex flex-col  w-full overflow-x-hidden">
      <Header />
      <div className="container mx-auto flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
