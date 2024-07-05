import React from "react";
import MobileSideBar from "./mobile-sidebar";
import NavBarRoutes from "@/components/common/navbar-routes";

const NavBar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSideBar />
      <NavBarRoutes />
    </div>
  );
};

export default NavBar;
