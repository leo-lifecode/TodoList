import React from "react";
import LabelInput from "./LabelInput";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";
const ModalBox = ({
  handleCancel,
  handleSave,
  matchingEdit,
  setMatchingEdit,

}) => {
  const [prio, setPrio] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    priority: "",
    fullfilment: "",
    category: "",
    date: "",
    time: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    if (matchingEdit) {
      setMatchingEdit({ ...matchingEdit, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, priority: prio }));

    if (matchingEdit) {
      setMatchingEdit((prevForm) => ({
        ...prevForm,
        priority: prio === "" ? matchingEdit["priority"] : prio,
      }));
    }
  }, [prio]);

  return (
    <div className="absolute inset-0 bg-white  py-[24px] md:py-[10px] lg:py-[30px] px-[50px]">
      <div className="text-3xl font-semibold text-gray-800">
        Add a new to do
      </div>
      <div className="py-[10px] flex flex-col">
        <div className="flex justify-between gap-x-[50px] lg:flex-row flex-col">
          <div className="flex w-full text-[24px] flex-col md:flex-row">
            <LabelInput
              name="name"
              value={matchingEdit ? matchingEdit.name : null}
              input={true}
              description="name for the task you’re going to do"
              margin="me-[97px]"
              onchange={handleChange}
            >
              Name:
            </LabelInput>
          </div>
          <div className="flex text-[24px] xl:w-3/4 flex-col md:flex-row">
            <LabelInput
              name="priority"
              dropdown={true}
              prio={prio}
              setPrio={setPrio}
              description="select from dropdown"
              margin="md:me-[84px] lg:me-[42px]"
            >
              Priority:
            </LabelInput>
          </div>
        </div>
        <div className="flex w-full justify-between gap-x-[50px] lg:flex-row flex-col">
          <div className="flex w-full text-[24px] flex-col md:flex-row">
            <LabelInput
              textarea={true}
              margin="me-[40px]"
              value={matchingEdit ? matchingEdit.description : null}
              onchange={handleChange}
            >
              Description:
            </LabelInput>
          </div>
          <div className="flex w-full md:w-1/2 lg:w-full text-[24px] flex-col md:flex-row">
            <LabelInput
              fullfill={true}
              name="fullfilment"
              value={matchingEdit ? matchingEdit.fullfilment : null}
              margin="md:me-[48px] lg:me-[14px]"
              onchange={handleChange}
            >
              Fullfilment:
            </LabelInput>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex text-[24px] flex-col md:flex-row">
          <LabelInput
            input={true}
            value={matchingEdit ? matchingEdit.category : null}
            description="e.g. household, school, work"
            onchange={handleChange}
            margin="me-[65px]"
            name="category"
          >
            Category:
          </LabelInput>
        </div>

        <div className="w-full lg:w-1/2 flex text-[24px] flex-col md:flex-row">
          <LabelInput
            date={true}
            value={matchingEdit ? matchingEdit.date : null}
            description="dd/mm/yyyy  - can be omitted"
            onchange={handleChange}
            margin="me-[111px]"
          >
            Date:
          </LabelInput>
        </div>

        <div className="flex text-[24px] lg:flex-row flex-col lg:justify-between">
          <div className="flex w-full flex-col md:flex-row">
            <LabelInput
              time={true}
              value={matchingEdit ? matchingEdit.time : null}
              name="time"
              description="hh:mm - can be omitted"
              onchange={handleChange}
              margin="me-[109px]"
            >
              Time:
            </LabelInput>
          </div>
          <div className="flex gap-x-[21px] mt-[10px] lg:mt-[-50px] w-full lg:items-center  lg:justify-center justify-end">
            <Button onClick={() => handleSave(form)}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
