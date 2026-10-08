import React from 'react';

const SobreMi = ({ nombre, biografia, fotoUrl, redes }) => {
  return (
    <section 
      id="sobre-mi" 
      className="py-5 text-white text-center shadow-sm"
      style={{ background: 'linear-gradient(135deg, #111111 0%, #b31217 50%, #e52d27 100%)' }}
    >
      <div className="container">
        <img 
          src={fotoUrl} 
          alt={`Fotografía profesional de ${nombre}`} 
          className="rounded-circle mb-3 border border-3 border-white shadow"
          style={{ width: '170px', height: '170px', objectFit: 'cover' }}
        />
        <h1 id="nombre-persona" className="display-5 fw-bold">{nombre}</h1>
        <p className="lead max-w-600 mx-auto col-md-8 fs-5">{biografia}</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          {redes && redes.map((red, index) => (
            <a 
              key={index} 
              href={red.url} 
              className="btn btn-outline-light btn-sm px-3" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={red.nombre}
            >
              {red.nombre}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreMi;