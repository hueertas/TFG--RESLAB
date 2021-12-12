/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioRow = (props) => {
	
let rows = [];
	if(props.entrada.fecha === "NO"){
		rows.push( <tr key={"Persona-" + props.i}>
					<td></td>
					<td></td>
				
				</tr>
		);	
	}
	else{
		rows.push( <tr key={"Persona-" + props.i}>
					
					<td>&emsp;{props.entrada.puesto}</td>
				
					<td>{props.entrada.info}</td>
				</tr>
		);
	}
	return (rows);
};

export default LaboratorioRow;