/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const PanelAlertasHeader = (props) => {
	return(
		<thead>
 		<tr>
			<th><b>Fecha</b></th>
			<th><b>Aula</b></th>
 		</tr>
 		</thead>
	);
}

export default PanelAlertasHeader;