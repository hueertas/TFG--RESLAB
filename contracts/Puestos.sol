 
 
pragma solidity ^0.7.4;
pragma experimental ABIEncoderV2;//enabled when passing an array of string(struct) as a function paramete


/*
*falta : 
*crear lo de las asignaturas con los laborarios y puestos a los que perteneces y las caracteristicas que desepeÃ±an cada puesto 
*crear las reservas , se va a reservar por semana un puesto de un determinado laboratorio 
*/


contract Puestos {
 
 address public owner;
 
    struct PinchaPuesto {
        
	address dir;
	
	string fecha;
	string entradaTurno;
	string salidaTurno;
	
        
	string estado;
	string asignatura;
	string info; //enumerado del sistema operativo!!!!!!!!!!!
    }
 


  // datos persona 
    struct DatosPersona {
	address dir;
    }
 


  // acceder a los datos de una persona dada su direccion
      mapping (address => DatosPersona) public datosPersona;





    /// Direcciones de las personas que han asistido a algun aula en alguna de las fechas y en algun turno.
mapping (string => mapping (string => mapping (uint => address[] ))) public personas;

/// Direcciones de las personas que han asistido a algun aula en alguna de las fechas.
mapping (string => mapping (string => address[] )) public personasTotales;

mapping (string => mapping (string  => uint[] )) public turnos;

    /// Mapping para evitar duplicados de turnos.
mapping (string => mapping (string  => mapping ( uint => bool ))) public turnos_existentes;
 
 // Dada la fecha actual, el nombre del aula, el turno y la dirección de la persona, devuelve
    // la entrada correspondiente a dicha persona.
    mapping (string => mapping (string => mapping (uint => mapping (address => PinchaPuesto)))) public datosPuesto;
 
 
 
 
 
 
 
 
  constructor()  {
        owner = msg.sender;
    } //?????????????????????????????????

 
 
 
 
 
 
 
 function guardarEntradasPuesto(string memory _nombre, string memory _fecha) public view returns(PinchaPuesto[] memory) {

	uint cont = 0;
	uint iterador = 0;

	uint num_turnos = turnos[_fecha][_nombre].length;
	
	for(uint j = 0; j < num_turnos ; j++){

	cont = cont + personas[_fecha][_nombre][turnos[_fecha][_nombre][j]].length;

	}	


	if(num_turnos > 0){

	PinchaPuesto[] memory entradasP = new PinchaPuesto[](cont);

	for(uint j = 0; j < num_turnos ; j++){

	address[] memory _dir = personas[_fecha][_nombre][turnos[_fecha][_nombre][j]];	

	for(uint i = iterador; i < _dir.length + iterador ; i++){

	entradasP[i].dir = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].dir;
	entradasP[i].fecha = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].fecha;
	entradasP[i].entradaTurno = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].entradaTurno;
	
	entradasP[i].salidaTurno = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].salidaTurno;
    entradasP[i].estado = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].estado;
	entradasP[i].asignatura = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].asignatura;
	entradasP[i].info = datosPuesto[_fecha][_nombre][turnos[_fecha][_nombre][j]][_dir[i]].info;
    
	
	}
	iterador = iterador + _dir.length;
	}
	iterador = 0;
	cont = 0;
	num_turnos = 0;
	return entradasP;

	}
	else{
	
	PinchaPuesto[] memory entradas_dosP = new PinchaPuesto[](1);
	
	entradas_dosP[0].dir = address(0x69068964Eb1d8F0cAF8Af7481bFDb2FA015E4C56);
  	entradas_dosP[0].fecha = "DISPONIBLES";
	entradas_dosP[0].entradaTurno = "EN LA FECHA";
	entradas_dosP[0].salidaTurno = "Y";
    entradas_dosP[0].estado = "AULA";
	entradas_dosP[0].asignatura = "ESTA";
	entradas_dosP[0].info = "linuxxx";

	return entradas_dosP;

	}	

    }



}