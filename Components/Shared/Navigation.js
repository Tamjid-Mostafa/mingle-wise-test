import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation({ windowHeight }) {
  const router = useRouter();
  const navigation = [
    { name: "Features", href: "/QuickLinks/Features" },
    { name: "Subscriptions", href: "/QuickLinks/SubscriptionTires" },
    { name: "About", href: "/QuickLinks/AboutUs" },
  ];

  return (
    <AnimatePresence>
      <nav className="hidden lg:flex lg:flex-[.6] xl:flex-[.5] 2xl:flex-[.4]">
        <ul className="flex flex-1 gap-2 items-center justify-between">
          {navigation?.map((nav) => (
            <motion.li
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className={`${
                router.pathname == nav.href ? "border-b-2 border-[#7300D5]" : ""
              } ${
                router.pathname === "/" && windowHeight <= 110 && " text-white"
              } ${router.pathname !== "/" && "text-black"}`}
              key={nav.name}
            >
              <Link href={nav.href}>
                <span className="poppins-text"> {nav.name}</span>
              </Link>
            </motion.li>
          ))}
          <li>
            <a href="https://onelink.to/minglewise" target="_blank">
              <button
                className={`bg-transparent text-white font-bold w-28 h-10 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%]
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-md
            hover:bg-white hover:text-black transition-all duration-300 px-4 rounded py-2 poppins-text`}
              >
                Download
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </AnimatePresence>
  );
}
