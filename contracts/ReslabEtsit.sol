pragma solidity ^0.7.4;
pragma experimental ABIEncoderV2;//enabled when passing an array of string(struct) as a function paramete


/*
*falta : 
*crear lo de las asignaturas con los laborarios y puestos a los que perteneces y las caracteristicas que desepeÃ±an cada puesto 
*crear las reservas , se va a reservar por semana un puesto de un determinado laboratorio 
*/


contract ReslabEtsit {
    
   
    /**
     * address del profesor que ha desplegado el contrato.
     * El contrato lo despliega el profesor.
     */
    address public owner;
    address public profesorP;
     
    
    /// Nombre de la asignatura
    //string public nombre;
    
   
    
    /**
     * Datos de un puesto
     */
     
     
     
    enum TipoSO {windows, macos , linux}
    
    enum TipoConexionesRed { cable, inalambrico} // array de strings 
    
   
   // enum Horario { turnom ,turnot}//poenr horas y turnos en enum???? array de horas 
    
    struct Puesto {
        string nombre;
        //caracteristicas
        TipoConexionesRed tipoConexionesRed;
        TipoSO tipoSO;
       // Laboratorio laboratorio;
       
    }
    
    
    
    
    
    /// puestos de la asignatura.
   // Puesto[] public puestos;
    
    //labs de la asignatura
    
   // Laboratorio[] public laboratorios;
   
   
    /**
    * datos de todos los labs con sus parametro en la pantalla de inicio
    * DUDA -> QUIERO PONERARRAY DE STRING DE ASIGNATURA!!
    **/
     struct DatosLaboratorio {
        uint labId;
        string nombreL;
        //string[] asignaturaL;
       
    }
    
    /**
    * datos del alumno que se registra 
    **/
   // datos persona 
    struct DatosPersona {
	address dir;
    }

    /// Datos de un alumno.
    struct DatosAlumno {
        string nombre;
        string email;
        
    }
    
    /**
     * Datos profe que se registra 
     * */
     
    
    struct DatosProfesor{
        string nombreP;
        string emailP;
        string asignaturaP;
        string departamentoP;
    }
    
    
    
    /**
     * Datos de lasegunda pantalla donde te aparcene el estado de reserva, puestos etc del lab)
     * */
    struct PinchaLab {
        
	address dir;
	
	string fecha;
	string entradaTurno;
	string salidaTurno;
	string puesto;
        
	string estado;
	string asignatura;
	string info; //enumerado del sistema operativo!!!!!!!!!!!
    }
    
   /* struct DatosAsignatura{
        string nombre;
        Laboratorio[] laboratorio;
        Puesto[] puesto;
        //credito semanal
        //Matriculas matriculados;
    }
    */
    
    
    
    /**
     * Datos de los datos de las ultimas reservas registradas // FALTAN PUESTO
     * */
     
     struct UltimaReserva{
         string lab;
         uint turno;
         string fecha;
         
         
     }
     
     /**
      * Datos de mireserva //FALTA PUESTO
      * */
      
      struct ReservaAlumno{
          string lab;
          string fecha;
          uint estado;
          //string puesto;

      }
      
      // acceder a los datos de una persona dada su direccion
      mapping (address => DatosPersona) public datosPersona;
    
    /// Acceder a los datos de un alumno dada su direccion.
    mapping (address => DatosAlumno) public datosAlumno;
    
      /// Acceder a los datos de un profe dada su direccion.
    mapping (address => DatosProfesor) public datosProfesor;
    
    //mapping (address => DatosAsignatura)  datosAsignatura;
    
    
    mapping (address => DatosLaboratorio)  datosLaboratorio;

    //mapping(uint => Laboratorio) public labPuestos; //acceder a los puestos del lab dada la info del lab
  

    
    // Array con las direcciones de los alumnos matriculados.
    address[] public matriculas;
    
    
    //array con las direcciones de los profes registrados 
    address[] public profesRegistrados;
    
        // Array con las direcciones de las personas registradas.
    address[] public registradosP;

    
    //Array credito semanal 
    address [] public creditosemanal;
    
    //address[] public asignaturasRegistradas;
    
    
    // labs en la escuela
    DatosLaboratorio[] public laboratoriosRegistrados;
    //reservas de la escuela
    
    UltimaReserva[] public reservasLab;
        
   

     //reserva para un usuario 
  
    mapping (address => ReservaAlumno) public reservasAlumno;
    
    
    //turno de la escuela

    mapping (string => mapping (string  => uint[] )) public turnos;
    
        /// Mapping para evitar duplicados de turnos.
    mapping (string => mapping (string  => mapping ( uint => bool ))) public turnos_existentes;
    
    /// Direcciones de las personas que han asistido a algun aula en alguna de las fechas y en algun turno.
    mapping (string => mapping (string => mapping (uint => address[] ))) public personas;
   
    /// Direcciones de las personas que han asistido a algun aula en alguna de las fechas.
    mapping (string => mapping (string => address[] )) public personasTotales;
    
    // Dada la fecha actual, el nombre del aula, el turno y la dirección de la persona, devuelve
    // la entrada correspondiente a dicha persona.
    mapping (string => mapping (string => mapping (uint => mapping (address => PinchaLab)))) public datosLab;

    
    /// Ultimas entradas de cada persona.
    mapping (address => UltimaReserva[] ) public ultimosRegistros;

  // mapping(uint => bool) public registeredLaboratorios; //saberr si un lab esta registrado
   // mapping(uint => Laboratorio) public labPuestos; //acceder a los puestos del lab dada la info del lab 
    // labId -> mes ->semana-> hora -> waitingList[]
 /*   mapping(uint => mapping(uint => mapping(uint => mapping(uint => address[])))) public reservations;
    // labId -> mes ->semana-> hora -> waitingListLength
    mapping(uint => mapping(uint => mapping(uint => mapping(uint => uint)))) public reservationLengths;
    // address -> _labID -> mes ->semana-> hora -> bool*/
 /*   mapping(address => mapping(uint => mapping(uint => mapping(uint => mapping(uint => bool))))) public isLabReserved;
    event Reservation(
        address indexed _from,
        uint _labID,
        uint _mes,
        uint _semana,
        uint _hora
    );
    event Cancellation(
        address indexed _from,
        uint _labID,
        uint _mes,
        uint _semana,
        uint _hora
    );
    
    
  */
    
    
    
    
    /*
     * Constructor.
     * 
     * @param _nombre Nombre de la asignatura.
     * //habria qu eponer nombre puesto /lab /alumno etc 
    
     */
    /*constructor(string memory _nombre) {
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre de la asignatura no puede ser vacio");
       
       
      
        owner = msg.sender;
        nombre = _nombre;
        
        
     
        
    }*/
    
    constructor()  {
        owner = msg.sender;
    } //?????????????????????????????????

    
    
    
    
    
    /**
     * El numero depuestos creadas.
     *
     * @return El numero de puestos creadas.
     */
   /* function puestosLength() public view returns(uint) {
        return puestos.length;
    }
    
    
    
     /**
     * El numero de labs  creadas.
     *
     * @return El numero de labs creadas.
     */
    function laboratoriosLength() public view returns(uint) {
        return laboratoriosRegistrados.length;
    }
    
    
    
        /**
     * El numero de reservas existentes.
     *
     * @return El numero de alertas existentes.
     */
    function reservasLength() public view returns(uint) {
        return reservasLab.length;

    }

	  /**
     * El numero de ultimosRegistros existentes.
     *
     * @return El numero de ultimosRegistros existentes.
     */
    function ultimosRegistrosLength(address dir) public view returns(uint) {
	return ultimosRegistros[dir].length;
    }
        
    /**
     * Permite obtener la longitud del array de personasTotales.
     * 
     */
    function personasLength(string memory _nombre, string memory _fecha) public view returns(uint) {

	uint longitud = personasTotales[_fecha][_nombre].length;

	if(longitud == 0){
	  longitud = 1;
	}

  	return longitud;

    }



    /**
     * Permite obtener un address del array de personas.
     * 
     */
    function dirPersonas(string memory _nombre, string memory _fecha, uint _indice) public view returns(address) {

	if(personasTotales[_fecha][_nombre].length > 0){
	address _dirUno = personasTotales[_fecha][_nombre][_indice];
	return _dirUno;

	}else{
	return msg.sender;
	}			
	
    }
    
        /**
     * Obtiene los datos de una persona registrada.
     * 
     * @param persona La direccion de una persona.
     * 
     * @return los datos de una persona registrada.
     */
    function obtenerDatosPersona(address persona)  public view returns(address) {
	
	
	if(!estaRegistrado(persona)){
	return address(0);
	} else{	
	return datosPersona[persona].dir;
	}
	
        
        
    } 
    


        /**
     * La alerta (si la hay) de un alumno.
     *
     */
    function reservas(address _dir) public view returns (ReservaAlumno memory) {

	return reservasAlumno[_dir]; 
    }



    /**
     * Eliminar la alerta de un usuario
     *
     */
    function reiniciarReserva() public {

	reservasAlumno[msg.sender].estado = 0 ;


    }

        /**
     * El aula del que se desea ver el historial.
     *
     */
    function LabPulsado(uint x) public view returns (string memory) {

	return laboratoriosRegistrados[x].nombreL; 
    }

    
    /**
     * Crear un lab. 
     *
     * Las labss se meteran en el array labss, y nos referiremos a ellas por su posicion en el array.
     * 
     * @param _nombre El nombre del aula.
     * 
     * @return La posicion en el array aulas,
     */
    
     /**
     * Las personas pueden registrar su asistencia a un lab con el metodo guardarReserva.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     *  _nombre El nombre del aula. 
     * _ent Hora de entrada al aula.
     *  _fecha Fecha de entrada al aula.
     *  _puesto Puesto en el aula.
     */
    function guardarReserva(string memory _nombre, string memory _entradaTurno, string memory _fecha, string memory _puesto, uint _turno) public {
        
	
    bytes memory a = bytes(_nombre);
    require(a.length != 0, "El nombre no puede ser vacio");

	bytes memory b = bytes(_entradaTurno);
	require(b.length != 0, "La hora de entrada no puede ser vacio");

	bytes memory c = bytes(_fecha);
	require(c.length != 0, "La fecha no puede ser vacio");

	bytes memory d = bytes(_puesto);
        require(d.length != 0, "El puesto no puede ser vacio");

	datosLab[_fecha][_nombre][_turno][msg.sender].dir = msg.sender;
	datosLab[_fecha][_nombre][_turno][msg.sender].fecha = _fecha;
	datosLab[_fecha][_nombre][_turno][msg.sender].entradaTurno = _entradaTurno; 
	datosLab[_fecha][_nombre][_turno][msg.sender].puesto = _puesto;
 	
	if (reservasAlumno[msg.sender].estado==0) {
   	datosLab[_fecha][_nombre][_turno][msg.sender].estado = "Inicial";
	} else if (reservasAlumno[msg.sender].estado==1) {
   	datosLab[_fecha][_nombre][_turno][msg.sender].estado = "Sospechoso";
	} else if (reservasAlumno[msg.sender].estado==2) {
   	datosLab[_fecha][_nombre][_turno][msg.sender].estado = "Positivo";
	} else {
   	datosLab[_fecha][_nombre][_turno][msg.sender].estado = "Negativo";
	}

        personas[_fecha][_nombre][_turno].push(msg.sender);
	personasTotales[_fecha][_nombre].push(msg.sender);
	ultimosRegistros[msg.sender].push(UltimaReserva(_nombre,_turno,_fecha));
	
	if (turnos_existentes[_fecha][_nombre][_turno] == false){
	   turnos[_fecha][_nombre].push(_turno);
	   turnos_existentes[_fecha][_nombre][_turno] = true;
	}

        
    }
    

    /**
     * Las personas pueden registrar su salida del aula con el metodo guardarSalida.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     * _nombre El nombre del aula. 
     *  _sal Hora de salida al aula.
     *  _fecha Fecha de entrada al aula.
     */
    function guardarSalida(string memory _nombre, string memory _salidaTurno, string memory _fecha, uint _turno) public {

	datosLab[_fecha][_nombre][_turno][msg.sender].salidaTurno = _salidaTurno;
        
    }



    /**
     * El administrador puede eliminar un aula con el metodo eliminarAula.
     * 
     * Impedir que se pueda meter un indice vacio.
     *
     *  _indice El nombre del aula. 
     */
    
    
    
    /*
     * Crear un puesto
     *
     * Llos puestos se meteran en el array de puestos y nos refereimos por su posicion en el array
     *  _nombre El nombre de puesto 
     
   
     * 
     * La posicion en el array lab
     */
     
     
     //poner lo del laboratorio pero me dice lo de use pragma experimental ABIENCODERV2
    //function creaPuesto(string memory _nombre,TipoConexionesRed  _tipoConexionesRed,TipoSO  _TipoSO/*Laboratorio _laboratorio*/) soloProfesor public returns (uint) {
        
     //  bytes memory bn = bytes(_nombre);
       // require(bn.length != 0, "El nombre de la puesto no puede ser vacio");
        
        //puestos.push(Puesto(_nombre,_tipoConexionesRed,_TipoSO/*_laboratorio*/));
        //return puestos.length - 1;
  //  }
    
    
    
    
        
     //poner lo del laboratorio pero me dice lo de use pragma experimental ABIENCODERV2
    function creaLaboratorio(string memory _nombreL)  public returns (uint) {
        
        bytes memory bn = bytes(_nombreL);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        laboratoriosRegistrados.push(DatosLaboratorio(laboratoriosRegistrados.length,_nombreL));
        return laboratoriosRegistrados.length - 1;
    }
    
    
    
    
        
    
 
     /**
     * El numero de alumnos matriculados.
     *
     * @return El numero de alumnos matriculados.
     */
    function matriculasLength() public view returns(uint) {
        return matriculas.length;
    }
    
    
    
      /**
     * El numero de profes registrados.
     *
     * .
     */
    function profesRegistradosLength() public view returns(uint) {
        return profesRegistrados.length;
    }
    
    
       /**
     * El numero de asignaturas registrados.
     *
     * .
     */
    /*function asignaturasRegistradasLength() public view returns(uint) {
        return asignaturasRegistradas.length;
    }
    */
    
    
    
    
      /**
     * numero de credito semanal 
     *
     * @return El numero de credito semanal 
     * 
     */
     /*function creditosemanalLength() public view returns(uint) {
        return creditosemanal.length;
    }???????????????????????????*/
     
    
    
    
    
    /**
     * Los alumnos pueden automatricularse con el metodo automatricula.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     * @param _nombre El nombre del alumno. 
     * @param _email  El email del alumno.
     */
    function automatricula(string memory _nombre, string memory _email) noMatriculados public {
        //revert("siempre falla");
        bytes memory b = bytes(_nombre);
        require(b.length != 0, "El nombre no puede ser vacio");
        
        DatosAlumno memory datos = DatosAlumno(_nombre, _email);
        
        datosAlumno[msg.sender] = datos;
        
        matriculas.push(msg.sender);
        
    }
    
    
        function autoregistroP() noRegistradosP public {
        
        require(msg.sender!=address(0), "El address no puede estar vacio");
        
        datosPersona[msg.sender] = DatosPersona(msg.sender);
        
        registradosP.push(msg.sender);
        
    }
    
    
  
    function autoRegistro(string memory _nombreP, string memory _emailP,string memory _asignaturaP,string memory _departamentoP ) noRegistrados public {
        
        bytes memory b = bytes(_nombreP);
        require(b.length != 0, "El nombre no puede ser vacio");
        
        DatosProfesor memory datosP = DatosProfesor(_nombreP, _emailP,_asignaturaP,_departamentoP);
        
        datosProfesor[msg.sender] = datosP;
        
       profesRegistrados.push(msg.sender);
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    /**
     * Permite a un alumno obtener sus propios datos.
     * 
     * @return _nombre El nombre del alumno que invoca el metodo.
     * @return _email  El email del alumno que invoca el metodo.
     */
    function quienSoy() soloMatriculados public view returns (string memory _nombre, string memory _email) {
        DatosAlumno memory datos = datosAlumno[msg.sender];
        _nombre = datos.nombre;
        _email = datos.email;
    }
    
    
      function quienSoyP() soloRegistrados public view returns (string memory _nombreP, string memory _emailP,string memory _asignaturaP,string memory _departamentoP) {
        DatosProfesor memory datosP = datosProfesor[msg.sender];
        _nombreP = datosP.nombreP;
        _emailP = datosP.emailP;
        _departamentoP = datosP.departamentoP;
        _asignaturaP = datosP.asignaturaP;
    }
    
    
    

    
    
    /**
     * Consulta si una direccion pertenece a un alumno matriculado.
     * 
     * @param alumno La direccion de un alumno.
     * 
     * @return true si es una alumno matriculado.
     */
    function estaMatriculado(address alumno) private view returns (bool) {
      
        string memory _nombre = datosAlumno[alumno].nombre;
        
        bytes memory b = bytes(_nombre);
        
        return b.length != 0;
    } 
    
    
       function estaRegistrado(address profesor) private view returns (bool) {
      
        string memory _nombreP = datosProfesor[profesor].nombreP;
        
        bytes memory b = bytes(_nombreP);
        
        return b.length != 0;
    } 
    
    function estaRegistradoP(address persona) public view returns (bool) {

	address _dir = datosPersona[persona].dir;
        return _dir!=address(0);
    } 
    
    
    //como hacer para que te devuelva los puestos segun asignatura 
    
    /*function getPuestos (string asignatura) soloMatriculados public view returns (
        string nombre, TipoConexionesRed tipoConexionesRed,TipoSO tipoSO)
         
         require (asignatura.length!=0,"no vacio");
         
         Puesto memory puesto= tipoConexionesRed[msg.sender][asignatura];
         //meter tb tipoSO
         tipoConexionesRed=Puesto.tipoConexionesRed
         tipoSO=Puesto.tipoSO;
         
    // con laboratorios tb ! */
   
    
   //RESERVASSSSSSSSSSSSSSSSSS
   
   
   
   
   /*function addLab(uint labId, uint maxPuestos) public {
        require(registeredLaboratorios[labId] == false, "lab has already been registered");
        require(msg.sender == owner, "You are not the owner");
        labPuestos[labId] = Laboratorio({
            labId: labId,
            maxPuestos: maxPuestos
        });
        registeredLaboratorios[labId] = true;
    }
    */
   /* function addReservation(uint   _labID, uint mes,uint semana, uint hora) public {
        require(registeredLaboratorios[_labID] == true, "lab does not exist");
        //require(puestoId < labPuestos[labId].maxPuestos, "Puesto does not exist");
        require(
            isLabReserved[msg.sender][_labID][mes][semana][hora] == false, 
            "You already have a reservation for this lab at this time"
        );
        reservations[_labID][mes][semana][hora] .push(msg.sender);
        reservationLengths[_labID][mes][semana][hora]  += 1;
        isLabReserved[msg.sender][_labID][mes][semana][hora] = true;
        emit Reservation(msg.sender, _labID, mes, semana,hora);
    }
    function cancelReservation(uint _labID, uint mes,uint semana, uint hora) public {
        require(registeredLaboratorios[_labID] == true, "lab does not exist");
       // require(puestoId < labPuestos[_labID].maxPuestos, "Puesto does not exist");
        require(
            isLabReserved[msg.sender][_labID][mes][semana][hora] == true, 
            "You don't have a reservation for this Lab"
        );
        for (uint i = 0; i < reservations[_labID][mes][semana][hora].length; i++) {
            if (reservations[_labID][mes][semana][hora][i] == msg.sender) {
                delete reservations[_labID][mes][semana][hora][i];
                break;
            }
        }
        reservationLengths[_labID][mes][semana][hora] -= 1;
        isLabReserved[msg.sender][_labID][mes][semana][hora] = false;
        emit Cancellation(msg.sender, _labID, mes, semana,hora);
    } */
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar el profesor.
     * 
     *
     */
    modifier soloProfesor() {
        
        require(msg.sender == profesorP, "Solo permitido al profesor");
        _;
    }
    
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar un alumno matriculado.
     */
    modifier soloMatriculados() {
        
        require(estaMatriculado(msg.sender), "Solo permitido a alumnos matriculados");
        _;
    }
    
    
      modifier soloRegistrados() {
        
        require(estaRegistrado(msg.sender), "Solo permitido a profes registrados");
        _;
    }
    
    
 
    /**
     * Modificador para que una funcion solo la pueda ejecutar un alumno no matriculado aun.
     */
    modifier noMatriculados() {
        
        require(!estaMatriculado(msg.sender), "Solo permitido a alumnos no matriculados");
        _;
    }
    
    
    
      modifier noRegistrados() {
        
        require(!estaRegistrado(msg.sender), "Solo permitido a profes no registrados");
        _;
    }
    
        
      modifier noRegistradosP() {
        
        require(!estaRegistradoP(msg.sender), "Solo permitido a personas no registrados");
        _;
    }
    
    
       receive() external payable {
        revert("No se permite la recepcion de dinero.");
    }
}