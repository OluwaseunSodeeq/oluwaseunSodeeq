function ContentContainer({ background = "", children }) {
  return (
    <div
      className={`w-full py-0 px-0  md:px-[42px] md:py-6 lg:px-[104px]   md:w-full lg:w-full lg:max-w-[1440px] mx-auto`}
      style={{ background: background }}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
