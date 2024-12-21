import { useTheme } from "next-themes";

const Loader = () => {
  const { theme }: { theme?: string } = useTheme();

    return (
      <div className="fixed flex-col inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        </div>
        <h2 className={`{md:text-4xl text-white mt-4 ${theme==="dark"?"text-white":"text--neutral-900"} `}>Please wait a sec</h2>
      </div>
    );
  };
  
  export default Loader;
  