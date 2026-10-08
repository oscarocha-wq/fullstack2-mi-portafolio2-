import React from 'react';

const Proyectos = ({ listaProyectos }) => {
  return (
    <section id="proyectos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Trayectoria y Proyectos</h2>
        <div className="row g-4">
          {listaProyectos && listaProyectos.map((proj) => (
            <div key={proj.id} className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img 
                  src={proj.imagen} 
                  className="card-img-top" 
                  alt={`Imagen representativa de ${proj.titulo}`} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{proj.titulo}</h5>
                  <p className="card-text text-secondary">{proj.descripcion}</p>
                  <p className="text-muted small mt-auto">
                    <strong>Áreas:</strong> {proj.tecnologias.join(', ')}
                  </p>
                  <a 
                    href={proj.enlace} 
                    className="btn btn-outline-primary w-100 mt-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver Más Detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;