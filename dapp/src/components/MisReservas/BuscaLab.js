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

export default class BuscaLab extends React.Component {

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
 				method={"laboratoriosRegistrados"}
				methodArgs={[i]}
 				render={data => 
					<div className="FilaSecciónLab"> 
							<Accordion allowZeroExpanded="true">
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
										<b>Laboratorio {data == null ? "" : data.nombreL}</b>  &nbsp; &nbsp;
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
									<button className="BPanel" type="button" onClick={() => this.props.visualizacion(1,0,0,1,i+1,0,0,0)}> 
											Ver Laboratorio
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
				<caption className="TituloPanel"><b>Listado de Laboratorios</b></caption>
				<table id="Tabla" className="TablaPanelLabs" >{rows}</table>
			</div>
	  );
}
}


/** 
 * allowZeroExpanded : boolean [optional, default: false]
Allow the only remaining expanded item to be collapsed.
* accordion-> Un acordeón es un conjunto de títulos interactivos apilados verticalmente, cada uno de los cuales contiene un título, 
un fragmento de contenido o una miniatura que representa una sección de contenido. Los títulos funcionan como controles que permiten a
 los usuarios revelar u ocultar sus secciones de contenido asociadas. Los acordeones se usan comúnmente para reducir la necesidad de desplazarse
  al presentar múltiples secciones de contenido en una sola página.
  * this.props.longitud -> longitud de personastotales???
  *La entidad &nbsp; (del inglés Non Breaking Space que significa espacio sin ruptura) sirve para representar en HTML un espacio en blanco y se utiliza normalmente en dos ca
   Cuando queremos que dos palabras no se separen al ajustar el texto al tamaño de la ventana
   
   *visualizacion -> appvisual
    this.props.visualizacion(1,0,0,1,i+1,0)}> 
*/ 
/**									<button className="BPanel" type="button" onClick={() => this.props.visualizacion(1,0,0,1,i+1,0)}> 
											Ver Laboratorio
										</button>	
										 */