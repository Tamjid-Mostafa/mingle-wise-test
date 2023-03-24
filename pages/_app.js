import Footer from "@/Components/Shared/Footer";
import Loader from "@/Components/Shared/Loader";
import NavBar from "@/Components/Shared/NavBar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

export default function App({ Component, pageProps }) {
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
  };

  return (
    <>
      {!loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <StateContext.Provider value={stateInfo}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </StateContext.Provider>
        </>
      )}
    </>
  );
}
