import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const MisReservas = () =>
    <section className="AppMisNotas">
        <h3>Mis reservas</h3>
        <table>
            <MisReservasHead/>
            <MisReservasBody/>
        </table>
    </section>;


const MisReservasHead = () =>
    <thead>
    <tr>
        <th>Turno</th>
        <th>Laboratorio</th>
        <th>Puesto</th>
    </tr>
    </thead>;



const MisReservasBody = () => {
    const {useCacheCall} = useDrizzle();

    const turnosLength = useCacheCall("ReslabEtsit", "turnosLength") || 0;

    let rows = useCacheCall(['ReslabEtsit'], call => {
        let rows = [];
        for (let ei = 0; ei < turnosLength; ei++) {
            //const nota = call("Asignatura", "miNota", ei);
            const ev = call("ReslabEtsit", "turnosRegistrados", ei);
            rows.push(
                <tr key={"miReservaIndex-" + ei}>
                    <td>{ev?.nombre}</td>
                    {/*<td> dado un address te devuelva el uint de un puesto o lab reservado 
                        {nota?.tipo === "0" ? "N.P." : ""}
                        {nota?.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                        {nota?.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                     </td>*/}
                </tr>);
        }
        return rows;
    });

    return <tbody>{rows}</tbody>;
};




export default MisReservas;