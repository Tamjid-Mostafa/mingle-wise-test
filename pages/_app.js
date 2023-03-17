import Footer from "@/Components/Shared/Footer";
import Loader from "@/Components/Shared/Loader";
import NavBar from "@/Components/Shared/NavBar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }

  const Router = useRouter();
  const [loading, setLoading] = useState(false);

  console.log(Router.pathname);

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
          {Router.pathname === "/" ? <></> : <NavBar />}
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
