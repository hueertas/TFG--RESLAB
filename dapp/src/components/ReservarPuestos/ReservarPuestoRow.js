
import {drizzleReactHooks} from '@drizzle/react-plugin';
import moment from 'moment';

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestoRow = ({puestoIndice, fecha}) => {
    const {useCacheCall} = useDrizzle();



    return <>
         
         <p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoIndice}</b></p>

         </>
        
};

export default ReservarPuestoRow;


