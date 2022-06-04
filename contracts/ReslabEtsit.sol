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
    
    struct DatosPuesto {
       
	string nombre;
	uint fecha;
	uint entradaTurno;
	uint salidaTurno;
    
	bool estado;
	
	string reserva; //enumerado del sistema operativo!!!!!!!!!!!
       
    }
    
    
    struct DatosTurnos{
        string nombre;
        uint fecha;
        uint hora;
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
        uint laboratorioindex;
        
        string nombreL;
        string asignaura;
        string info;
        
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
    
    





    
    struct DatosAsignatura{
        string nombre;
       // Laboratorio[] laboratorio;
        string laboratorio;
        string info;
        //credito semanal
        //Matriculas matriculados;
    }
    
    
    
    
    /**
     * 

     si esta reservado por un alumno
     * */
     
     struct DatosReserva{
         address dirAlumno;
         bool estaReservado;  
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
    
    mapping (address => DatosAsignatura)  datosAsignatura;
    
    
    mapping (address => DatosLaboratorio)  datosLaboratorio;

    //mapping(uint => Laboratorio) public labPuestos; //acceder a los puestos del lab dada la info del lab
  
   // mapping (address => DatosPuesto)  datosPuesto;
    
    // Array con las direcciones de los alumnos matriculados.
    address[] public matriculas;
    
    
    //array con las direcciones de los profes registrados 
    address[] public profesRegistrados;
    
        // Array con las direcciones de las personas registradas.
    address[] public registradosP;

    
    //Array credito semanal 
    address [] public creditosemanal;
    
   //array con las direcciones de las asignaturas registradas 
   address[] public asignaturasRegistradasdir;

    DatosAsignatura[] public asignaturasRegistradas;
    
    
    // labs en la escuela
    DatosLaboratorio[] public laboratoriosRegistrados;
    //reservas de la escuela

    // puestos en la escuela
    DatosPuesto[] public puestosRegistrados;
    
 

    // array turnos de los puestos

    DatosTurnos[] public turnos;
        
   

     //reserva para un usuario 
  
    mapping (address => ReservaAlumno) public reservasAlumno;
    
    
    //turno de la escuela

    //mapping (string => mapping (string  => uint[] )) public turnos;
    
    /// Mapping para evitar duplicados de turnos. // devuelve un bool
    mapping (string => mapping (string  => mapping ( uint => bool ))) public turnos_existentes;
    
    /// Devuelve las direcciones de las personas que han asistido a algun lab en alguna de las fechas y en algun turno.
    mapping (string => mapping (string => mapping (uint => address[] ))) public personas;
   
    /// Devuelve las Direcciones de las personas que han asistido a algun lab y en alguna de las fechas.
    mapping (string => mapping (string => address[] )) public personasTotales;

    // devuelve los puestos totales qu tienes los labs???????????????como lo hago  lo que quiero es haya los puestos totales que tiene cada laboratorio??????

    mapping(string => string[]) public puestosTotales;
    




    //IMPORTANTEEEEEEEEEEEE!
    // devuelve array con los indices de los puestos y la clave es un array de enteros laboratorio 
    mapping (uint=> uint[]) public puestos;



    //dado la fecha, entrada turno y el el indice de laboratorio quiero que devuelva un array con el numero de puestos
    mapping (string => mapping (uint => mapping (uint => uint[]))) public puestosBuscados;

    
    //dado el numero lab, fecha (numero de milisegundos) , dado turno ( todos los turnos que hay en un puesto en un dia), te devuelva la reserva
    mapping( uint =>mapping (uint=> mapping (uint=> DatosReserva ))) public puestosReservados;





    
    
    
    
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
     * Te devuelve el numero de puestos registrados
     *
     * @return El numero de puestos creadas.
     */
    function puestosLength() public view returns(uint) {
        return puestosRegistrados.length;
    }
    

  /**
     * Te devuelve el numero de turnos
     *
     * @return El numero de turnos creadas.
     */
    function turnosLength() public view returns(uint) {
        return turnos.length;
    }
    

    //devuelve la longitud del array de los puestos de un laboratorio 
    function puestosLaboratorioLength(uint _laboratorioindex) public view returns(uint) {
        return puestos[_laboratorioindex].length;
    }
    
    
     /**
     * El numero de labs  registrados
     *
     * @return El numero de labs creadas.
     */
    function laboratoriosLength() public view returns(uint) {
        return laboratoriosRegistrados.length;
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
     * Permite obtener la longitud del array de puestosTotale del lab
     * 
     */
    function puestosLength2(string memory _nombre) public view returns(uint) {

        uint longitud2 = puestosTotales[_nombre].length;

        if(longitud2 == 0){
        longitud2 = 1;
	    }

  	    return longitud2;

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


    //puestos que hay en un lab. Coger el array que te da el mapping de puestos y devolver su .length

    function puestosdeLaboratorio(uint _laboratorioindex) public view returns(uint) {

        return puestos[_laboratorioindex].length;
    }
    


     // puestos que hay en un lab segun la fecha, la entrada 
    function BuscaPuestoLab( string  memory _fecha, uint _entradaTurno,uint _laboratorioindex) public view returns(uint) {

        return puestosBuscados[_fecha][_entradaTurno][_laboratorioindex].length;
    }




    /**
     * Eliminar la alerta de un usuario
     *
    
    function reiniciarReserva() public {

	reservasAlumno[msg.sender].estado = 0 ;

    
    }

    */

        /**
     * El lab del que se desea ver su info y el arrai de uestos
     *
     */
    function LabPulsado(uint x) public view returns (string memory) {

	return laboratoriosRegistrados[x].nombreL; 
    }


          /**
     * El puesto del que se desea ver toda su información tercera pantalla
     *
     */
    /*function PuestoPulsado(uint x) public view returns (string memory) {

	return puestosRegistrados[x].nombreP; 
    }

    
  /**
     * Las personas pueden registrar su asistencia en un puesto con el metodo guardarReserva.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     *  _nombre El nombre del puesto. 
     * _ent Hora de entrada al lab.
     *  _fecha Fecha de entrada al lab.
     *  _puesto Puesto en el lab.
     */
    /*function guardarReserva(string memory _nombre, string memory _entradaTurno, string memory _fecha,   uint _turno) public {
        
	
        bytes memory a = bytes(_nombre);
        require(a.length != 0, "El nombre no puede estar vacia");

        bytes memory b = bytes(_entradaTurno);
        require(b.length != 0, "La hora de entrada no puede estar vacia");

        bytes memory c = bytes(_fecha);
        require(c.length != 0, "La fecha no puede estar vacia");

        

        
        datosPuesto[_fecha][_nombre][_turno][msg.sender].dir = msg.sender; //datosPuesto es un mapping ( el puesto que devuelve adjudicado a una persona dado la fecha, nombre lab , entrada y direcccion de la persona)
        datosPuesto[_fecha][_nombre][_turno][msg.sender].fecha = _fecha;
        datosPuesto[_fecha][_nombre][_turno][msg.sender].entradaTurno = _entradaTurno; 
	
 	


        personas[_fecha][_nombre][_turno].push(msg.sender); //personas ( mapping que devuelve la personas que han asistido a algun lab en una fecha  lab y  turno específico)
        personasTotales[_fecha][_nombre].push(msg.sender); // personasTotales (devuelve todas las ersonas que han asistido dada una fecha y el nombre de un lab)
        ultimosRegistros[msg.sender].push(UltimaReserva(_nombre,_turno,_fecha)); // Mapping que devuelve los ultimos registros de la ultima reserva // ultimaReserva( es un struct con turno, fecha nombre lab) 
        
        if (turnos_existentes[_fecha][_nombre][_turno] == false){ // mapping evitar duplicados, si ese turno dado el nombre de un uesto , fecha no esta cogido entonces se puede reservar 
        turnos[_fecha][_nombre].push(_turno); // se suma al numero de puestos cogidos llamado turnos ( mapping  dado un puestos y una fecha)




        turnos_existentes[_fecha][_nombre][_turno] = true;
        }

        
    }
    

    /**
     * Las personas pueden registrar su salida del lab con el metodo guardarSalida.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     * _nombre El nombre del aula. 
     *  _sal Hora de salida al aula.
     *  _fecha Fecha de entrada al aula.
     */
    /*function guardarSalida(string memory _nombre, string memory _salidaTurno, string memory _fecha, uint _turno) public {

	    datosPuesto[_fecha][_nombre][_turno][msg.sender].salidaTurno = _salidaTurno;
        
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
    function creaLaboratorio( uint  _laboratorioindex,string memory _nombreL,string memory _asignaura,string memory _Info) soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_nombreL);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        laboratoriosRegistrados.push(DatosLaboratorio(_laboratorioindex,_nombreL,_asignaura,_Info));
        return laboratoriosRegistrados.length - 1;
    }
    

    function creaAsignatura( string memory _nombreAsig,string memory _lab,string memory _Info)  soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_nombreAsig);
        require(bn.length != 0, "El nombre de la asig no puede ser vacio");
        
       asignaturasRegistradas.push(DatosAsignatura(_nombreAsig,_lab,_Info));
        return asignaturasRegistradas.length - 1;
    }
    
    
    
    
    //poner lo del laboratorio pero me dice lo de use pragma experimental ABIENCODERV2
    function creaPuesto(string memory _NombreP,uint  _fecha,uint  _entradaTurno,uint  _salidaTurno,bool _estado,string memory _info) soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_NombreP);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        puestosRegistrados.push(DatosPuesto(_NombreP,_fecha,_entradaTurno,_salidaTurno,_estado,_info));
        return puestosRegistrados.length - 1;
    
    }   


    function creaTurno(string memory _nombre, uint _fecha, uint _hora) soloOwner public returns (uint) {
    
    bytes memory bn = bytes(_nombre);
    require(bn.length != 0, "El nombre de la evaluacion no puede ser vacio");
    
    turnos.push(DatosTurnos(_nombre, _fecha, _hora));
    return turnos.length - 1;
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
    function asignaturasRegistradasLength() public view returns(uint) {
        return asignaturasRegistradas.length;
    }
    
    
    
    
    
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
    modifier soloOwner() {
        
        require(msg.sender == owner, "Solo permitido al owner");
        _;
    }
    
    
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
