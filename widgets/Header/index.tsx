"use client";
import { FinishTrainingButton } from "@/features";
import { PATHS } from "@/shared/constants";
import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="flex items-center justify-between container h-20 ">
      {pathname !== "/" && (
        <button onClick={() => router.back()}>
          <ArrowLeft className="text-gray" />
        </button>
      )}
      <p className="font-bold text-2xl ">
        {pathname === "/"
          ? "Главная"
          : PATHS.find(({ path }) => pathname.includes(path))?.label || ""}
      </p>
      <div>
        {pathname === "/training" && (
          <FinishTrainingButton />
        )}
      </div>
    </header>
  );
};
