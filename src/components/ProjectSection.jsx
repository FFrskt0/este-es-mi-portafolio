import { projectsData } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold border-b border-slate-700 pb-2">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="p-6 bg-slate-800 rounded-xl border border-slate-700 space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
            <p className="text-slate-300 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-700 text-xs text-blue-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block text-sm text-slate-400 hover:text-white underline pt-2"
            >
              Ver en GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}