import Footer from "@/Components/Shared/Footer";
import Loader from "@/Components/Shared/Loader";
import NavBar from "@/Components/Shared/NavBar";
import Head from "@/Head";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import platform from "platform";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const StateContext = createContext();

export default function App({ Component, pageProps }) {
  const [osName, setOsName] = useState("");

  useEffect(() => {
    setOsName(platform.os.family);
  }, []);

  const [pageName, setPageName] = useState("");

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('137039049312449') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      // console.log("Loading");
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
      {!loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <StateContext.Provider value={stateInfo}>
            <Toaster position="top-center" />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </StateContext.Provider>
        </>
      )}
    </>
  );
}
