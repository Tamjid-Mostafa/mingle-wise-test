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

  const Router = useRouter();
  const [loading, setLoading] = useState(false);

  console.log(Router.pathname);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      console.log("Loading");
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
