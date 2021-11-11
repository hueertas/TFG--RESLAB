/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import PanelAlertasHeader from "./PanelAlertasHeader";
import PanelAlertas from "./PanelAlertas";
import Table from 'react-bootstrap/Table';

/* Uso del componente ContractData de Drizzle para React */
const {ContractData} = newContextComponents;

const AlertasContenido = (props) => {
		
	return(
	<div className="Ale" style={{ display: (props.elementos[8] ? 'block' : 'none') }}>
		<div className="CabeceraAlertas">  
			<div className="CabeceraAlertasUno" >
				<p><b>Listado de alertas existentes actualmente.</b></p>  
				<span className="CabeceraAlertasDos">
					<p>En la siguiente tabla se muestra un listado con todas las alertas existentes.</p>  
				</span>
			</div>
			
			<div>
				<p className="HistorialAula"><b>Alertas</b></p>  
			</div>
			
			<div className="CabeceraAlertasCuatro">
				<p>Para regresar al panel pulse volver.</p>  
				<button className="BVolverDos" style={{ display: (props.elementos[2] === true ? 'block' : 'none') }} onClick={() => props.visualizacion(1,1,0,1,1,0,0,1,0,1,1)} >
					<b>Volver</b>
				</button>
			</div>
		</div>
		
		<Table className="TablaAlertas" striped bordered hover >
					<PanelAlertasHeader drizzle={props.drizzle}
 					drizzleState={props.drizzleState}/>
					<tbody>		
						<ContractData
								drizzle={props.drizzle}
								drizzleState={props.drizzleState}
								contract={"ReslabEtsit"}
								method={"reservasLength"}
							    render={ numAlertas => 	
								  <PanelAlertas drizzle={props.drizzle} drizzleState={props.drizzleState} 
								  numAlertas={numAlertas}/> 
						 }/>
					</tbody>
		</Table>
	</div>		
	);	
}

export default AlertasContenido;
