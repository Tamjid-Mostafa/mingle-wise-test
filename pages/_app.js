import Footer from "@/Components/Shared/Footer";
import Loader from "@/Components/Shared/Loader";
import NavBar from "@/Components/Shared/NavBar";
import Head from "@/Head";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import platform from "platform";
import { createContext, useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { Toaster } from "react-hot-toast";
export const StateContext = createContext();
import * as fbq from "../lib/fpixel";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [osName, setOsName] = useState("");

  useEffect(() => {
    setOsName(platform.os.family);
  }, []);

  const [pageName, setPageName] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();
    const handleRouterChange = () => {
      fbq.pageview();
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-1GDKXS7R5W" });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const stateInfo = {
    pageName,
    setPageName,
    osName,
  };

  return (
    <>
      <Head />
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1GDKXS7R5W`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1GDKXS7R5W');
          `}
        </Script>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${fbq.FB_PIXEL_ID});
          `,
          }}
        />
      </>
      {!loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <StateContext.Provider value={stateInfo}>
            <Toaster position="top-center" />
            {router.pathname !== "/404" && <NavBar />}
            <Component {...pageProps} />
            {router.pathname !== "/404" && <Footer />}
          </StateContext.Provider>
        </>
      )}
    </>
  );
}
