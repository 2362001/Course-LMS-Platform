"use client"

import { Compass } from "lucide-react";
import SideBarItem from "./sidebar-item";

const guestRoutes = [
  {
    icon: Compass,
    label: "Hello",
    href: "/",
  },
  {
    icon: Compass,
    label: "World",
    href: "/search1",
  },
];
const SideBarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SideBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SideBarRoutes;
