import {useState} from "react";

import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

/*const SoloProfesor = ({children}) => {
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
*/

/*
PENDIENTE DE INVESTIGAR:
Si se usa useCacheSend, se envian varias transacciones cada vez que se hace un submit del formulario.
El problema esta relacionado con actualizar el estado del stackIds dentro de la implementacion de ese hook.
 */

const BotonReservar = (turnoIndex, puestoIndice,fecha ) => {
    const {drizzle} = useDrizzle();

    // Obtener el status de la ultima transaccion enviada:
    const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
    }));
    const [lastStackID, setLastStackID] = useState(undefined)
    const txObject = transactions[transactionStack[lastStackID] || 'undefined'];
    

    // Conservar los valores metidos en el formulario
    /*let [alumnoAddr, setAlumnoAddr] = useState("")
    let [indexEval, setEvalIndex] = useState("")
    let [tipo, setTipo] = useState("")
    let [calificacion, setCalificacion] = useState("")*/

    return (<article className="AppMisDatos">
       
      
    

                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                             const stackId = drizzle.contracts.ReslabEtsit.methods.guardarReserva.cacheSend(puestoIndice, fecha, turnoIndex);
                            setLastStackID(stackId);
                        }}>
                   
                Puesto Libre  <img className="reservaLibre" src="/reservaLibre.png"/>
                </button>

              
         
    </article>);
};


//meter un turno de parametro !!!!!!!!!!!!!!!!!!!!
export default BotonReservar;