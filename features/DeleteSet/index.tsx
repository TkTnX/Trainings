"use client";
import { deleteSet } from "@/shared/api";
import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  id: string;
  onDeleteSet?: () => void
}

export const DeleteSet = ({ id, onDeleteSet }: Props) => {
  const [isPending, setIsPanding] = useState(false);
  const onClick = async () => {
    try {
      setIsPanding(true);
      await deleteSet(id);
      onDeleteSet?.()
    } catch (error) {
      console.log("Не удалось удалить подход");
      console.log(error);
    } finally {
      setIsPanding(false);
    }
  };
  return (
    <button
      disabled={isPending}
      onClick={onClick}
      className="absolute disabled:pointer-events-none disabled:opacity-50 text-red-500 right-4 top-4"
    >
      <X />
    </button>
  );
};
