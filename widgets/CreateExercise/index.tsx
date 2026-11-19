"use client";
import { createExercise } from "@/shared/api";
import { SubmitEvent } from "react";

export const CreateExercise = () => {
  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await createExercise(formData)
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-4">
      <label className="flex flex-col">
        <span className="text-gray">Картинка</span>
        <input
          className="border border-border p-4 rounded-xl mt-2"
          type="file"
          name="image"
          accept="image/*"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-gray">Название</span>
        <input
          className="border border-border p-4 rounded-xl mt-2"
          placeholder="Название упражнения"
          type="text"
          name="name"
        />
      </label>
      <select
        className="border border-border p-4 rounded-xl mt-2"
        name="muscleGroup"
      >
        <option className="bg-border" value="BREAST">
          Грудь
        </option>
        <option className="bg-border" value="BACK">
          Спина
        </option>
        <option className="bg-border" value="SHOULDERS">
          Плечи
        </option>
        <option className="bg-border" value="LEGS">
          Ноги
        </option>
        <option className="bg-border" value="TRICEPS">
          Трицепс
        </option>
        <option className="bg-border" value="BICEPS">
          Бицепс
        </option>
      </select>
      <button className="bg-main text-center w-full mt-4 rounded-lg py-3">
        Создать
      </button>
    </form>
  );
};
