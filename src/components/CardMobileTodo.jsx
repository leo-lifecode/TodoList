import React from "react";
import Delete from "../assets/Delete.svg";
import Edit from "../assets/Edit.svg";
import "../App.css";

const CardTodo = ({
  name,
  description,
  percent,
  priority,
  date,
  time,
  handleDelete,
  handleEdit,
  index,
  category,
}) => {
  return (
    <div className="bakcs rounded-2xl">
      <div className="text-white cord w-full h-[145px] flex justify-between flex-col py-[7px] px-[10px]">
        <div className="block">
          <div className="flex justify-between text-secondary font-bold text-[14px]">
            <div
              className={`text-[14px] font-semibold ${
                priority === "Easy"
                  ? "text-green-300"
                  : priority === "Medium"
                  ? "text-orange-300"
                  : "text-red-500"
              }`}
            >
              {priority}
            </div>
            <div className="flex gap-x-[5px] w-max flex-shrink-0 h-[24px]">
              <img
                src={Delete}
                onClick={() => handleDelete(index)}
                alt="Edit"
                className="cursor-pointer hover:bg-slate-400 rounded-full duration-200 "
              />
              <img
                onClick={() => handleEdit(index)}
                src={Edit}
                alt="Delete"
                className="cursor-pointer hover:bg-slate-400 rounded-full duration-200`"
              />
            </div>
          </div>
          <div className="font-semibold text-[24px] break-words line-clamp-2 flex flex-col">
            <span className="font-pilat font-normal">{name}</span>
            <span className="text-orange-200 text-[14px] mt-[-5px]">{category}</span>
          </div>
        </div>
        <div className="text-[14px] text-gray-300">{description}</div>
        <div className="flex flex-col ">
          <div className="justify-between flex text-[12px] items-center ">
            <div className="flex">
              <div className="me-1">Due on :</div>
              <div>{time}</div>
            </div>
            <div className="flex justify-center flex-col items-center">
              <div className="text-yellow-500">{percent}%</div>
              <div className="range">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={percent}
                  onChange={(e) => e.target.value}
                  id="range2"
                  className="range-input bg-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTodo;
