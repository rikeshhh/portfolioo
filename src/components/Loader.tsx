const Loader = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-neutral-900 bg-opacity-50">
        <div className="loader"></div>
        <h2 className="text-4xl text-white mt-4">Please wait a sec</h2>
      </div>
    );
  };
  
  export default Loader;
  