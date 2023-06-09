import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import React from "react";
import Header from "../Components/Home/Header";
import WhyMingleWise from "@/Components/Home/WhyMingleWise";
import DatingProfile from "@/Components/Home/DatingProfile";
import ProfessionalNetworking from "@/Components/Home/ProfessionalNetworking";
import WhatMakesUsLove from "@/Components/Home/WhatMakesUsLove";
import InAppFeatures from "@/Components/Home/InAppFeatures";
import FolksLovesUs from "@/Components/Home/FolksLovesUs";
import DownloadApp from "@/Components/Home/DownloadApp";

export default function Home() {
  return (
    <>
      <Head>
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
          <DatingProfile />
          <ProfessionalNetworking />
          <WhatMakesUsLove />
          <InAppFeatures />
          <FolksLovesUs />
          <DownloadApp />
        </>
      </main>
    </>
  );
}
