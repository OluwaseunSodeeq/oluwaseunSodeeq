function ContentContainer({ background = "", children }) {
  return (
    <div
      className={`relative w-full h-auto md:w-full  lg:max-w-[1440px] bg-${background}  mx-auto`}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
