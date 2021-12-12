import React from 'react';
import Header from './Header';
import MisReservas from "./MisReservas/MisReservas";



import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {newContextComponents} from "@drizzle/react-components";

/* Uso de los componentes ContractData y ContractForm de Drizzle para React */
const {ContractData, ContractForm} = newContextComponents;

export default class AppVisual extends React.Component {

constructor(props){
	super(props);
	this.state = {
		/* La variable de estado "elementos" se utiliza para ver en todo momento que componentes de la app se deben visualizar. 
		Un componente a '1' se debe visualizar. A '0' debe ocultarse.
		La posiciones del array se corresponden con:
		 boton de volver, entrada para introducir fecha, panel de lab,
		tabla de historial de registros de un lab, indice del lab pulsada, 
		texto del panel de control]*/
		//elementos: [1,1,0,1,1,0,0,1,0,1,1],     elementos: [0,1,1,0,0,1], 
        elementos: [0,1,1,0,0,1], 

        
		/* La variable de estado "alarma" se utiliza para almacenar el estado de las reservas.*/
		reserva : "No hay reserva",
		/* La variable de estado "fecha" se utiliza para almacenar la fecha de consulta introducida en un aula.
		Inicialmente no hay ninguna fecha seleccionada.*/
		fecha: "ninguna"
	};

	this.visualizacion = this.visualizacion.bind(this);
	this.obtenerFecha = this.obtenerFecha.bind(this);
}

/*Funcion para cambiar la fecha de consulta seleccionada.
Es utilizada por componentes hijos a los que se pasa como propiedad*/
obtenerFecha(x){
 this.setState({fecha: x});
}

/*Funcion para cambiar la variable de estado "elementos".
Es utilizada por componentes hijos a los que se pasa como propiedad*/
visualizacion(a,b,c,d,e,h) {
  

let volver;
let fecha;
let panel;
let tabla;
let LabPulsado;

let texto;

LabPulsado = e;

 
    if (a > 0) { 
	volver = true;
    } else {
	volver = false;
    }

    if (b > 0) { 
	fecha = true;
    } else {
	fecha = false;
    }

    if (c > 0) { 
	panel = true;
    } else {
	panel = false;
    }

    if (d > 0) {  
	tabla = true;
    } else { 
	tabla = false;
    }
	

	

	
	if (h > 0) {  
	texto = true;
    } else { 
	texto = false;
    }
	
let ver = [volver,fecha,panel,tabla,LabPulsado,texto];
this.setState({elementos: ver});

}

render(){ 
      return (
	  <ContractData
 				drizzle={this.props.drizzle}
 				drizzleState={this.props.drizzleState}
 				contract={"ReslabEtsit"}
 				method={"reservasLength"}
				render={   num_reservas => 
					<div className="App">	
					
						
						<MisReservas drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
						elementos={this.state.elementos} visualizacion={this.visualizacion} 
						obtenerFecha={this.obtenerFecha} fecha={this.state.fecha} numReservas={num_reservas} /> 
						
					</div> 
			  }/>
			 );
		}
}