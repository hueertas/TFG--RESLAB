/* Importar las librerías y los componentes necesarios */
import {newContextComponents} from "@drizzle/react-components";
import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

export default class BuscaPuesto extends React.Component {

constructor(props){
	super(props);
}

render(){

let rows = []	
	for (let i = 0; i < this.props.longitud ; i++) {
        rows.push(
 			<ContractData
 				drizzle={this.props.drizzle}
 				drizzleState={this.props.drizzleState}
 				contract={"ReslabEtsit"}
 				method={"puestosRegistrados"}
				methodArgs={[i]}
 				render={data => 
					<div className="FilaSecciónPuesto"> 
							<Accordion allowZeroExpanded="true">
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
										<b>Puesto {data == null ? "" : data.nombreP}</b>  &nbsp; &nbsp;
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
									<button className="BPanel" type="button" onClick={() => this.props.visualizacion(1,0,0,1,0,0,0,i+1)}> 
											Ver Puesto
										</button>	

									
									
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
					</div> 			
 				}
			/>);
	}
      return (
			<div style={{ display: (this.props.elementos[2] ? 'block' : 'none') }}>
				<caption className="TituloPanel"><b>Listado de Puestos</b></caption>
				<table id="Tabla" className="TablaPanelPuestos" >{rows}</table>
			</div>
	  );
}
}


//ver bien coo esta puesto ellaboratrio y ponerlo en el puesto para crear bien el boton !!!!!!!!!!!!

// Hcaer otro panel con lo de listado de puestos !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!