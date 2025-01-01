"use client";
import { useTheme } from "next-themes";

const Loader = () => {
  const { theme }: { theme?: string } = useTheme();

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center text-white">
        <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        </div>
        <h2 className={`{md:text-4xl text-white mt-4 ${theme==="dark"?"text-white":"text--neutral-900"} `}>Just a moment..</h2>
      </div>
    );
  };
  
  export default Loader;
  