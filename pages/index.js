import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import Loader from "@/Components/Shared/Loader";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      console.log("Loading");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Dating | Networking | Events | Connections | MingleWise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!loading ? (
          <>
            <Loader />
          </>
        ) : (
          <Header />
        )}
      </main>
    </>
  );
}
