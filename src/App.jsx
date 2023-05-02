import { useEffect, useState } from "react";
import { BgDark, BgLight } from "./Images";
import { Header, Tasks } from "./Components";
import { db } from "./Firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = (text) => toast.success(text);
  const [themeDark, setThemeDark] = useState(true);
  const [data, setData] = useState([]);

  function changeTheme() {
    setThemeDark(!themeDark);
    const html = document.querySelector("html");
    html.classList.contains("dark")
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  }

  const addTask = async (task) => {
    await addDoc(collection(db, "tasks"), task);
    notify("Tarea agregada exitosamente");
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
    notify("Tarea eliminada exitosamente");
  };

  const doneTask = async (id, state) => {
    const docRef = doc(db, "tasks", id);
    await updateDoc(docRef, {
      check: !state,
    });
  };

  useEffect(() => {
    onSnapshot(collection(db, "tasks"), (snapshot) => {
      const newData = [];
      snapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });
      setData(newData);
    });
  }, []);

  console.log(data);

  return (
    <div className="w-full bg-bg-light dark:bg-bg-dark min-h-[100vh]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <img
        src={themeDark ? BgDark : BgLight}
        alt=""
        className="absolute w-full h-[300px]"
      />
      <Header
        changeTheme={changeTheme}
        themeDark={themeDark}
        addTask={addTask}
      />
      <Tasks
        data={data}
        themeDark={themeDark}
        doneTask={doneTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
