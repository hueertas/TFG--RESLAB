/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioRow = (props) => {
	
let rows = [];
	if(props.PinchaLab.fecha == "NO"){
		rows.push( <tr key={"Persona-" + props.i}>
					<td></td>
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
					<td>{props.PinchaLab.fecha}</td>
					<td>{props.PinchaLab.entradaTurno}-{props.PinchaLab.salidaTurno}</td>
					<td>&emsp;{props.PinchaLab.puesto}</td>
					<td>{props.PinchaLab.estado}</td>
                    <td>{props.PinchaLab.asignatura}</td>
					<td>{props.PinchaLab.info}</td>
				</tr>
		);
	}
	return (rows);
};

export default LaboratorioRow;