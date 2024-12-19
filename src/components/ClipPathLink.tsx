import { useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import React, { MouseEvent } from "react";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill,RiNextjsFill  } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

import { LinkBoxProps } from "@/type/type";

export const ExampleStack = () => {
  return (
    <div className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900 ">
      <div className="grid grid-cols-2 divide-x divide-neutral-900 text-black">
        <LinkBox Icon={FaHtml5} href="#" />
        <LinkBox Icon={FaCss3} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900 text-black">
        <LinkBox Icon={FaJs} href="#" />
        <LinkBox Icon={FaReact} href="#" />
        <LinkBox Icon={FaGithub} href="#" />
        <LinkBox Icon={RiTailwindCssFill} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900 text-black">
        <LinkBox Icon={RiNextjsFill} href="#" />
        <LinkBox Icon={IoLogoFirebase} href="#" />
        <LinkBox Icon={SiPostman} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox: React.FC<LinkBoxProps> = ({ Icon, href }) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const getNearestSide = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLElement;
    const box = target.getBoundingClientRect();
    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e:MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };
  const { theme }: { theme?: string } = useTheme();
  console.log(theme);
  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className={`absolute inset-0 grid place-content-center  ${
            theme === "dark" ? "bg-neutral-900 text-white" : "text-white bg-neutral-900"
          }`}      >
        <Icon className="text-xl sm:text-3xl md:text-4xl " />
      </div>
    </a>
  );
};