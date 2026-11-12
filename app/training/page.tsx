import { ChooseExercises, ChooseMuscleGroups, Training } from "@/widgets";

export const instant = false;
const CreateTrainingPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string; step: string }>;
}) => {
  const { id, step } = await searchParams;
  return (
    <section className="container">
      {step === "1" ? (
        <ChooseMuscleGroups id={id} />
      ) : step === "2" ? (
        <ChooseExercises id={id} />
      ) : (
        <Training id={id} />
      )}
    </section>
  );
};

export default CreateTrainingPage;
