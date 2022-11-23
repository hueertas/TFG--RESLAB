import {drizzleReactHooks} from '@drizzle/react-plugin';


const {useDrizzle,useDrizzleState} = drizzleReactHooks;

const TablaReservasLabRow =  ({indexlab,puestoIndice, fecha,NAsignatura}) =>  {
    const {useCacheCall,useCacheSend} = useDrizzle();

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

    //Hacer un adress
  
    let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre;
    const reservaTurno = useCacheSend("ReslabEtsit", "datosTurno",miaddress)?.nombre ; 
    const datos = useCacheCall("ReslabEtsit", "quienSoy");

    
    

    //RECORRER TODOS LOS ADREES ?? Y PEDIRINFO FUNCION ADREES REGISTRADO
   
    let rows = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoName) { return []; }

    const el = call("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    
    for (let i = 0; i < el; i++) {

        const reserva = call("ReslabEtsit","datosReservaPorLabPuestoTurno",puestoIndice,fecha,i)
        //const reservax = call("ReslabEtsit","datosReservaPorLabPuestoTurno",puestoIndice,fecha,i)?.dirAlumno;
        
       // const datosPersona = call("ReslabEtsit","datosAlumno",  );
        //COLAPSA pq reserva es string

            rows.push(
               <td key={"p2-" + puestoIndice + "-" + el}>

                        {typeof reservax}
                        {typeof reserva === "undefined" ?   <img className="reloj" src="/reloj.png"/> :  
                        reserva === "0x0000000000000000000000000000000000000000" ? "✓" : "OCUPADO POR "   }
                 
                        {typeof reserva === "undefined" ?   <img className="reloj" src="/reloj.png"/> :  
                        reserva === "0x0000000000000000000000000000000000000000" ? "" : "datosPersona?.email" }

                        {typeof reserva === "undefined" ?   <img className="reloj" src="/reloj.png"/> :  
                        reserva === "0x0000000000000000000000000000000000000000" ? "" : "  Nombre: " }
                        {typeof reserva === "undefined" ?   <img className="reloj" src="/reloj.png"/> :  
                        reserva === "0x0000000000000000000000000000000000000000" ? "" : "datosPersona?.nombre" }
                    

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

export default TablaReservasLabRow;


