"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SlideTabsExample = () => {
  return <SlideTabs />;
};

const SlideTabs = () => {
  return (
    <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1">
      <Tab href="/">Info</Tab>
      <Tab href="/work">Work</Tab>
    </ul>
  );
};

const Tab = ({ children, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log(pathname);
  return (
    <Link href={href} className="block w-full h-full">
      <li
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase mix-blend-difference md:px-5 md:py-3 md:text-base ${
          isActive ? "text-black bg-white rounded-full" : "text-white"
        }`}
      >
        {children}
      </li>
    </Link>
  );
};
