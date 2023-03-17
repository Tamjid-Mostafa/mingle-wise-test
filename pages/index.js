import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import Header from "../Components/Home/Header";
import WhyMingleWise from "@/Components/Home/WhyMingleWise";
import Reviews from "@/Components/Home/Reviews";
import Counter from "@/Components/Home/Counter";
import SignUpForNewsLetter from "@/Components/Home/SignUpForNewsLetter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dating | Networking | Events | Connections | MingleWise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main>
        <>
          <Header />
          <WhyMingleWise />
          <Reviews />
          <Counter />
          <SignUpForNewsLetter />
        </>
      </main>
    </>
  );
}
