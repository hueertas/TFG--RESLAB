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

const BotonReservar = (puestoIndice,fecha,turnoIndex) => {
    const {drizzle} = useDrizzle();

    // Obtener el status de la ultima transaccion enviada:
    const { transactionStack, transactions } = useDrizzleState(drizzleState => ({
        transactionStack: drizzleState.transactionStack,
        transactions: drizzleState.transactions
    }));
    const [lastStackID, setLastStackID] = useState(undefined)
    const txObject = transactions[transactionStack[lastStackID] || 'undefined'];
    const status = txObject ?  txObject.status : "Desconocido";
    
     // Conservar los valores metidos en el formulario!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     

  
     //var intPuestoIndice = parseInt(puestoIndice, 10);
     

    return (<article className="AppMisDatos">
       
      
       

                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                           
                           // const stackId = drizzle.contracts.ReslabEtsit.methods.guardarReserva.cacheSend(2,1655416800,4);
                            const stackId = drizzle.contracts.ReslabEtsit.methods.guardarReserva.cacheSend(+puestoIndice,fecha,turnoIndex);
                            setLastStackID(stackId);
                            console.log(puestoIndice,fecha,turnoIndex,"eaaaaaaaa")
                            console.log(typeof puestoIndice,typeof fecha,typeof turnoIndex,"reseervando")
                            
                        }}>
                   
                  <img className="reservaLibre" src="/reservaLibre.png"/>
                </button>

                <p> Último estado = {status} </p>
                {typeof  +puestoIndice}
              
               

              
         
    </article>);


    
};


//meter un turno de parametro !!!!!!!!!!!!!!!!!!!!
export default BotonReservar;