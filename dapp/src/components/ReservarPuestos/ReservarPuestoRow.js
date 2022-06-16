import {drizzleReactHooks} from '@drizzle/react-plugin';
import moment from 'moment';
import BotonReservar from './BotonReservar';
import ReservarUnPuesto from "./ReservarUnPuesto";

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestoRow = ({indexlab,puestoIndice, fecha}) => {
    const {useCacheCall} = useDrizzle();

    //const puestoAddr = useCacheCall("ReslabEtsit", "puestosDelLaboratorio",indexlab);

    //const puestoIndex = useCacheCall("ReslabEtsit", "puestosRegistrados",indexlab) || 0;

       //acceder al nombre  de todos los puesto que hay registrados dando el indice del puesto
    let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre
    
   
    let rows = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoName) { return []; }

    const el = call("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    for (let i = 0; i < el; i++) {

        const reserva = call("ReslabEtsit", "datosReservaPorLabPuestoFechaTurno",puestoIndice, fecha,i);
            //rows.push(<ReservarUnPuesto key={"cb-"+i} turnoIndex={i} fecha={fecha} puestoIndice={puestoIndice} />);
            //crea un reserva que le pases la direcion alumno, con su puesto , su turno y su fecha y si coincide esa direccion con algun alumno, eso tiene que ser un address
            rows.push(
                <td key={"p2-" + puestoIndice + "-" + el}>
                    {reserva?.dirAlumno === "0" ? <img className="noReserva" src="/noReserva.png"/> : <BotonReservar fecha={fecha} puestoIndice={puestoIndice} turnoIndex={i}/>}
                    
                    
                </td>
            );
        }
        return rows;
    });


  
    return <>

        <tr key={"d" + puestoIndice}>
                
                <th>P<sub>{puestoIndice}</sub></th>
                <td>{puestoName}</td>
                {rows}
                
        </tr>
         
        { /*<p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoName}</b></p>*/}

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