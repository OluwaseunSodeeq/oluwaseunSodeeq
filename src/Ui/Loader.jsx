function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-1 bg-plain-white">
        <div className="h-5 w-5 bg-[#005CB7] rounded-full"></div>
        <div className="h-5 w-5 bg-[#67696E] rounded-full animate-ping"></div>
        <div className="h-5 w-5 bg-[#005CB7] rounded-full"></div>
      </div>
    </div>

    // <div className="flex justify-center items-center">
    //   <p>Loading...</p>
    // </div>
  );
}

export default Loader;
