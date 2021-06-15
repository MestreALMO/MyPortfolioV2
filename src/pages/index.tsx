import Head from "next/head";

import { GlobalStyle } from "../styles/globals";
import { Navbar } from "../components/navbar";
import { Opening } from "../components/opening";

export default function Home() {
  return (
    <>
      <Head>
        <title>André Lusegardis' Portfolio</title>
      </Head>

      <GlobalStyle />

      <Opening />
      <Navbar />
    </>
  );
}
