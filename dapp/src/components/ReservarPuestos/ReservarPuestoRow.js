import {drizzleReactHooks} from '@drizzle/react-plugin';
import moment from 'moment';

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestoRow = ({indexlab,puestoIndice, fecha}) => {
    const {useCacheCall} = useDrizzle();

    const puestoAddr = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength");

        //acceder a los datos de un puesto dado su lab 
        let puestoName = useCacheCall(['ReslabEtsit'],
        call => puestoAddr && call("ReslabEtsit", "puestosDelLaboratorioLength", puestoAddr)?.nombre
    );
    // ver bien como llamar al puesto esee!!!!

    let cells = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoAddr) { return []; }

        let cells = [];
        const turnosLength = call("ReslabEtsit", "turnosLength") || 0;
        for (let tu = 0; tu < turnosLength; tu++) {
            const puesto = call("ReslabEtsit", "datosReserva", puestoName, tu);
            cells.push(
                <td key={"p2-" + indexlab + "-" + tu}>
                    {puesto?.nombre === "puesto1" ? "dir alumno" : "Vacio"}
                    {/*nota?.tipo === "1" ? (nota?.calificacion / 10).toFixed(1) : ""*/}
                    {/*nota?.tipo === "2" ? (nota?.calificacion / 10).toFixed(1) + "(M.H.)" : ""*/}
                </td>
            );
        }
        return cells;
    });

    return <>

        <tr key={"d" + indexlab}>
                
                <th>P<sub>{indexlab}</sub></th>
                <td>{puestoAddr?.nombre}</td>
                {cells}
        </tr>;
         
        {/* <p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoAddr}</b></p>*/}

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