function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[300px] border relative">
        <div className="absolute inset-0 flex justify-center items-center border-black">
          <div className="w-[300px]">
            <div className="flex items-center space-x-1 bg-plain-white">
              <div className="h-5 w-5 bg-[#005CB7] rounded-full"></div>
              <div className="h-5 w-5 bg-[#67696E] rounded-full animate-ping"></div>
              <div className="h-5 w-5 bg-[#005CB7] rounded-full"></div>
            </div>
            <p className="mt-5">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
