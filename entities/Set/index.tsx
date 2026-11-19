import { Set as SetType } from "@/app/generated/prisma/client";
import { DeleteSet } from "@/features";
import { ChevronUp, X } from "lucide-react";

interface Props {
  set: SetType;
  index: number;
  onDeleteSet?: () => void;
  isLastResult?: boolean;
}

export const Set = ({ set, index, onDeleteSet, isLastResult }: Props) => {
  return (
    <div className="bg-[#232330] p-4 rounded-2xl relative flex items-center gap-4">
      <p className="bg-main w-10 h-10 flex items-center justify-center rounded-full font-bold">
        {index}
      </p>
      <div>
        <p>
          <span className="font-bold text-xl">{set.kg}</span> кг x{" "}
          <span className="font-bold text-xl">{set.reps}</span> раз
        </p>
        {set.note && <p className="text-sm text-gray">{set.note}</p>}
        {set.isIncrease && (
          <div className="w-fit absolute right-10 top-3 bg-green-500/30 text-green-500 p-2 rounded-full">
            <ChevronUp size={16} />
          </div>
        )}
        {set.rest && <p className=" font-bold">Отдых {set.rest}</p>}
        {!isLastResult && <DeleteSet onDeleteSet={onDeleteSet} id={set.id} />}
      </div>
    </div>
  );
};
