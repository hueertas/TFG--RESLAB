import {useState} from "react";

import {drizzleReactHooks} from '@drizzle/react-plugin'
import {Link} from "react-router-dom";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

/*const SoloOwner = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const OwnerAddr = useCacheCall("ReslabEtsit", "owner");

    if (OwnerAddr !== drizzleState.accounts[0]) {
        return <p>NO SOY EL ADMIN</p>
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

const BuscaPuesto = () => {
    const {drizzle} = useDrizzle();

   
    

    // Conservar los valores metidos en el formulario
    let [FechaAddr, setFechaAddr] = useState("")
    let [indexEntrada, setEntradaIndex] = useState("")
    let [indexLaboratorio, setLaboratorioIndex] = useState("")

   /* let [tipo, setTipo] = useState("")
    let [calificacion, setCalificacion] = useState("")*/

    return (<article className="AppBuscaPuesto">
        
        
            <form>
             
                

             
                
                <button key="submit" className="pure-button" type="button"
                        onClick={ev => {
                            ev.preventDefault();
                            {/* const stackId = drizzle.contracts.ReslabEtsit.methods.BuscaPuestoLab.cacheSend(FechaAddr, indexEntrada, indexLaboratorio);*/}
                            {/*setLastStackID(stackId);*/}
                        }}>
                    Click para buscar el puesto
                </button>

               
            </form>
        
    </article>);
};

export default BuscaPuesto;


/* tipo como laboratorio ROWW*/ 



