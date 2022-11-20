import {drizzleReactHooks} from "@drizzle/react-plugin";



const {useDrizzle,useDrizzleState} = drizzleReactHooks;




const MisReservasBody = ({indexlab,fecha}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

    //meter datos en el array para pintarlo??
    /* let puestos=[];
        puestos.push(<td>{reserva === miaddress }</td>)*/
   

    //de los puestos que hay recorrer solo los que son mios-dada una direcion de un alumno y un puesto poner true o false
    //con un bucle for recorrer todos los valores de los puestos y tienes un array con los que te van dando true y solo pintas los que has metido en ese array//maping dada una direcion (alumno) y 
    //dada un alumno y dado un array de puestos (ponerlo con el bucle for en frontend) si da true que te lo pinte 
    
    const puestoslength = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength",indexlab) || 0;


   // const laboratoriosLength = useCacheCall("ReslabEtsit", "laboratoriosLength") || 0;
   // const mireserva = useCacheCall("ReslabEtsit", "miReserva") || 0;
    //const datoslab = useCacheSend("ReslabEtsit", "datosLaboratorio",miaddress );
    //dado un lab y un puesto 


    let rows = useCacheCall(['ReslabEtsit'], call => {
        let rows = [];
        for (let puestoi = 0; puestoi < puestoslength; puestoi++) {
            const mireserva = call("ReslabEtsit", "Misreservas", miaddress,puestoi);
           
            rows.push(
                <tr key={ puestoi}>
                    <td>Laboratorio {indexlab}</td>
                    <td>{fecha}</td>
                    <td>{mireserva === true ? "hola" : "adios"}</td>

               
                </tr>);
        }
        return rows;
    });

//la idea es meter los que te de da d rows en un array y pintar ese array 

    return <tbody>{rows}</tbody>;
};
export default MisReservasBody;