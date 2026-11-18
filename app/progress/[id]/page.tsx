import { BigExercise } from "@/entities";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const ExercisePage = ({ params }: Props) => {
  return (
    <Suspense
      fallback={
        <div>
          {" "}
          <Loader2 className="animate-spin mx-auto" />{" "}
        </div>
      }
    >
      <ExerciseContent params={params} />
    </Suspense>
  );
};

const ExerciseContent = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <BigExercise id={id} />;
};

export default ExercisePage;
