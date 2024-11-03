import { useState, useEffect } from "react";
import Button from "./components/Button";
import ButtonAdd from "./components/ButtonAdd";
import ModalBox from "./components/ModalBox";
import BoxDesktop from "./components/BoxDesktop";
import ScreenMobile from "./components/ScreenMobile";
import icontodos from "./assets/Edit.svg";

export default function App() {
  const getTaskLocal = JSON.parse(localStorage.getItem("tasks")) || [
    {
      form: {
        name: "example name : examplesss",
        description: "example description for your tasks",
        priority: "High",
        fullfilment: "100",
        category: "School",
        date: "2024-09-25",
        time: "15:28",
      },
    },
  ];
  const [tasks, setTasks] = useState(getTaskLocal);
  const [modalBox, setModalBox] = useState(false);
  const [matchingEdit, setMatchingEdit] = useState(false);
  const [id, setId] = useState(false);
  const [completed, setCompleted] = useState("");
  const [timeoutids, setTimeoutids] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function schedulReminder() {
    timeoutids.forEach(clearTimeout);
    setTimeoutids([]);
    tasks.forEach((element) => {
      const title = element.form.name;
      const description = element.form.description;
      const date = element.form.date;
      const time = element.form.time;

      if (element.form.fullfilment === "100") {
        return;
      }
      const datetimestring = date + " " + time;
      const schedultime = new Date(datetimestring);
      const currenttime = new Date();
      const timeoutdifferent = schedultime - currenttime;

      if (timeoutdifferent > 0) {
        const timeoutid = setTimeout(() => {
          new Notification(title, {
            icon: icontodos,
            body: description,
          });
        }, timeoutdifferent);

        setTimeoutids((ids) => [...ids, timeoutid]);
      }
    });
  }

  const handleCancel = () => {
    setModalBox(false);
    setMatchingEdit(false);
  };

  function handleSave(form) {
    if (
      Object.values(form).every((value) => value === "") &&
      matchingEdit === false
    ) {
      return setModalBox(false);
    }

    if (matchingEdit) {
      const updatedTasks = [...tasks];
      updatedTasks[id].form = matchingEdit;
      setTasks(updatedTasks);
      setModalBox(false);
      setMatchingEdit(false);
    } else {
      setTasks([...tasks, { form }]);
      setModalBox(false);
    }
  }

  function handleDelete(id) {
    setTasks(tasks.filter((item, index) => index !== id));
  }
  const handleEdit = (id) => {
    setMatchingEdit(tasks[id].form);
    setId(id);
    setModalBox(true);
  };

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          schedulReminder();
        }
      });
    }
  }, [tasks]);

  return (
    <div className="relative md:static w-full flex md:items-center md:justify-center bg-background min-h-screen h-full md:h-screen">
      <div className="md:bg-box px-[22px] w-full md:max-w-[768px] lg:max-w-[967px] xl:min-w-[1200px] xl:w-min text-black h-full md:h-[600px] flex flex-col py-[22px] sm:px-[15px] md:px-[50px] rounded-[30px]">
        <div className="font-pilat text-left text-[24px] text-white md:text-black md:text-center mb-[32px] md:text-[40px] font-bold ">
          To do List
        </div>
        <div className="static md:relative">
          <div className="flex justify-between gap-x-[30px] lg:gap-x-[50px] xl:gap-x-[70px]">
            <ButtonAdd onClick={() => setModalBox(!modalBox)} />
            <div className="hidden md:flex sm:space-x-2 lg:space-x-5 flex-shrink-0 font-pilat">
              <Button
                onClick={() => setCompleted("")}
                active={completed === ""}
              >
                All
              </Button>
              <Button
                onClick={() => setCompleted("todo")}
                active={completed === "todo"}
              >
                To do
              </Button>
              <Button
                onClick={() => setCompleted("completed")}
                active={completed === "completed"}
              >
                Completed
              </Button>
            </div>
          </div>
          <ScreenMobile
            tasks={tasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <BoxDesktop
            handleDelete={handleDelete}
            tasks={tasks}
            completed={completed}
            handleEdit={handleEdit}
          />
          {modalBox && (
            <ModalBox
              handleSave={handleSave}
              matchingEdit={matchingEdit}
              setMatchingEdit={setMatchingEdit}
              handleCancel={handleCancel}
            />
          )}
        </div>
      </div>
      <div className="md:hidden fixed bottom-5 right-2 w-[80px] rounded-full flex items-center justify-center bg-secondary shadow-md shadow-black border-background border-t-2 h-[80px]">
        <div
          className="text-[40px] mt-[-7px]"
          onClick={() => setModalBox(!modalBox)}
        >
          +
        </div>
      </div>
    </div>
  );
}
