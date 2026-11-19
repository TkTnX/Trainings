import { ProgressList } from "@/widgets";
import Link from "next/link";

const ProgressPage = () => {
  return (
    <>
      <ProgressList />
      <div className="container mt-4">
        <Link
          href={"/create-exercise"}
          className="w-full block  py-4 rounded-lg text-center bg-main "
        >
          Добавить упражнение
        </Link>
      </div>
    </>
  );
};

export default ProgressPage;
