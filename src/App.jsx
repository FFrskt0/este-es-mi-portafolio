import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <Hero />
        <Skills />
        <ProjectSection />
        <Contact />
      </main>
    </div>
  );
}