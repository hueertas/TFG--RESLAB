/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioRow = (props) => {

	let rows = [];
	if(props.alerta == null){
		rows.push(<tr key={"Alerta-" + props.i}>
						<td>NO HAY ALERTAS</td>
						<td> </td>
				  </tr>);
	}else{
		rows.push(<tr key={"Alerta-" + props.i}>
						<td>{props.alerta.fecha}</td>
						<td>{props.alerta.aula}</td>
				  </tr>);
	}
	return (rows);
};

export default LaboratorioRow;


