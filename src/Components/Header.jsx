import React from "react";
import { Moon, Sun, noCheckTask, noCheckTaskDark } from "../Images";

export default function Header({ themeDark, changeTheme, addTask }) {

  function createTask(e) {
    if(e.key === "Enter") {
      addTask({
        task: e.target.value,
        check: false
      })
      document.getElementById("input").value = "";
    }
  }

  return (
    <div className="w-full mx-auto max-w-xl relative px-4 md:px-0">
      <div className="flex items-center justify-between relative pt-20 tracking-[15px]">
        <h1 className="text-white font-bold text-4xl">TODO</h1>
        <img
          src={themeDark ? Sun : Moon}
          alt="Change color"
          onClick={() => changeTheme()}
          className="cursor-pointer"
        />
      </div>
      <div className="bg-bg-secondary-light dark:bg-bg-secondary-dark py-3 rounded-md mt-10 flex items-center px-4">
        <img src={themeDark ? noCheckTaskDark : noCheckTask} />
        <input type="text" id="input" className="bg w-full ml-4 py-1 bg-bg-secondary-light dark:bg-bg-secondary-dark  text-text-light dark:text-text-dark" placeholder="Go to Store..." onKeyDown={(e) => createTask(e)} />
      </div>
    </div>
  );
}
