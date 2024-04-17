import React from "react";
import BoxTaskMobileComplete from "./BoxTaskMobileComplete";
import CardTodo from "./CardMobileTodo";
const ScreenMobile = ({ handleDelete, tasks,handleEdit}) => {
  return (
    <div className="mt-[34px] md:hidden">
      <div className="mb-[13px] text-[24px] font-medium text-white font-pilat">
        Completed Tasks
      </div>
      <div className="w-full overflow-x-scroll snap-start gap-x-[12px] flex">
        {tasks.map((item, index) => {
          if (item.form.fullfilment === "100") {
            return <BoxTaskMobileComplete key={index} item={item} index={index} handleDelete={handleDelete} handleEdit={handleEdit}/>;
          }
        })}
      </div>
      <div className="mt-[34px] mb-[13px] text-[24px] font-medium text-white font-pilat">
        To Do Task
      </div>
      <div className="w-full overflow-x-scroll snap-start gap-x-[12px] flex flex-col gap-y-[12px]">
        {tasks.map((item, index) => {
          if (item.form.fullfilment !== "100") {
            return (
              <CardTodo
                key={index}
                index={index}
                name={item.form.name}
                description={item.form.description}
                date={item.form.date}
                time={item.form.time}
                category={item.form.category}
                percent={item.form.fullfilment}
                priority={item.form.priority}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ScreenMobile;
