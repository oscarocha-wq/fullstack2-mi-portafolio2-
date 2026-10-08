import React from 'react';
import { render, screen } from '@testing-library/react';
import SobreMi from './SobreMi';

describe('Pruebas Unitarias - Componente SobreMi (Paul Vásquez)', () => {
  const mockProps = {
    nombre: "Paul Vásquez («El Flaco»)",
    biografia: "Comediante chileno y bombero voluntario.",
    fotoUrl: "/images/perfil.jpg",
    redes: [{ nombre: "Instagram", url: "https://www.instagram.com/grandeflacoo" }]
  };

  it('debe renderizar el nombre de Paul Vásquez en la etiqueta h1', () => {
    render(<SobreMi {...mockProps} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Paul Vásquez');
  });

  it('debe incluir la foto de perfil con su descripción alt accesible', () => {
    render(<SobreMi {...mockProps} />);
    const img = screen.getByAltText(/Fotografía profesional de Paul Vásquez/i);
    expect(img).toBeTruthy();
  });
});