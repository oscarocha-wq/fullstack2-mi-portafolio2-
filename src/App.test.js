import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Contacto from './components/Contacto';

describe('Pruebas Unitarias - Portafolio Paul Vásquez', () => {

  it('Renderiza el nombre principal en el DOM', () => {
    render(<App />);
    // Usamos getAllByText porque el nombre aparece en la Navbar y en el Heading
    const elementosNombre = screen.getAllByText(/Paul Vásquez/i);
    expect(elementosNombre.length).toBeGreaterThan(0);
  });

  it('Renderiza los 3 proyectos requeridos', () => {
    render(<App />);
    const botonesVerMas = screen.getAllByText(/Ver Más Detalles/i);
    expect(botonesVerMas.length).toBe(3);
  });

  it('Verifica el envío del formulario de contacto', () => {
    render(<Contacto />);
    
    const inputNombre = screen.getByLabelText(/Nombre Completo/i);
    const inputEmail = screen.getByLabelText(/Correo Electrónico/i);
    const inputMensaje = screen.getByLabelText(/Mensaje/i);
    const botonEnviar = screen.getByRole('button', { name: /Enviar Mensaje/i });

    fireEvent.change(inputNombre, { target: { value: 'Juan Pérez' } });
    fireEvent.change(inputEmail, { target: { value: 'juan@example.com' } });
    fireEvent.change(inputMensaje, { target: { value: 'Mensaje de prueba' } });

    fireEvent.click(botonEnviar);

    const mensajeExito = screen.getByText(/¡Mensaje enviado con éxito!/i);
    expect(mensajeExito).toBeInTheDocument();
  });

});