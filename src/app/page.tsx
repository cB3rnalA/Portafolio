import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <Projects />
    </main>
  );
}