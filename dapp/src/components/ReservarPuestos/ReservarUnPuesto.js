import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const ReservarPorTurno = (puestoIndice,fecha,turnoIndex ) => {
    const {useCacheCall} = useDrizzle();

    

//const reserva = useCacheCall("ReslabEtsit", "datosReservaPorLabPuestoFechaTurno",puestoIndice, fecha,turnoIndex);


return <td>hola </td>;
};

export default ReservarPorTurno;