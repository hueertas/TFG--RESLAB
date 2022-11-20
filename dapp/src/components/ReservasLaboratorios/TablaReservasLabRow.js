import {drizzleReactHooks} from '@drizzle/react-plugin';


const {useDrizzle,useDrizzleState} = drizzleReactHooks;

const TablaReservasLabRow =  ({indexlab,puestoIndice, fecha,NAsignatura}) =>  {
    const {useCacheCall,useCacheSend} = useDrizzle();

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", indexlab);
  
    let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre;
    const reservaTurno = useCacheSend("ReslabEtsit", "datosTurno",miaddress)?.nombre ; 

    

    //RECORRER TODOS LOS ADREES ?? Y PEDIRINFO FUNCION ADREES REGISTRADO
   
    let rows = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoName) { return []; }

    const el = call("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    
    for (let i = 0; i < el; i++) {

        const reserva = call("ReslabEtsit","datosReservaPorLabPuestoTurno",puestoIndice,fecha,i);
       
       

            rows.push(
               <td key={"p2-" + puestoIndice + "-" + el}>


                       
                        { reserva === miaddress ? "OCUPADO"  :"LIBRE" }
                   
 
                    
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


