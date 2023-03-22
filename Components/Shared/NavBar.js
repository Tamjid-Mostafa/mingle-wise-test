import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "./Logo";
import WhiteBackgroundLogo from "./WhiteBackgroundLogo";

export default function NavBar() {
  const [windowHeight, setWindowHeight] = useState("");
  const router = useRouter();
  const navigation = [
    { name: "Services", href: "" },
    { name: "Our Apps", href: "" },
    { name: "Industries", href: "" },
    { name: "About", href: "" },
    { name: "Careers", href: "" },
  ];
  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header
        className={`flex w-full justify-between items-center px-5 lg:px-10 py-5 top-0 z-[101] fixed font-medium drop-shadow ${
          windowHeight >= 100
            ? "bg-white text-black"
            : "bg-transparent text-white"
        } transition-five`}
      >
        <Link href="/">
          <div className="flex items-center gap-4">
            <div className={`text-xl font-semibold cursor-pointer`}>
              {windowHeight >= 100 ? <Logo /> : <WhiteBackgroundLogo />}
            </div>
            <div>
              <p className="header-font-extra-light text-2xl tracking-[5px] relative">
                MingleWise
                <span className="text-[8px] roboto tracking-tight absolute top-[-12px]">
                  TM
                </span>
              </p>
              <p className="header-font-extra-light text-[12px] text-center">
                Dating | Networking | Events
              </p>
            </div>
          </div>
        </Link>
        <Navigation windowHeight={windowHeight} />
        {menu ? (
          ""
        ) : (
          <span
            onClick={() => setMenu(true)}
            className="cursor-pointer flex lg:hidden"
          >
            <Image
              src={
                windowHeight >= 100
                  ? "/icons/menu-black.svg"
                  : "/icons/menu.svg"
              }
              width="34"
              height="34"
              alt="close"
            />
          </span>
        )}
      </header>
      {menu ? (
        <main
          className={`fixed z-[9999] top-0 bottom-0 right-0 left-0 flex items-center justify-end lg:hidden `}
        >
          <main
            data-aos="fade-left"
            className="relative bg-white z-20 w-[85vw] h-[100vh] flex flex-col"
          >
            <div className="flex p-10 justify-between w-full">
              <span
                onClick={() => setMenu(false)}
                className="pt-1 cursor-pointer"
              >
                <Image
                  src="/icons/cut.svg"
                  width="34"
                  height="34"
                  alt="close"
                />
              </span>
            </div>
            <div className="text-container items-center">
              <h2 className="sub_heading">Menu</h2>
              <ul className="text-base font-semibold flex flex-col gap-10">
                {navigation?.map((nav) => (
                  <li
                    className={`hover:bg-[#F3FAFF] w-[200px] flex items-center justify-center ${
                      router.pathname == nav.href ? "bg-[#F3FAFF]" : ""
                    }`}
                    key={nav.name}
                  >
                    <Link href={nav.href}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text text-center m-5">
              All Rights Reserved AppSynergies © Copyright2022
            </p>
          </main>
          <span
            onClick={() => setMenu(false)}
            className={`absolute z-10 top-0 bottom-0  right-0 left-0 bg-black/70 cursor-pointer`}
          ></span>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
