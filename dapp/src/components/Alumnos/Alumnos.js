/*const Alumnos = () => (
    <header className="AppAlumnos">
    <h2>
    Alumnos
    </h2>
    </header>
   );
   export default Alumnos;*/

import {newContextComponents} from "@drizzle/react-components";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";

const {ContractData} = newContextComponents;

const Alumnos = (props) => (
    <section className="AppAlumnos">
        <h2>Alumnos</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"ReslabEtsit"}
            method={"matriculasLength"}
            render={ml => (
                <table>
                    <AlumnosHead/>
                    <AlumnosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 matriculasLength={ml}/>
                </table>
            )}
        />
    </section>
);

export default Alumnos;

//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js