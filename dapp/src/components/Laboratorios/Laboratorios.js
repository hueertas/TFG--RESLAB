import {newContextComponents} from "@drizzle/react-components";

import LaboratoriosHead from "./LaboratoriosHead";
import LaboratoriosBody from "./LaboratoriosBody";


const {ContractData} = newContextComponents;

const Laboratorios = (props) => (
    <section className="AppLaboratorios">
        <h2>Listado de laboratorios</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"laboratoriosLength"}
            render={ll => 
                    <table>
                        <LaboratoriosHead />
                        {ll}
                         
                        <LaboratoriosBody drizzle={props.drizzle}
                                        drizzleState={props.drizzleState}
                                        
                                        laboratoriosLength={ll}/>


                    </table>
                    
                
                }
            />
        

      
    </section>

);

export default Laboratorios;