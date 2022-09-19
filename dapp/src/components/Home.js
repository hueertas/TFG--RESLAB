
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';





const Home = () => (
    <header className="AppHeader">
        <h1>

         
            
            <img className="escaleras" src="/escaleras.jpg"/>
            <div className="consulta"><p className="texto">¡Consulta el día que mejor te venga! </p></div>
            
            <div className="Presentacion"><p className="texto">¡Bienvenid@ a la página de reservas de la Etsit!</p></div>
        

            <img className="niña" src="/niñaestudiando.png"/> 
            

            <Calendar className= "calendar"></Calendar>

            
            <img className="señalar" src="/señalar.png"/>


         


            
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