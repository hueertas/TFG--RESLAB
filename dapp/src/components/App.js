

import { BrowserRouter, Routes, Route } from "react-router-dom";

import '../css/App.css';







import Header from './Header';

import {Alumnos, Alumno} from "./Alumnos/Alumnos";

import Profesores from "./Profesores/Profesores";
//import Laboratorios from "./Laboratorios/Laboratorios";

import {Laboratorios, Laboratorio} from "./Laboratorios/Laboratorios";
//import Puestos from "./Puestos/Puestos";
import {Asignaturas, Asignatura} from "./Asignaturas/Asignaturas";
//import {Puestos, Puesto} from "./Puestos/Puestos";
import Loading from './Loading';
import Layout from './Layout';
import Home from './Home';
import ReservarPuestos from "./ReservarPuestos/ReservarPuestos";
import MisCosas from "./MisCosas/MisCosas";
import Contacto from "./Contacto/Contacto";




function App() {
  return (
    
  
            <div className="App">
              <Loading>
                <BrowserRouter>
                    <Routes>
                 
                      <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/asignaturas/" element={<Asignaturas/>}/>
                            
                        <Route path="asignaturas/:index" element={<Asignatura/>}/>
                        
                        
                      
                        <Route path="/alumnos/" element={<Alumnos/>}/>
                        <Route path="alumnos/:addr" element={<Alumno/>}/>
                        <Route path="/profesores/" element={<Profesores/>}/>
                            
                        <Route path="/laboratorios/" element={<Laboratorios/>}/>
                        <Route path="laboratorios/:index" element={<Laboratorio/>}/>
                        
                        <Route path="reservarPuestos/" element={<ReservarPuestos/>}/>
                        <Route path="miscosas" element={<MisCosas/>}/>
                        <Route path="contacto" element={<Contacto/>}/>
                        
                            
                     
                      </Route>
                    </Routes>
                </BrowserRouter>
            </Loading>
        </div>
    );
}



export default App;









/*return (
  <div className="App">
  
      <Router>
          <Header drizzle={drizzle} drizzleState={drizzleState}/>
          <Navegacion/>
          <Route path="/" exact>
              <p>Bienvenido a la práctica de BCDA. </p>
          </Route>
          <Route path="/asignaturas/">
              <Evaluaciones drizzle={drizzle} drizzleState={drizzleState}/>
          
      </Router>
  </div>
);
}}
</DrizzleContext.Consumer>
);
}
---------------------------------3 version sin hooks


import {DrizzleContext} from "@drizzle/react-plugin";

import React from 'react';
import '../css/App.css';
import AppVisual from "./AppVisual";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";




import Header from './Header';

import Alumnos from "./Alumnos/Alumnos";
import MisReservas from "./MisReservas/MisReservas";
import Profesores from "./Profesores/Profesores";
import Laboratorios from "./Laboratorios/Laboratorios";
import {Asignaturas, Asignatura} from "./Asignaturas/Asignaturas";



import '../css/App.css';



const Navegacion = () => (
  <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/asignaturas/">Asignaturas</Link></li>
          <li><Link to="/alumnos/">Alumnos</Link></li>
          <li><Link to="/profesores/">Profesores</Link></li>
          <li><Link to="/MisReservas/">Mis Reservas</Link></li>
          <li><Link to="/laboratorios/">Listado de laboratorios</Link></li>
          </ul>
    </nav>
);


function App() {
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
          const {drizzle, drizzleState, initialized} = drizzleContext;
          if (!initialized) {
              return (<main><h1>⚙ Cargando dapp...</h1></main>);
 
          }            
        
          return(
            <div className="App">
              <Router>
              <Header drizzle={drizzle} drizzleState={drizzleState}/>
              <Navegacion/>
              <Route path="/" exact>
                  <p>Bienvenido a la práctica de BCDA. 
                    Esta Daap se basa en reservar laboratorios de la escuela ETSIT a  través de tecnología Blockchain 
                  </p>
              </Route>
              <Route path="/asignaturas/">
                   <Asignaturas drizzle={drizzle} drizzleState={drizzleState}/>
              
               <Route path="asignaturas/:addr" element={<Asignatura/>}/>
              
              </Route>
              <Route path="/alumnos/">
                   <Alumnos drizzle={drizzle} drizzleState={drizzleState}/>
              </Route>
              <Route path="/profesores/">
                   <Profesores drizzle={drizzle} drizzleState={drizzleState}/>
              </Route>
              <Route path="/laboratorios/">
                   <Laboratorios drizzle={drizzle} drizzleState={drizzleState}/>
              </Route>
              <Route path="/MisReservas/">
                   <AppVisual drizzle={drizzle} drizzleState={drizzleState}/>
              </Route>
            </Router>
              
              
        
      
   
            </div>
           );
      }}

    </DrizzleContext.Consumer>

  );
}



export default App;












*/












//cambio consumer / ganchosss 