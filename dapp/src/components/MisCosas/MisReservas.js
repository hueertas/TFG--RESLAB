import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";



const MisReservas = () =>{

    const {useDrizzle} = drizzleReactHooks;

    
    const {useCacheCall} = useDrizzle();

    let {address} = useParams();


   
    const reservaAlumno = useCacheCall("ReslabEtsit", "reservasAlumno",address) || 0;

    return (


    <section className="AppMisNotas">
        <h3>Mis reservas</h3>
        
  


    <ul>
    <li><b>Puesto:</b> {reservaAlumno?.puestoIndice ?? "Desconocido"}</li>
    <li><b>Fecha:</b> {reservaAlumno?.fecha ?? "Desconocido"}</li>
    <li><b>Turno:</b> {reservaAlumno?.turnoIndex ?? "Desconocido"}</li>
   
   

   

    </ul>
    </section>


    );


};

export default MisReservas;
