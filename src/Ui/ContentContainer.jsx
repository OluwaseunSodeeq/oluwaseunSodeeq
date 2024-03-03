function ContentContainer({ background = "", children }) {
  return (
    <div
      className={`w-full relative px-2 py-4 md:px-[42px] md:py-6 lg:px-[104px] lg:py-6  h-auto md:w-full lg:w-full lg:max-w-[1440px] bg-${background}  mx-auto`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
