import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function Navigation({ windowHeight }) {
  const router = useRouter();
  const navigation = [
    { name: "Features", href: "/" },
    { name: "Subscription", href: "/" },
    { name: "About", href: "/" },
  ];

  // ${
  //   router.pathname == nav.href ? "border-b-2 border-[#7300D5]" : ""
  // }

  return (
    <nav className="hidden lg:flex lg:flex-[.6] xl:flex-[.5] 2xl:flex-[.4]">
      <ul className="flex flex-1 gap-2 items-center justify-between">
        {navigation?.map((nav) => (
          <li
            className={`hover:border-b-2 hover:border-b-primary transition-one `}
            key={nav.name}
          >
            <Link href={nav.href}>
              <span className="poppins-text"> {nav.name}</span>
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => router.push(`${router.asPath}?estimate=true`)}
            className={`bg-transparent text-white font-bold w-28 h-10 relative
            before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1]  before:absolute before:top-[50%] before:left-[50%]
            before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
            before:from-[#7B00D6] before:to-[#FB695B] before:bg-gradient-to-br
            before:rounded-md
            hover:bg-white hover:text-black transition-all duration-300 px-4 rounded py-2 poppins-text`}
          >
            Download
          </button>
        </li>
      </ul>
    </nav>
  );
}
