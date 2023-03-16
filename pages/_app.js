import Footer from "@/Components/Shared/Footer";
import Loader from "@/Components/Shared/Loader";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      console.log("Loading");
    }, 1000);
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
