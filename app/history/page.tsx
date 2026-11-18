import { HistoryTrainings, Visites } from "@/widgets";

const HistoryPage = () => {
  return (
    <section className="container flex flex-col gap-8">
      <Visites />
      <HistoryTrainings />
    </section>
  );
};

export default HistoryPage;
