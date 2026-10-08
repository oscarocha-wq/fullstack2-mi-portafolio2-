import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.mensaje) {
      setEnviado(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      {/* Aumentamos maxWidth a 900px para que sea más ancho hacia los lados */}
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="text-center mb-4 fw-bold">Contacto</h2>
        {enviado && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
            <button type="button" className="btn-close" onClick={() => setEnviado(false)}></button>
          </div>
        )}
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm border-0">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold">Nombre Completo</label>
            <input 
              type="text" 
              className="form-control" 
              id="nombre" 
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label fw-bold">Mensaje</label>
            {/* Aumentamos rows a 7 para que el cuadro de mensaje sea más alto */}
            <textarea 
              className="form-control" 
              id="mensaje" 
              rows="7" 
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold py-2">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;