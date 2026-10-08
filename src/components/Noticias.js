import React, { useState, useEffect } from 'react';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/noticias.json')
      .then((res) => res.json())
      .then((data) => {
        setNoticias(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar noticias:", err);
        setCargando(false);
      });
  }, []);

  return (
    <section id="noticias" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Últimas Noticias</h2>
        {cargando ? (
          <p className="text-center text-muted">Cargando información...</p>
        ) : (
          <div className="row g-4">
            {noticias.map((item) => (
              <div key={item.id} className="col-md-6">
                <div className="card border-primary h-100 shadow-sm">
                  <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Novedad #{item.id}</span>
                    <small>{item.fecha}</small>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-bold">{item.titulo}</h5>
                    <p className="card-text text-secondary">{item.contenido}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Noticias;