
import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestoRow = ({puestoIndex}) => {
    const {useCacheCall} = useDrizzle();

    const puestoAddr = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndex);


    //siempre que se haga una llamada una veces si y otra veces no
    /*let puestoName = useCacheCall(['ReslabEtsit'],
        call => puestoAddr && call("ReslabEtsit", "puestos", puestoAddr)?.nombre
    );*/
    // ver bien como llamar al puesto esee!!!!

    
    let cells = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoAddr) { return []; }

        let cells = [];
        const turnosLength = call("ReslabEtsit", "turnosLength") || 0;
        for (let tu = 0; tu < turnosLength; tu++) {
            const puesto = call("ReslabEtsit", "puestosReservados", puestoAddr, tu);
            cells.push(
                <td key={"p2-" + puestoIndex + "-" + tu}>
                    {puesto?.fecha === 9 ? "dir alumno" : "Vacio"}
                    {/*nota?.tipo === "1" ? (nota?.calificacion / 10).toFixed(1) : ""*/}
                    {/*nota?.tipo === "2" ? (nota?.calificacion / 10).toFixed(1) + "(M.H.)" : ""*/}
                </td>
            );
        }
        return cells;
    });

    return <tr key={"d" + puestoIndex}>
         
            <th>P<sub>{puestoIndex}</sub></th>
            {<td>{puestoAddr?.nombre}</td>}
            {cells}
        </tr>;
};

export default ReservarPuestoRow;


