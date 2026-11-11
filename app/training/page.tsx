import { ChooseMuscleGroups } from "@/widgets";

export const instant = false;
const CreateTrainingPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) => {
  const { id } = await searchParams;
  console.log(id);
  return (
    <section className="container">
      <ChooseMuscleGroups id={id} />
    </section>
  );
};

export default CreateTrainingPage;
