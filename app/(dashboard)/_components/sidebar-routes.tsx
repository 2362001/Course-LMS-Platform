"use client";

import { BarChart, Compass, List } from "lucide-react";
import SideBarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

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

const teahcherRoutes = [
  {
    icon: List,
    label: "Course",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "World",
    href: "/teacher/analytics",
  },
];

const SideBarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname.includes("/teacher");
  const routes = isTeacherPage ? teahcherRoutes : guestRoutes;

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
