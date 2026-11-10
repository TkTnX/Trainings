"use client";
import { NAV_ITEMS } from "@/shared/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 flex items-center justify-between container h-20 bg-[#11111d] border-t border-t-border">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          className={` flex flex-col items-center ${pathname === item.path ? "text-main" : "text-gray"}`}
          href={item.path}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
