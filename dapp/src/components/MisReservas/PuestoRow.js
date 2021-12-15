/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const PuestoRow = (props) => {
	
let rows = [];
	if(props.entrada.fecha === "NO"){
		rows.push( <tr key={"Persona-" + props.i}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
                   
				</tr>
		);	
	}
	else{
		rows.push( <tr key={"Persona-" + props.i}>
					<td>{props.datosPersona}</td>
					<td>{props.entrada.fecha}</td>
					<td>{props.entrada.ent}-{props.entrada.sal}</td>
					<td>&emsp;{props.entrada.estado}</td>
					<td>{props.entrada.asignatura}</td>
					<td>{props.entrada.info}</td>
				</tr>
		);
	}
	return (rows);
};

export default PuestoRow;
//mirar si se llama entrada ????? o se va a rallar