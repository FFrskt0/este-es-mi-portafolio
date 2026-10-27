import './Proyectos.css';

interface Proyecto {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
}

const Proyectos = () => {
  const proyectosData: Proyecto[] = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      titulo: "Desarrollo web",
      descripcion: "Práctica de creación de interfaces y aplicaciones web como parte de mi aprendizaje.",
      tecnologias: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      titulo: "Aplicaciones con inteligencia artificial",
      descripcion: "Exploración de ideas y herramientas de IA para desarrollar soluciones útiles.",
      tecnologias: ["Python", "Inteligencia artificial"],
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      titulo: "Fundamentos de programación",
      descripcion: "Ejercicios y proyectos académicos para fortalecer mi lógica y pensamiento computacional.",
      tecnologias: ["Algoritmos", "Python", "Git"],
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Áreas de Aprendizaje</h2>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              {/* 1. Imagen del Proyecto */}
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={`Ilustración sobre ${proyecto.titulo}`} />
              </div>

              {/* 2. Contenido de la Tarjeta */}
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                {/* 3. Etiquetas de Tecnologías (Mapeo Anidado) */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
