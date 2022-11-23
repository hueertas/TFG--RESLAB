import {drizzleReactHooks} from '@drizzle/react-plugin';
import moment from 'moment';
import BotonReservar from './BotonReservar';
import ReservarUnPuesto from "./ReservarUnPuesto";
import BotonQuitarReserva from "./BotonQuitarReserva";
import {useParams, Link} from "react-router-dom";

import ReservarPuestos from './ReservarPuestos';

const {useDrizzle,useDrizzleState} = drizzleReactHooks;

const ReservarPuestoRow =  ({indexlab,puestoIndice, fecha,NAsignatura}) =>  {
    const {useCacheCall,useCacheSend} = useDrizzle();

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", indexlab);
  
    let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre;
    const reservaTurno = useCacheSend("ReslabEtsit", "datosTurno",miaddress)?.nombre ; 

    

    
   
    let rows = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoName) { return []; }

    const el = call("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    
    for (let i = 0; i < el; i++) {

        const reserva = call("ReslabEtsit","datosReservaPorLabPuestoTurno",puestoIndice,fecha,i);
       
       

            rows.push(
               <td key={"p2-" + puestoIndice + "-" + el}>

                 
            
                  
                        
                    
                        {typeof reserva === "undefined" ?   <img className="reloj" src="/reloj.png"/> 
                            :     reserva === miaddress ? <BotonQuitarReserva  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i} NAsignatura={NAsignatura}/> 
                            :     reserva === "0x0000000000000000000000000000000000000000" ?  <BotonReservar  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i} NAsignatura={NAsignatura}/>
                            :    <BotonQuitarReserva  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i} NAsignatura={NAsignatura}/> 
                            }

                       
                  
                      
                       
                        
                       
                 
                    
                    
                </td>
               
               
                
            );
            
        }
        return rows;
    });

 
  
    return <>

        <tr key={"d" + puestoIndice}>
                
                {/*<th>P<sub>{puestoIndice}</sub></th>*/}
                <td>{puestoName}</td>
                {rows}
                
        </tr>
         
       
        { /*<p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoName}</b></p>*/}

       

         </>
        
};

export default ReservarPuestoRow;



/*                    {reserva === miaddress ? <BotonQuitarReserva  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i}/> : <BotonReservar  puestoIndice={puestoIndice} fecha={fecha} turnoIndex={i}/>}
                    adress {miaddress} {typeof miaddress}
                    reserva
                    {reserva ? reserva : "xxx"} {typeof reserva} {typeof reserva?.dirAlumno}
                    fecha {fecha}*/