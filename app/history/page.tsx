import { Training } from "@/entities";
import { Visites } from "@/widgets";

const HistoryPage = () => {
  return (
    <section className="container flex flex-col gap-8">
      <Visites />
      <Training />
      <Training />
      <Training />
      <Training />
      <Training />
      <Training />
      <Training />
    </section>
  );
};

export default HistoryPage;
