/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import ListaPuestos from "./ListaPuestos";

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const PuestoSecciones = (props) => {

	if (props.elementos[6] > 0) { 
		return (


			<div className="XPanelHistorial">
				<ContractData
				drizzle={props.drizzle}
				drizzleState={props.drizzleState}
				contract={"ReslabEtsit"}
				method={"PuestoPulsado"}
				methodArgs={[props.elementos[6] - 1]}

				
				render={ pulsada => 
					<div  className="XHistorial">




						

				
				
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

									{<ListaPuestos drizzle={props.drizzle}
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

export default PuestoSecciones;
