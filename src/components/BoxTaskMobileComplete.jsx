import React from "react";
import "../App.css";
import Delete from "../assets/Delete.svg";
import Edit from "../assets/Edit.svg";

const BoxTaskMobileCompelete = ({ item, index, handleDelete, handleEdit }) => {
  return (
    <div className="flex-shrink-0 flex-[0_0_60%] sm:flex-[0_0_40%] bg-secondary w-[183px] h-[200px] flex justify-between flex-col py-[7px] px-[10px]">
      <div>
        <div className="flex justify-between items-center">
          <div className="font-semibold text-red-700">{item.form.category}</div>
          <div className="flex gap-x-[5px] w-max flex-shrink-0 h-[24px]">
            <img
              src={Delete}
              onClick={() => handleDelete(index)}
              className="cursor-pointer hover:bg-slate-400 rounded-full duration-200"
            />
            <img
              onClick={() => handleEdit(index)}
              src={Edit}
              className="cursor-pointer hover:bg-slate-400 rounded-full duration-200"
            />
          </div>
        </div>
        <div className="font-semibold text-[24px] line-clamp-2 font-pilat">
          {item.form.name}
        </div>
      </div>
      <div className="text-[12px] text-gray-500 line-clamp-2">
        {item.form.description}
      </div>
      <div className="flex flex-col ">
        <div className="justify-between flex text-[12px]">
          <div>completed</div>
          <div>100%</div>
        </div>
        <div className="range">
          <input
            type="range"
            min="0"
            max="100"
            value={item.form.fullfilment}
            onChange={(e) => e.target.value}
            id="range2"
            className="range-input bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxTaskMobileCompelete;
