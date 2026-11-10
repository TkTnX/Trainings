"use client";
import { Suspense, useState } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "react-day-picker/locale";
import "react-day-picker/style.css";
export const Visites = () => {
  const [selected, setSelected] = useState([
    new Date(2026, 10, 10),
    new Date(2026, 10, 15),
    new Date(2026, 10, 20),
  ]);

  return (
    <div >
      <h3 className="font-semibold text-xl">История посещений</h3>
      <Suspense>
        <DayPicker
          selected={selected}
          mode="multiple"
          locale={ru}
          className="w-full! max-w-full!"
        />
      </Suspense>
    </div>
  );
};
