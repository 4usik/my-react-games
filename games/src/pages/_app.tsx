import Head from "next/head";
import "../styles/globals.css";
import { HeaderProvider } from "../../hoc/HeaderProvider";

export default function App({ Component, pageProps }: any) {
  return (
    <HeaderProvider>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </HeaderProvider>
  );
}
