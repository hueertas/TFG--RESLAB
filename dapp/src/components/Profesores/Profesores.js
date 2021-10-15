/*const Profesores = () => (
    <header className="AppProfesores">
    <h2>
    Profesores
    </h2>
    </header>
   );
   export default Profesores;*/
// CUANDO PONGO LO DE ABAJO NO ME FUNCIONA !


 import {newContextComponents} from "@drizzle/react-components";

import ProfesoresHead from "./ProfesoresHead";
import ProfesoresBody from "./ProfesoresBody";

const {ContractData} = newContextComponents;

const Profesores = (props) => (
    <section className="AppProfesores">
        <h2>Profesores</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"profesRegistradosLength"}
            render={ml => (
                <table>
                    <ProfesoresHead />
                    
                    <ProfesoresBody drizzle={props.drizzle}
                                drizzleState={props.drizzleState}
                                profesRegistradosLength={ml}/>
    </table>
)}
/>
    </section>
);

export default Profesores;


