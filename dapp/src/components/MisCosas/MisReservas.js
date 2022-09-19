import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";

const {useDrizzle,useDrizzleState} = drizzleReactHooks;



const MisReservas = () =>{

    const {useDrizzle} = drizzleReactHooks;

    
    const {useCacheCall} = useDrizzle();

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

 

   
   
    
    const reservaAlumno = useCacheCall("ReslabEtsit", "reservasAlumno",miaddress) || 0;

    

    return (


    <section className="AppMisNotas">
        <h3>Mis reservas</h3>
        
  


    <ul>
    <li><b>Puesto:</b> {reservaAlumno?.puestoIndice ?? "Desconocido"}</li>
    <li><b>Fecha:</b> {reservaAlumno?.fecha ?? "Desconocido"}</li>
    <li><b>Turno:</b> {reservaAlumno?.turnoIndex ?? "Desconocido"}</li>
    <li><b>Direccion Ethereum:</b> {miaddress}</li>
   
   

   

    </ul>
    </section>


    );


};

export default MisReservas;
