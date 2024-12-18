export default function ContentCard() {
  return (
    <div className="group relative w-full max-w-5xl min-h-screen border border-gray-700 rounded-3xl overflow-hidden bg-black text-white mx-auto hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="p-12 flex flex-col items-start justify-start group-hover:bg-custom-gradient transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-6  group-hover:text-gray-300 transition-colors duration-300">
          Stadia Bluetooth
        </h2>
        <p className="text-gray-400 text-lg">
          Google 232
          <span className="block text-gray-500 group-hover:text-white transition-colors duration-300 mt-2">
            Giving a second life to over a million controllers
          </span>
        </p>
      </div>
      <div className="relative w-full h-[500px] overflow-hidden p-12">
        <div className="bg-hero-image bg-center w-full h-full bg-no-repeat transform group-hover:scale-110 transition-transform duration-500 ease-in-out"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
