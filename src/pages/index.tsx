import Head from "next/head";

import { GlobalStyle } from "../styles/globals";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>André Lusegardis' Portfolio</title>
      </Head>

      <GlobalStyle />

      <Navbar />
    </>
  );
}
