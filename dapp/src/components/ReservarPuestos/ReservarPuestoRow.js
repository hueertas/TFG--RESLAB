import {drizzleReactHooks} from '@drizzle/react-plugin';
import moment from 'moment';
import ReservarPorTurno from "./ReservarPorTurno";

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestoRow = ({indexlab,puestoIndice, fecha}) => {
    const {useCacheCall} = useDrizzle();

    //const puestoAddr = useCacheCall("ReslabEtsit", "puestosDelLaboratorio",indexlab);

    //const puestoIndex = useCacheCall("ReslabEtsit", "puestosRegistrados",indexlab) || 0;

       //acceder a los datos de un puesto dado su lab 
        let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre
    
    // ver bien como llamar al puesto esee!!!!

    const el = useCacheCall("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    for (let i = 0; i < el; i++) {

        
            rows.push(<ReservarPorTurno key={"cb-"+i} turnoIndex={i} fecha={fecha} puestoIndice={puestoIndice} />);
    }


  
    return <>

        <tr key={"d" + puestoIndice}>
                
                <th>P<sub>{puestoIndice}</sub></th>
                <td>{puestoName}</td>
                {rows}
                
        </tr>;
         
        { <p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoName}</b></p>}

         </>
        
};

export default ReservarPuestoRow;




//no funciona para el primero!!!



/*import {drizzleReactHooks} from '@drizzle/react-plugin';
import moment from 'moment';

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestoRow = ({puestoIndice, fecha}) => {
    const {useCacheCall} = useDrizzle();

    const puestoAddr = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength");

        //acceder a los datos de un puesto dado su lab 
        let puestoName = useCacheCall(['ReslabEtsit'],
        call => puestoAddr && call("ReslabEtsit", "puestosDelLaboratorioLength", puestoAddr)?.nombre
    );
    // ver bien como llamar al puesto esee!!!!

    

    return <>
         
         <p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoIndice}</b></p>

         </>
        
};

export default ReservarPuestoRow;*/