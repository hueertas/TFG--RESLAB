/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioPuestosHeader = (props) => {

return(
		<thead>
			<tr>
			
				<th><b>Puesto</b></th>
				
				<th><b>Información</b></th>
			</tr>
 		</thead>
);
}

export default LaboratorioPuestosHeader;