export default function Skills() {
  const skills = ["JavaScript", "React", "Python", "Django", "Git", "Tailwind CSS"];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold border-b border-slate-700 pb-2">Habilidades</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-3 py-1 bg-slate-800 border border-slate-700 text-sm font-medium rounded-md text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}