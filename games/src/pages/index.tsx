import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import MainPage from "@/components/MainPage/MainPage";

export default function IndexPage() {
  return (
    <React.StrictMode>
      <BaseLayout>
        <MainPage />
      </BaseLayout>
    </React.StrictMode>
  );
}
