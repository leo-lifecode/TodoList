import React from "react";

const ButtonAdd = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="text"
      className="py-[20px] md:py-[0px] group rounded-[20px] w-full group bg-slate-50 hover:bg-primary md:ps-5 flex items-center justify-center duration-150 hover:outline-none text-center"
    >
      <span className="text-4xl mt-[-6px] text-gray-600 me-[14px] group-hover:text-white">
        +
      </span>
      <div className="text-xl text-gray-500 group-hover:text-white">
        Add a new to do
      </div>
    </button>
  );
};

export default ButtonAdd;
