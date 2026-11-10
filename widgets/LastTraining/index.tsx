import { Training } from "@/entities";


export const LastTraining = () => {
  return (
    <section className="mt-5 container relative">
      <Training isLastTraining={true} />
    </section>
  );
};
