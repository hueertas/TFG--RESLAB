import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const ReservarPorTurno = (turnoIndex,fecha, puestoIndice) => {
    const {useCacheCall} = useDrizzle();

    //aqui le quuierp pasar el indice del puesto dado un lab 
   // const puestoAddr = useCacheCall("ReslabEtsit", "puestosDelLaboratorio",turnoIndex) || 0;
    
    
   /* const el = useCacheCall("ReslabEtsit", "turnosLength") || 0;
    let thead = useCacheCall(['ReslabEtsit'], call => {
    let thead = [];
   

   
    //thead.push(<th key={"xxx"}>{el}{el}</th>);
    for (let i = 0; i < el; i++) {

        //pasarle a datosReserva un puesto u y un turno para ir viendo si esta ocupado o no 
        const reserva = call("ReslabEtsit", "datosReserva",puestoAddr, i);
        
        thead.push(
        
        <tr key={"chev-" + i }>
            <td>{reserva?.dirAlumno}</td>);

            </tr>);
    }

    return thead;
});
*/
return <td>hola</td>;
};

export default ReservarPorTurno;