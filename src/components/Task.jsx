import React from "react";
import Delete from "../assets/Delete.svg";
import Edit from "../assets/Edit.svg";
const Task = ({
  name,
  description,
  date,
  category,
  percent,
  priority,
  time,
  index,
  handleDelete,
  handleEdit,
}) => {
  return (
    <tr className="border-b border-gray-400 shadow-sm">
      <td className="p-1 break-words line-clamp-3 max-w-[120px]">{name}</td>
      <td className="p-1 max-w-[120px] break-words h-[20px]">{description}</td>
      <td className="text-center p-2 break-words max-w-[120px]">{category}</td>
      <td className="text-center p-2 h-0">
        {date}  {time}
      </td>
      <td
        className={`text-center p-2 font-semibold ${
          priority === "Easy"
            ? "text-green-500"
            : priority === "Medium"
            ? "text-orange-500"
            : "text-red-600"
        }`}
      >
        {priority}
      </td>
      <td
        className={`text-center p-2 font-semibold ${
          percent >= "80"
            ? "text-red-700"
            : percent >= "50"
            ? "text-orange-300"
            : "text-green-700"
        }`}
      >
        {percent}%
      </td>
      <td className="text-right min-w-max">
        <div className="flex gap-x-[5px] w-max flex-shrink-0">
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
      </td>
    </tr>
  );
};

export default Task;
