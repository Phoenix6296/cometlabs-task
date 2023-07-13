import { Benefits, Features, Header, Reason, Testimonials } from "@/components";

export default function Home() {
  return (
    <main className="text-primary">
      <Header />
      <Benefits />
      <Reason />
      <Testimonials />
      <Features />
    </main>
  );
}
