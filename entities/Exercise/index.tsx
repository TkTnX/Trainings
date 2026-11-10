import Image from "next/image";
import Link from "next/link";

export const Exercise = () => {
  return (
    <Link href={`/progress/1`} className="flex items-start gap-2">
      <Image
        src={"/images/exercises/stanovaya-tyaga.jpg"}
        width={140}
        height={100}
        className="rounded-xl w-35 h-25 "
        alt="Становая тяга"
      />
      <div>
        <h4 className="text-xl">Становая тяга</h4>
        <p className="text-gray">Рекорд: 45 кг на 10 раз</p>
      </div>
    </Link>
  );
};
