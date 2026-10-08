import React from 'react';
import Navbar from './components/Navbar';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto'; // 1. IMPORTANTE: Importar aquí

const datosPaul = {
  nombre: "Paul Vásquez («El Flaco»)",
  biografia: "Comediante chileno, bombero voluntario, rescatista y Técnico en Enfermería de Nivel Superior (TENS). Reconocido por su destacada trayectoria en el humor nacional e internacional.",
  fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZoknW1k6Qsck0Zx79jOCJVuHY4N9Vn4o0C_ppwuc1Q&s=10",
  redes: [
    { nombre: "Instagram", url: "https://www.instagram.com/grandeflacoo" },
    { nombre: "Facebook", url: "https://www.facebook.com" }
  ]
};

const trayectoriaProyectos = [
  {
    id: 1,
    titulo: "Dinamita Show & Viña del Mar",
    descripcion: "Trayectoria histórica del humor logrando máximos reconocimientos (Gaviotas y Antorchas de Plata y Oro) en el Festival de Viña del Mar.",
    tecnologias: ["Humor Callejero", "Stand-up Comedy", "Teatro"],
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9eg8T8084KgeD84sN1CD4mVwG0fKMoOh4YGsUMnBQEA&s=10",
    enlace: "https://es.wikipedia.org/wiki/Paul_V%C3%A1squez"
  },
  {
    id: 2,
    titulo: "Bombero Voluntario & Rescatista",
    descripcion: "Labores activas de rescate urbano y combate de emergencias comunitarias a nivel nacional.",
    tecnologias: ["Primeros Auxilios", "Rescate Urbano", "Voluntariado"],
    imagen: "https://media.chilevision.cl/2019/11/foto_0000000120191128233912_A_UNO_1127531_0de1c.jpg",
    enlace: "https://www.instagram.com/grandeflacoo"
  },
  {
    id: 3,
    titulo: "Técnico en Enfermería (TENS)",
    descripcion: "Titulación profesional de nivel superior enfocada en la atención de urgencias y salud pública.",
    tecnologias: ["Salud Pública", "Atención Primaria", "Urgencias"],
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCft6De8BQN8FCM8Znnw6P15IGDHeOzQ_vyd4GjFdYQ&s=10",
    enlace: "https://www.instagram.com/grandeflacoo"
  }
];

function App() {
  return (
    <div>
      <Navbar />
      <SobreMi {...datosPaul} />
      <Proyectos listaProyectos={trayectoriaProyectos} />
      <Noticias />
      <Contacto /> {/* 2. IMPORTANTE: Colocar aquí */}
    </div>
  );
}

export default App;