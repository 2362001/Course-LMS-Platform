import React from "react";
import SideBar from "./_components/sidebar";
import NavBar from "./_components/navbar";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full ">
        <div className="h-[80px] md:pl-52 fixed inset-y-0 w-full z-50">
          <NavBar />
        </div>
        <div className="hidden md:flex h-full flex-col fixed inset-y-0 z-50">
          <SideBar />
        </div>
        <main className="md:pl-52 p-[80px] h-full">{children}</main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
