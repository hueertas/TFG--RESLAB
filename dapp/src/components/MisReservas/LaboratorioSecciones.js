/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import LaboratorioPuestos from "./LaboratorioPuestos";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioSecciones = (props) => {

	if (props.elementos[4] > 0) { 
		return (


			<div className="XPanelHistorial">
				<ContractData
				drizzle={props.drizzle}
				drizzleState={props.drizzleState}
				contract={"ReslabEtsit"}
				method={"LabPulsado"}
				methodArgs={[props.elementos[4] - 1]}

				
				render={ pulsada => 
					<div  className="XHistorial">


{"holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}

						

				
				
									<ContractData
									drizzle={props.drizzle}
									drizzleState={props.drizzleState}
									contract={"ReslabEtsit"}
									method={"personasLength"}
									methodArgs={[pulsada, props.fechaConsulta]}
									render={ longitud => 

													<div  className="XHistorial">


														{"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"}
														{props.visualizacion}			

									{<LaboratorioPuestos drizzle={props.drizzle}
									drizzleState={props.drizzleState} fechaConsulta={props.fechaConsulta} 
									elementos={props.elementos} pulsada={pulsada} longitud={longitud} visualizacion={props.visualizacion}/>}

</div>
						
									
									}/>


							</div> 
						}
						/>
							</div> 


		);
	}

	else{
		return (<div></div>);
	}
	
};

export default LaboratorioSecciones;




		