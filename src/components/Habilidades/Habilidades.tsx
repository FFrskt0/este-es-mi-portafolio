import './Habilidades.css';

interface Habilidad {
  id: number;
  titulo: string;
  descripcion: string;
  nivel: string;
  botonTexto: string;
  estado: 'proceso' | 'completado';
}

const Habilidades = () => {
  const skillsData: Habilidad[] = [
    {
      id: 1,
      titulo: "Programación",
      descripcion: "Fundamentos de lógica, algoritmos y resolución de problemas.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 2,
      titulo: "Desarrollo web",
      descripcion: "HTML, CSS y JavaScript para crear interfaces web.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 3,
      titulo: "React",
      descripcion: "Componentes, propiedades y estado para interfaces interactivas.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 4,
      titulo: "Python",
      descripcion: "Práctica de programación y exploración de herramientas de IA.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 5,
      titulo: "Inteligencia artificial",
      descripcion: "Aprendizaje de conceptos fundamentales y aplicaciones de IA.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 6,
      titulo: "Bases de datos",
      descripcion: "Fundamentos de modelado y consulta de datos con SQL.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 7,
      titulo: "Git y GitHub",
      descripcion: "Control de versiones y gestión de proyectos de código.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    },
    {
      id: 8,
      titulo: "Ingeniería de software",
      descripcion: "Buenas prácticas, análisis de requerimientos y diseño de soluciones.",
      nivel: "En formación",
      botonTexto: "EN APRENDIZAJE",
      estado: "proceso"
    }
  ];

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Tech Stack</h2>
        {/* Iteramos sobre el arreglo de datos usando .map() */}
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              {/* Cabecera de la tarjeta: Ícono y Botón */}
              <div className="skill-header">
                <div className="skill-icon">
                  {/* Aquí pueden colocar la etiqueta <img src={LogoPowerBI} /> */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                {/* Clases dinámicas: Si el estado es proceso, aplicamos la clase 'badge-yellow' */}
                <span className={`skill-badge ${skill.estado === 'proceso' ? 'badge-yellow' : 'badge-green'}`}>
                  {skill.botonTexto}
                </span>
              </div>

              {/* Cuerpo de la tarjeta: Textos */}
              <div className="skill-body">
                <h3 className="skill-title">{skill.titulo}</h3>
                <p className="skill-desc">{skill.descripcion}</p>
                <span className="skill-level">{skill.nivel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
