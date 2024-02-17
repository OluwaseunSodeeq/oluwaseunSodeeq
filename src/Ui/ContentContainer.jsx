function ContentContainer({ background = "", children }) {
  return (
    <div
      className={`relative px-6 py-4 md:px-[60px] md:py-6 lg:px-[104px] lg:py-6 w-full h-auto md:w-full lg:w-full lg:max-w-[1440px] bg-${background}  mx-auto`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
