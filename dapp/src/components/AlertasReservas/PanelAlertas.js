/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import AlertasRow from "./AlertasRow";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const PanelAlertas = (props) => {

let rows = [];
	for (let i = 0; i < props.numAlertas ; i++) {
		rows.push(
			 	<ContractData 
				drizzle={props.drizzle}
				drizzleState={props.drizzleState}
				contract={"ReslabEtsit"}
				method={"reservasLength"}
				methodArgs={[i]}
				render={alerta => 
				
				
							<AlertasRow drizzle={props.drizzle}
								  drizzleState={props.drizzleState} 
								  alerta={alerta} i={i}/>
				
				}/>
	); }
  return (rows);
}

export default PanelAlertas;