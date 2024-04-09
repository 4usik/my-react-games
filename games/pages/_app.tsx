import Head from "next/head";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
