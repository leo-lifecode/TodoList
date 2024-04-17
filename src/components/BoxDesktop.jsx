import React from "react";
import Task from "./Task";

const BoxDesktop = ({ handleDelete, tasks, handleEdit, completed }) => {
  return (
    <div className="hidden md:block bg-white bg-opacity-75 mt-[50px] rounded-[20px] py-[18px] sm:px-2 md:ps-[61px] md:pe-[30px] h-[350px] overflow-y-auto">
      <table className="w-full text-left table-auto">
        <thead className="lg:text-[24px] mb-[10px] md:text-[18px] font-normal ">
          <tr>
            <th className="">Task</th>
            <th className="">Description</th>
            <th className="text-center">Category</th>
            <th className="text-center">When</th>
            <th className="text-center">Priority</th>
            <th className="text-center w-0">Fullfilment</th>
            <th className="opacity-0 w-0"></th>
          </tr>
        </thead>

        <tbody>
          {completed === "completed"
            ? tasks.map((item, index) => {
                if (item.form.fullfilment === "100") {
                  return (
                    <Task
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
              })
            : completed === "todo"
            ? tasks.map((item, index) => {
                if (item.form.fullfilment < 100) {
                  return (
                    <Task
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
              })
            : tasks.map((item, index) => (
                <Task
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
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoxDesktop;
