
/*const Asignaturas = () => (
    <header className="AppAsignaturas">
    <h2>
    Asignaturas
    </h2>
    </header>
   );
   export default Asignaturas;*/


import {newContextComponents} from "@drizzle/react-components";

import AsignaturasHead from "./AsignaturasHead";
import AsignaturasBody from "./AsignaturasBody";


const {ContractData} = newContextComponents;

const Asignaturas = (props) => (
    <section className="AppAsignaturas">
        <h2>Asignaturas</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradasLength"}
            render={ml => <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratoriosLength"}
            
                render={el => 
                    <table>
                        <AsignaturasHead laboratoriosLength={el}/>
                         
                        <AsignaturasBody drizzle={props.drizzle}
                                        drizzleState={props.drizzleState}
                                        asignaturasLength={ml}
                                        laboratoriosLength={el}/>
                    </table>}
            />}
        />

      
    </section>

);

export default Asignaturas;

/* <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradasLength"}
            render={ml => <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratoriosLength"}
            
                render={el => 
                    <table>
                        <AsignaturasHead laboratoriosLength={el}/>
                        <tr> <td>  ml = { ml} </td>  <td> el = {el}</td></tr> 
                        <AsignaturasBody drizzle={props.drizzle}
                                        drizzleState={props.drizzleState}
                                        asignaturasLength={ml}
                                        laboratoriosLength={el}/>
                    </table>}
            />}
        />

      
    </section>

);

export default Asignaturas;*/