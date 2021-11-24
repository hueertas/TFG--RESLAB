
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
import Asignaturas from './Asignaturas/Asignaturas';
import Alumnos from "./Alumnos/Alumnos";
import MisReservas from "./MisReservas/MisReservas";
import Profesores from "./Profesores/Profesores";
import Laboratorios from "./Laboratorios/Laboratorios";



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
}*/
