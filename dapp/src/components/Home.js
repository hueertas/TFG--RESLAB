
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';





const Home = () => (
    <header className="AppHeader">
        <h1>

            <div class="contenedor">
            <img className= "bombilla"src="bombilla.png" />
            <img class="top" src="escritorio.png" />
            </div>
        
            
           {/* <img className="escaleras" src="/escaleras.jpg"/>*/}
           
           
           
           
            {/*<div className="consulta"><p className="texto">¡Consulta el día que mejor te venga! </p></div>*/}
            
            <div className="Presentacion"><p className="texto">¡Bienvenid@!</p></div>
        

            
            

           {/* <Calendar className= "calendar"></Calendar>*/}

            
            {/*<img className="señalar" src="/señalar.png"/>*/}


         


            
        </h1>
    </header>
   );
   export default Home;



/*function Home() {
    return (
        <p>Página Home de Reservas de puestos de laboratorio</p>
        
    );
}

export default Home;*/