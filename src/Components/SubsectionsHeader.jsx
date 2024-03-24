import SubSectionUnderline from "./SubSectionUnderline";

function SubsectionsHeader({ title, header }) {
  return (
    <div>
      <h4 className="text-blue-text text-base font-medium leading-6 font-inter">
        {title}
      </h4>
      <h2 className="font-inter text-[26px] md:text-3xl  lg:text-5xl lg:mt-3 leading-[56px] font-bold text-btn-text-color">
        {header}
      </h2>
      <SubSectionUnderline />
    </div>
  );
}

export default SubsectionsHeader;
