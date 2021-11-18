/*const MisReservas = () => (
    <header className="AppReservas">
    <h2>
    Mis Reservas
    </h2>
    </header>
   );
   export default MisReservas;*/




   /* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import LaboratorioPuestos from "./LaboratorioPuestos";
import LaboratorioSecciones from "./LaboratorioSecciones";
import BuscaLab from "./BuscaLab";
import LaboratorioPuestosBody from "./LaboratorioPuestosBody";
import Accordion from 'react-bootstrap/Accordion';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData,ContractForm} = newContextComponents;

const MisReservas = (props) => {
	
  return(
	 <ContractData
 			drizzle={props.drizzle}
 			drizzleState={props.drizzleState}
 			contract={"ReslabEtsit"}
 			method={"reservasLength"}
			render={num =>  
				<div>
					<h1>hola</h1>
					<div className="TextoAppVisual" style={{ display: (props.elementos[7] ? 'block' : 'visible') }}>
						<p><b>Has accedido a mis reservas</b></p>  
						<p>Aquí puedes reservar los labs de la escuela </p> 
					</div>
		

			 
					<div id="FechaCon" className="FechaConsulta" style={{ display: (props.elementos[7] ? 'block' : 'visible') }}>
						<header className="TituloFecha"><b>Introducir fecha de consulta:</b></header>
						<input id="Fecha" className="FechaConsultaBorde" type="text" 
						onChange={() => props.obtenerFecha(document.getElementById("Fecha").value)} 
						placeholder="Dia/Mes/Año">
						</input>
					</div>
			
					<div className="PanelHistorial">  
						<ContractData
							drizzle={props.drizzle}
							drizzleState={props.drizzleState}
							contract={"ReslabEtsit"}
							method={"laboratoriosLength"}
							render={aulen =>  
									<div id="Panel" className="Historial">
											<BuscaLab drizzle={props.drizzle}
											drizzleState={props.drizzleState}
											longitud={aulen} elementos={props.elementos} 
											visualizacion={props.visualizacion}/>
									
											<LaboratorioSecciones drizzle={props.drizzle}
											drizzleState={props.drizzleState} fechaConsulta={props.fecha} 
											elementos={props.elementos} visualizacion={props.visualizacion}/>
									</div> 		
									}
						/>
					</div>  
				</div>
			}/>
	);
};

export default MisReservas;
//Failed to compile
/*./src/components/MisReservas/MisReservas.js
Module not found: Can't resolve 'react-bootstrap/Accordion' in 'C:\Users\Paula Huertas\reslabetsit\dapp\src\components\MisReservas'*/

//crear la appvisual!!!!!!!!!