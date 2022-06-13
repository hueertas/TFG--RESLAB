import {useState} from "react";

import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoloProfesor = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const profesorAddr = useCacheCall("ReslabEtsit", "profesorP");

    if (profesorAddr !== drizzleState.accounts[0]) {
        return <p>NO SOY EL PROFESOR</p>
    }
    return <>
        {children}
    </>

};


/*
PENDIENTE DE INVESTIGAR:
Si se usa useCacheSend, se envian varias transacciones cada vez que se hace un submit del formulario.
El problema esta relacionado con actualizar el estado del stackIds dentro de la implementacion de ese hook.
 */

const Calificar = (indexlab, puestoaddr,fecha ) => {
    const {drizzle} = useDrizzle();

    // Obtener el status de la ultima transaccion enviada:
    const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
    }));
    const [lastStackID, setLastStackID] = useState(undefined)
    const txObject = transactions[transactionStack[lastStackID] || 'undefined'];
    const status = txObject?.status;

    // Conservar los valores metidos en el formulario
    /*let [alumnoAddr, setAlumnoAddr] = useState("")
    let [indexEval, setEvalIndex] = useState("")
    let [tipo, setTipo] = useState("")
    let [calificacion, setCalificacion] = useState("")*/

    return (<article className="AppMisDatos">
        <h3>Reservar puesto</h3>
        <SoloProfesor>
    

                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                             const stackId = drizzle.contracts.ReslabEtsit.methods.guardarReserva.cacheSend(indexlab, puestoaddr, fecha);
                            setLastStackID(stackId);
                        }}>
                    Reservar el puesto
                </button>

                <p> Último estado = {status} </p>
           

        </SoloProfesor>
    </article>);
};


//meter un turno de parametro !!!!!!!!!!!!!!!!!!!!
export default Calificar;