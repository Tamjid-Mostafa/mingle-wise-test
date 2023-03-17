import useScrollPosition from "@/Hooks/useScroll";
import React from "react";

const NavBar = () => {
  const scroll = useScrollPosition(50);

  console.log(scroll);

  return (
    <div>
      <p>This Navbar</p>
    </div>
  );
};

export default NavBar;
