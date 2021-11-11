/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import LaboratorioPuestos from "./LaboratorioPuestos";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioSecciones = (props) => {

	if (props.elementos[7] > 0) { 
		return (
				<ContractData
				drizzle={props.drizzle}
				drizzleState={props.drizzleState}
				contract={"ReslabEtsit"}
				method={"LabPulsado"}
				methodArgs={[props.elementos[7] - 1]}
				render={ pulsada => <ContractData
									drizzle={props.drizzle}
									drizzleState={props.drizzleState}
									contract={"ReslabEtsit"}
									method={"personasLength"}
									methodArgs={[pulsada, props.fechaConsulta]}
									render={ longitud => 
									<LaboratorioPuestos drizzle={props.drizzle}
									drizzleState={props.drizzleState} fechaConsulta={props.fechaConsulta} 
									elementos={props.elementos} pulsada={pulsada} longitud={longitud} visualizacion={props.visualizacion}/>
									}/>
				}/>
		);
	}
	else{
		return (<div></div>);
	}
};

export default LaboratorioSecciones;




		