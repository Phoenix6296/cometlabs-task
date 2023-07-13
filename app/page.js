import {
  Benefits,
  Features,
  Header,
  Reason,
  Testimonials,
  About,
} from "@/components";

export default function Home() {
  return (
    <main className="text-primary">
      <Header />
      <Benefits />
      <Reason />
      <Testimonials />
      <Features />
      <About />
    </main>
  );
}
