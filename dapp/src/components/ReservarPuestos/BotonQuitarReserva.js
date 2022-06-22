import {useState} from "react";

import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoloProfesoryOwner = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const profesorAddr = useCacheCall("ReslabEtsit", "profesorP");
    const ownerAddr = useCacheCall("ReslabEtsit", "owner");


    if (profesorAddr !== drizzleState.accounts[0] || ownerAddr !== drizzleState.accounts[0] ) {
        return <p>NO SOY EL PROFESOR NI EL ADMIN</p>
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

const BotonQuitarReservar = (puestoIndice,fecha,turnoIndex) => {
    const {drizzle} = useDrizzle();

    // Obtener el status de la ultima transaccion enviada:
    const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
    }));
    const [lastStackID, setLastStackID] = useState(undefined)
    const txObject = transactions[transactionStack[lastStackID] || 'undefined'];
    const status = txObject?.status;
    


    return (<article className="AppMisDatos">
       

       

                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                        
                            const stackId = drizzle.contracts.ReslabEtsit.methods.quitarReserva.cacheSend(puestoIndice,fecha,turnoIndex);
                            setLastStackID(stackId);
                            
                            
                        }}>
                   
                   <img className="noReserva" src="/noReserva.png"/>
                </button>

                <p> Último estado = {status} </p>

        
         
    </article>);


    
};


//meter un turno de parametro !!!!!!!!!!!!!!!!!!!!
export default BotonQuitarReservar;