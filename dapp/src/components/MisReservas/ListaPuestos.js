/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import PuestoHeader from "./PuestoHeader";
import PuestoBody from "./PuestoBody";
import Table from 'react-bootstrap/Table';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData} = newContextComponents;

const ListaPuestos = (props) => {

let rows = [];
	return(
	<div style={{ display: (props.elementos[7] ? 'block' : 'none') }}>
		<div className="CabeceraPuestos">  
				<div className="CabeceraPuestosUno" >
					<p><b>Listado de entradas del Puesto {props.pulsada}</b></p>  
					<span className="CabeceraPuestosDos">
						<p>En la siguiente tabla se muestra un listado con todas los puestos  del Puesto {props.pulsada} en la fecha {props.fechaConsulta}</p>  
					</span>
				</div>
				
				<div>
					<p className="PuestosPuesto"><b>Puestos</b></p>  
				</div>
				
				<div className="CabeceraPuestosCuatro">
					<span>
						<p>Para regresar al panel pulse volver.</p>  
						<button className="BVolver" style={{ display: (props.elementos[0] === true ? 'block' : 'none') }} onClick={() => props.visualizacion(0,1,1,0,0,1,0,0)} >
							<b>Volver</b>
						</button>
					</span>
				</div>
		</div>
		
		{<Table className="TablaPuestos" striped bordered hover>
					<PuestoHeader 
					drizzle={props.drizzle}
 					drizzleState={props.drizzleState}/>
					{<tbody>		
						<ContractData
						drizzle={props.drizzle}
						drizzleState={props.drizzleState}
						contract={"ReslabEtsit"}
						method={"guardarEntradasPuesto"}
						methodArgs={[props.pulsada, props.fechaConsulta]}
						render={entradas =>
							<div id="PPanel" className="PHistorial">

								
								
							


						  {<PuestoBody drizzle={props.drizzle}
						  drizzleState={props.drizzleState} entradasLongitud={props.longitud} 
						fecha={props.fechaConsulta} nombrePuesto={props.pulsada} entradas={entradas}/>}

						  </div>
						}/>
					</tbody>}
					</Table>}
	</div>		
	);	
}

export default ListaPuestos;