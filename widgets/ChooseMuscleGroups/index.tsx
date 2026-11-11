"use client";

import { MuscleGroups } from "@/app/generated/prisma/enums";
import { updateTraining } from "@/shared/api";
import Image from "next/image";
import { useState } from "react";

interface Props {
  id: string;
}

export const ChooseMuscleGroups = ({ id }: Props) => {
  const [selected, setSelected] = useState<MuscleGroups[]>([]);

  const onClick = (group: MuscleGroups) => {
    if (selected.includes(group)) {
      setSelected(selected.filter((g) => g !== group));
    } else {
      setSelected([...selected, group]);
    }
  };

  const onSubmit = async () => {
    await updateTraining(id, {
      muscleGroup: selected,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => onClick(MuscleGroups.BACK)}
        className={`relative w-full h-50 rounded-2xl transition border border-transparent ${selected.includes(MuscleGroups.BACK) ? " border-green-500! scale-95" : ""}`}
      >
        <Image
          fill
          className="brightness-30 rounded-2xl"
          src={`/images/muscle-groups/back.jpg`}
          alt="Спина"
        />
        <p className="absolute bottom-4 left-4 font-bold text-4xl">Спина</p>
      </button>
      <button
        onClick={() => onClick(MuscleGroups.BREAST)}
        className={`relative w-full h-50 rounded-2xl transition border border-transparent ${selected.includes(MuscleGroups.BREAST) ? " border-green-500! scale-95" : ""}`}
      >
        <Image
          fill
          className="brightness-30 rounded-2xl"
          src={`/images/muscle-groups/breast.jpg`}
          alt="Грудь"
        />
        <p className="absolute bottom-4 left-4 font-bold text-4xl">Грудь</p>
      </button>
      <button
        onClick={() => onClick(MuscleGroups.BICEPS)}
        className={`relative w-full h-50 rounded-2xl transition border border-transparent ${selected.includes(MuscleGroups.BICEPS) ? " border-green-500! scale-95" : ""}`}
      >
        <Image
          fill
          className="brightness-30 rounded-2xl"
          src={`/images/muscle-groups/biceps.jpg`}
          alt="Бицепс"
        />
        <p className="absolute bottom-4 left-4 font-bold text-4xl">Бицепс</p>
      </button>
      <button
        onClick={() => onClick(MuscleGroups.TRICEPS)}
        className={`relative w-full h-50 rounded-2xl transition border border-transparent ${selected.includes(MuscleGroups.TRICEPS) ? " border-green-500! scale-95" : ""}`}
      >
        <Image
          fill
          className="brightness-30 rounded-2xl"
          src={`/images/muscle-groups/triceps.jpg`}
          alt="Трицепс"
        />
        <p className="absolute bottom-4 left-4 font-bold text-4xl">Трицепс</p>
      </button>
      <button
        onClick={() => onClick(MuscleGroups.LEGS)}
        className={`relative w-full h-50 rounded-2xl transition border border-transparent ${selected.includes(MuscleGroups.LEGS) ? " border-green-500! scale-95" : ""}`}
      >
        <Image
          fill
          className="brightness-30 rounded-2xl"
          src={`/images/muscle-groups/legs.jpg`}
          alt="Ноги"
        />
        <p className="absolute bottom-4 left-4 font-bold text-4xl">Ноги</p>
      </button>
      <button
        onClick={() => onSubmit()}
        className="mt-5 bg-main rounded-lg py-3 transition active:opacity-80"
      >
        Далее
      </button>
    </div>
  );
};
