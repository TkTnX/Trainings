"use client";
import { Set as SetType } from "@/app/generated/prisma/client";
import { Set } from "@/entities";

interface Props {
  sets: SetType[];
  onDeleteSet?: (setId: string) => void
  isLastResult?: boolean
}

export const Sets = ({ sets, onDeleteSet, isLastResult=false }: Props) => {

  return (
    <div className="mt-2 flex flex-col gap-4">
      {sets.map((set, i) => (
        <Set
          isLastResult={isLastResult}
          onDeleteSet={() => onDeleteSet?.(set.id)}
          index={i + 1}
          key={set.id}
          set={set}
        />
      ))}
    </div>
  );
};
