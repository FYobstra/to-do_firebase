import React, { useEffect, useState } from "react";
import { checkTask, noCheckTask, noCheckTaskDark } from "../Images";
import { FiX } from "react-icons/fi";

export default function Tasks({ data, themeDark, doneTask, deleteTask }) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, [data]);

  return (
    <div className="w-full max-w-xl mx-auto px-4 md:px-0">
      <div className="bg-bg-secondary-light dark:bg-bg-secondary-dark relative mt-10 pt-10 rounded-md shadow-2xl ">
        {task.length > 0 ? (
          <>
            {task.map((data) => (
              <div
                key={data.id}
                className="w-full py-4 px-4 border-b dark:border-[#3b3b3b] border-[#ebebeb] flex items-center justify-between"
              >
                <div className="inline-flex gap-4">
                  <img
                    src={
                      data.check
                        ? checkTask
                        : themeDark
                        ? noCheckTaskDark
                        : noCheckTask
                    }
                    onClick={() => doneTask(data.id, data.check)}
                    alt=""
                    className="cursor-pointer"
                  />
                  {data.check ? (
                    <del className="text-text-light dark:text-text-dark">
                      {data.task}
                    </del>
                  ) : (
                    <h3 className="text-text-light dark:text-text-dark">
                      {data.task}
                    </h3>
                  )}
                </div>
                <FiX
                  onClick={() => deleteTask(data.id)}
                  className="text-text-light dark:text-text-dark text-2xl cursor-pointer dark:hover:text-white hover:text-gray-400"
                />
              </div>
            ))}
          </>
        ) : (
          <h1 className="text-center text-text-light dark:text-text-dark">
            No tienes tareas pendientes
          </h1>
        )}
        <div className="w-full flex justify-between items-center px-4 py-5 border-text-light dark:border-text-dark">
          <p className="text-text-light dark:text-text-dark">{`${task.length} items left`}</p>
          <div className="inline-flex gap-4">
            <p
              className="text-text-light dark:text-text-dark cursor-pointer dark:hover:text-white hover:text-gray-400"
              onClick={() => setTask(data)}
            >
              All
            </p>
            <p
              className="text-text-light dark:text-text-dark cursor-pointer dark:hover:text-white hover:text-gray-400"
              onClick={() =>
                setTask(data.filter((data) => data.check === false))
              }
            >
              Active
            </p>
            <p
              className="text-text-light dark:text-text-dark cursor-pointer dark:hover:text-white hover:text-gray-400"
              onClick={() =>
                setTask(data.filter((data) => data.check === true))
              }
            >
              Complete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
