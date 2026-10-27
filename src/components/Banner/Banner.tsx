import './Banner.css';
const Banner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Abierto a aprender y colaborar
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img
            src="https://ui-avatars.com/api/?name=Ulises+Mantilla&size=200&background=00d8ff&color=0b0f19&bold=true"
            alt="Foto de perfil de Ulises Mantilla"
            className="profile-photo"
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          Ulises <br />
          <span className="text-cyan">Mantilla</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Estudiante de Ingeniería de Software con Inteligencia Artificial
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Me estoy formando en desarrollo de software e inteligencia artificial. Me interesa crear aplicaciones útiles, aprender nuevas tecnologías y aplicar soluciones de IA a problemas reales.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>

      {/* 7. Indicador de Scroll (flecha animada hacia abajo) */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;
