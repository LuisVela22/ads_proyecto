// import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/haeder/Header';
// import Login from './pages/Login';
// import Home from './pages/Home';
import Footer from './components/Footer';
import Cuerpo from './components/cuerpo/Cuerpo';
import Form from './components/form/Form';
// import { Placeholder } from 'react-bootstrap';


interface Link {
  name: string;
  url: string;
}

function App() {
  const location = useLocation();

  const loginInputs = [
    { name: 'username', type: 'text', label: 'Username', placeholder: 'Nombre'},
    { name: 'password', type: 'text', label: 'Password', placeholder: 'Password'}
  ];

  const registerInputs = [
    { name: 'name', type: 'text', label: 'Nombre', placeholder: 'Nombre'},
    { name: 'lastName', type: 'text', label: 'Apellido Paterno', placeholder: 'Apellido'},
    { name: 'lastName1', type: 'text', label: 'Apellido Materno', placeholder: 'Apellido'},
    { name: 'username', type: 'text', label: 'Nombre de Usuario', placeholder: 'Username'},
    { name: 'password', type: 'password', label: 'Contraseña', placeholder: 'Password'},
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Ej: nombre@dominio.com'},
    { name: 'birthdate', type: 'date', label: 'Fecha de Nacimiento', placeholder: 'Birth'}
  ];


  const homeLinks = [
    // { name: 'Home', url: '/' },
    { name: 'Iniciar', url: '/login' },
    { name: 'Registrarse', url: '/register' },
  ];


  const loginLinks = [
    { name: 'Home', url: '/' },
    { name: 'Registrarse', url: '/register' },
  ];

  const registerLinks = [
    { name: 'Home', url: '/' },
    { name: 'Iniciar', url: '/login' },

  ];


  const routeLinks: { [key: string]: Link[] } = {
    '/login': loginLinks,
    '/register': registerLinks,
    '/home': homeLinks,
  }
  const links = routeLinks[location.pathname] || homeLinks;
  
  return (
    <>
      <Header links={links} />
      <div id='root-content'>
        <Routes>
          <Route path='/' element={<Cuerpo />} />
          <Route path='/login' element={<Form inputs={loginInputs} boxHeight="560px" header='Bienvenido Usuario'/>} />
          <Route path='register' element={<Form inputs={registerInputs} boxHeight="1200px" header='Bienvenido al registro'/>} />
        </Routes>
        {/* <Cuerpo   /> */}
      </div>

      <Footer />
    </>
  )
}

export default App
