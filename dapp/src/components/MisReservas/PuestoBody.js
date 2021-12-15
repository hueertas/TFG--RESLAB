/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import PuestoRow from "./PuestoRow";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const PuestoBody = (props) => {

let rows = [];
	for (let i = 0; i < props.entradasLongitud ; i++) {
		rows.push(
			 	<ContractData 
				drizzle={props.drizzle}
				drizzleState={props.drizzleState}
				contract={"ReslabEtsit"}
				method={"dirPersonas"}
				methodArgs={[props.nombrePuesto, props.fecha, i]}
				render={dir => <ContractData 
								
							   drizzle={props.drizzle}
						       drizzleState={props.drizzleState}
						       contract={"ReslabEtsit"}
						       method={"obtenerDatosPersona"}
						       methodArgs={[dir]}
						       render={datosPersona => 
								  <PuestoRow  drizzle={props.drizzle}
								  drizzleState={props.drizzleState} 
								  entrada={props.entradas[i]} i={i} 
								  datosPersona={datosPersona}/>	
						}/>	
				}/>
	);}
  return (rows);
}

export default PuestoBody;