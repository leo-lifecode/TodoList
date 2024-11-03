const LabelInput = ({
  children,
  textarea = false,
  fullfill = false,
  input = false,
  date = false,
  time = false,
  description,
  margin,
  name,
  prio,
  setPrio,
  dropdown,
  onchange,
  value,
}) => {
  console.log(prio);
  return (
    <>
      <div className={`${margin} lg:mb-[33px]`}>{children}</div>
      <div className="w-full">
        {textarea && (
          <textarea
            value={value}
            name="description"
            onChange={onchange}
            type="text"
            placeholder="a short description of the task - can be omitted"
            className="placeholder:text-[16px] text-[16px] border py-[5px] px-2 border-black max-h-[90px] w-full lg:w-[200px] xl:w-[330px]"
            required
          />
        )}
        {input && (
          <input
            name={name}
            value={value}
            onChange={onchange}
            type="text"
            placeholder={description}
            className="border border-black px-2 py-[5px] text-[16px] placeholder:text-[16px] w-full lg:w-[200px] xl:w-full"
            required
          />
        )}
        {dropdown && (
          <select
            name={name}
            value={prio}
            onChange={(e) => setPrio(e.target.value)}
            className="border border-black px-2 py-[5px] text-[16px] placeholder:text-[16px] w-full lg:w-[200px] xl:w-full"
          >
            <option value="">Select an option</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        )}

        {fullfill && (
          <input
            onChange={onchange}
            type="range"
            max="100"
            min="0"
            value={value}
            name={name}
            className="w-full"
          />
        )}
        {date && (
          <input
            onChange={onchange}
            type="date"
            name="date"
            value={value}
            className="border border-black w-full lg:w-[200px] xl:w-[330px]"
            placeholder={description}
          />
        )}
        {time && (
          <input
            onChange={onchange}
            type="time"
            name="time"
            value={value}
            className="border border-black w-full lg:w-[200px] xl:w-[330px]"
            placeholder={description}
          />
        )}
      </div>
    </>
  );
};

export default LabelInput;
