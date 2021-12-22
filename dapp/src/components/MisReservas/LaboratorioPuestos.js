/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import LaboratorioPuestosHeader from "./LaboratorioPuestosHeader";
import LaboratorioPuestosBody from "./LaboratorioPuestosBody";
import Table from 'react-bootstrap/Table';
import PuestoSecciones from "./PuestoSecciones";
import BuscaPuesto from "./BuscaPuesto";

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData} = newContextComponents;

const LaboratorioPuestos = (props) => {

let rows = [];
	return(
	<div style={{ display: (props.elementos[3] ? 'block' : 'none') }}>
		<div className="CabeceraLaboratorios">  
				<div className="CabeceraLaboratoriosUno" >
					<p><b>Listado de entradas del Laboratorio {props.pulsada}</b></p>  
					<span className="CabeceraLaboratoriosDos">
						<p>En la siguiente tabla se muestra un listado con todas los puestos  del Laboratorio {props.pulsada} en la fecha {props.fechaConsulta}</p>  
					</span>
				</div>
				
				<div>
					<p className="PuestosLaboratorio"><b>Puestos</b></p>  
				</div>
				
				<div className="CabeceraLaboratoriosCuatro">
					<span>
						<p>Para regresar al panel pulse volver.</p>  
						<button className="BVolver" style={{ display: (props.elementos[0] === true ? 'block' : 'none') }} onClick={() => props.visualizacion(0,1,1,0,0,1,0,0)} >
							<b>Volver</b>
						</button>
					</span>
				</div>
		</div>
		
		{<Table className="TablaPuestos" striped bordered hover>
					<LaboratorioPuestosHeader 
					drizzle={props.drizzle}
 					drizzleState={props.drizzleState}/>



					{<tbody>	



						<ContractData
						drizzle={props.drizzle}
						drizzleState={props.drizzleState}
						contract={"ReslabEtsit"}
						method={"guardarEntradasLaboratorio"}
						methodArgs={[props.pulsada, props.fechaConsulta]}
						render={entradas =>
							

								
						
							


						  <LaboratorioPuestosBody drizzle={props.drizzle}
						  drizzleState={props.drizzleState} entradasLongitud={props.longitud} 
						fecha={props.fechaConsulta} nombreLaboratorio={props.pulsada} entradas={entradas}/>

						

						  
						}/>
					</tbody>}


							


					</Table>}



		<div className="PanelHistorialP">  
				<ContractData
					drizzle={props.drizzle}
					drizzleState={props.drizzleState}
					contract={"ReslabEtsit"}
					method={"puestosLength"}
					render={aulen =>  
							<div id="PanelP" className="HistorialP">

								

								<BuscaPuesto drizzle={props.drizzle} drizzleState={props.drizzleState} 
								longitud={aulen} elementos={props.elementos} visualizacion={props.visualizacion}/>
									
									
									

								
								<PuestoSecciones drizzle={props.drizzle}
								drizzleState={props.drizzleState} fechaConsulta={props.fecha} 
								elementos={props.elementos} visualizacion={props.visualizacion}/> 



								{"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"}
							</div> 	

								
							}
				/>
		</div>  


	</div>		
	);	
}

export default LaboratorioPuestos;






