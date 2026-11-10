import { Exercise } from "@/entities";

export const ProgressSection = () => {
  return (
    <section className="container mt-4">
      <h2 className="font-bold text-xl">Грудь | Трицепс</h2>
      <div className="grid gap-8 mt-4">
        <Exercise />
        <Exercise />
        <Exercise />
      </div>
      <div className="border-b border-b-border mt-4" />
    </section>
  );
};
