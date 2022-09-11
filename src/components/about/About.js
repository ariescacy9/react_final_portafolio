import React from 'react'
import './About.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About() {
  return (
    <div className='about'>
      <div className='principal'>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
          <WhatsAppIcon 
            color="success" fontSize="large" sx={{ borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FacebookIcon
            color="primary" fontSize="large" sx={{ borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <LinkedInIcon
            sx={{ color: '#1003AE',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} fontSize="large"/>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <GitHubIcon
            sx={{ color: 'white',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} fontSize="large"/>
        </a>
      </div>
      <div>
        <h1>Formación</h1>
        <h2>Cursos Online</h2>
        <h3>Bootcamp</h3>
        <h3>actualmente aprendiendo mas sobre React</h3>
      </div>
      <div className='box'>
      <div className='box_1'>
        <p>Listas y Formularios en HTML</p>
        <p>Formularios en HTML con CSS</p>
        <p>Flexbox en detalle</p>
        <p>CSS units</p>
        <p>Responsive pages</p>
        <p>Git-Github</p>
        <p>Pseudo-clases</p>
        <p>Pseudo-elements</p>
        <p>CSS Grid</p>
        <p>Animacion CSS</p>
        <p>Preprocesadores CSS SASS</p>
      </div>
      <div className='box_2'>
        <p>var, let y const </p>
        <p>Pensamiento algorítmico</p>
        <p>Estructuras de Control: Condicionales y Ciclos</p>
        <p>Diagrama de Flujo</p>
        <p>Estructura de Datos</p>
        <p>POO - Clases</p>
        <p>Dom: Eventos</p>
        <p>Asincronía - Callbacks, Promesas</p>
        <p>Funciones Asíncronas</p>
        <p>JSON, Ajax - XLMHttpRequest</p>
        <p>Fetch sync - Axios</p>
        <p>Apis</p>
      </div>
      <div className='box_3'>
        <p>Ciclo de vida de un componente</p>
        <p>Callbacks </p>
        <p>Rutas con Wouter.</p>
        <p>Jsx.</p>
        <p>Funcionamiento de Hooks</p>
        <p>Uso de useContext</p>
        <p>Auth con react</p>
        <p>Vercel</p>
        <p>Consumiendo un CRUD</p>
        <p>Buenas practicas para crear servicios</p>
        <p>Formularios con React</p>
        <p>Material UI </p>
        <p>Consumiendo APIs (axios) get, post, patch, put y delete </p>
      </div>
      </div>
      
    </div>
  )
}

export default About