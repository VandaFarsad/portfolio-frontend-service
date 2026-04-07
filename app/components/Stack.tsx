"use client";

import { fetchStack, StackItemWithIcon } from "@/services/stackIconData";
import { useEffect, useState } from "react";

type FetchState = "initial" | "loading" | "success" | "error";

const Stack = () => {
  const [stackItems, setStackItems] = useState<StackItemWithIcon[]>([]);
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchStack()
      .then((data) => {
        setStackItems(data);
        setState("success");
      })
      .catch(() => {
        setStackItems([]);
        setState("error");
      });
  }, []);

  return (
    <section className="w-full min-h-screen p-4 sm:p-10 md:p-40 font-sans flex flex-col justify-center items-center bg-white dark:bg-slate-800 text-black dark:text-white">
      <div className="col-md-12 mx-auto pb-10 pt-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600 dark:border-pink-400">
            Tech Stack
          </p>
        </div>
      </div>
      {state === "loading" && <p className="text-center py-8">Loading stack...</p>}
      {state === "success" && (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 px-4 pb-6">
          {stackItems.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col justify-center items-center rounded-xl p-3 sm:p-6 dark:bg-white dark:text-black"
            >
              <span className={`lg:h-20 lg:w-20 md:h-16 md:w-16 h-12 w-12 ${item.iconClass}`}></span>
              <p className="text-sm sm:text-base">{item.name}</p>
            </div>
          ))}
        </div>
      )}
      {state === "error" && <p className="text-center py-8">Failed to load stack.</p>}
    </section>
  );
};

export default Stack;
