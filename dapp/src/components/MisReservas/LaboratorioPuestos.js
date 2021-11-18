/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import LaboratorioPuestosHeader from "./LaboratorioPuestosHeader";
import LaboratorioPuestosBody from "./LaboratorioPuestosBody";
import Table from 'react-bootstrap/Table';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioPuestos = (props) => {

let rows = [];
	return(
	<div style={{ display: (props.elementos[5] ? 'block' : 'visible') }}>
		<div className="CabeceraLaboratorios">  
				<div className="CabeceraLaboratoriosUno" >
					<p><b>Listado de entradas del Laboratorio {props.pulsada}</b></p>  
					<span className="CabeceraLaboratoriosDos">
						<p>En la siguiente tabla se muestra un listado con todas las entradas del Laboratorio {props.pulsada} en la fecha {props.fechaConsulta}</p>  
					</span>
				</div>
				
				<div>
					<p className="PuestosLaboratorio"><b>Entradas</b></p>  
				</div>
				
				<div className="CabeceraLaboratoriosCuatro">
					<span>
						<p>Para regresar al panel pulse volver.</p>  
						<button className="BVolver" style={{ display: (props.elementos[2] === true ? 'block' : 'none') }} onClick={() => props.visualizacion(1,1,0,1,1,0,0,1,0,1,1)} >
							<b>Volver</b>
						</button>
					</span>
				</div>
		</div>
		
		<Table className="TablaPuestos" striped bordered hover>
					<LaboratorioPuestosHeader 
					drizzle={props.drizzle}
 					drizzleState={props.drizzleState}/>
					<tbody>		
						<ContractData
						drizzle={props.drizzle}
						drizzleState={props.drizzleState}
						contract={"ReslabEtsit"}
						method={"guardarReserva"}
						methodArgs={[props.pulsada, props.fechaConsulta]}
						render={entradas =>
						  <LaboratorioPuestosBody drizzle={props.drizzle}
						  drizzleState={props.drizzleState} entradasLongitud={props.longitud} 
						  fecha={props.fechaConsulta} nombreLaboratorio={props.pulsada} entradas={entradas}/>
						}/>
					</tbody>
		</Table>
	</div>		
	);	
}

export default LaboratorioPuestos;

