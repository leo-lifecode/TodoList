import React from "react";

const Button = ({ children, onClick,active }) => {
  return (
    <button
      onClick={onClick}
      className={`${active ? "bg-primary" : "bg-background"} lg:py-[13px] py-[10px] md:py-[6px] lg:px-[45px] xl:px-[52px] rounded-[20px] text-xl font-normal text-white hover:bg-primary duration-200 px-[18px] md:px-[23px]`}
    >
      {children}
    </button>
  );
};

export default Button;
