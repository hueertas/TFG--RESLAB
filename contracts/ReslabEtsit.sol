    
    
    
pragma solidity ^0.8.7;
//pragma experimental ABIEncoderV2;//enabled when passing an array of string(struct) as a function paramete


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
    address public profesor;
     
    
 

    
    
   
   // enum Horario { turnom ,turnot}//poenr horas y turnos en enum???? array de horas 
    
    struct DatosPuesto {


    
	string nombre;
	
	uint indexlab;

       
    }
    
    
    struct DatosTurno{
        string nombre;
        uint fecha;
      
    }
    
    
   
   
   
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
       
        uint indexLab;
        string info;
        
        
    }
    
    

    struct CreditoDiario {
        uint creditoDiario;
    }
    
    
    /**
     * 

     si esta reservado por un alumno
     * */
     
     struct DatosReserva{
         address dirAlumno;
      
     }
     
     /**
      * Datos de mireserva //FALTA PUESTO
      * */
      
      struct ReservaAlumno{
          string lab;
          uint fecha;
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

    mapping (address => DatosTurno)  datosTurno;

    //mapping(uint => Laboratorio) public labPuestos; //acceder a los puestos del lab dada la info del lab
  
   // mapping (address => DatosPuesto)  datosPuesto;
    
    // Array con las direcciones de los alumnos matriculados.
    address[] public matriculas;
    
    
    //array con las direcciones de los profes registrados 
    address[] public profesRegistrados;
    
        // Array con las direcciones de las personas registradas.
    address[] public registradosP;

    
    //Array credito semanal 
    //address [] public creditosemanal;
    
   //array con las direcciones de las asignaturas registradas 
   address[] public asignaturasRegistradasdir;

    DatosAsignatura[] public asignaturasRegistradas;
    
    
    // labs en la escuela
    DatosLaboratorio[] public laboratoriosRegistrados;
    //reservas de la escuela

    // puestos en la escuela
    DatosPuesto[] public puestosRegistrados;
    
 

    // array turnos de los puestos

    DatosTurno[] public turnosRegistrados;
        
   

     //reserva para un usuario 
  
    mapping (address => ReservaAlumno) public reservasAlumno;
    
    
    //turno de la escuela

    //mapping (string => mapping (string  => uint[] )) public turnos;
    
    // Mapping para evitar duplicados de turnos devuelve un bool
    //dado un puesto y una fecha  y un (turno) te devuelve un booleano 
    mapping (uint => mapping  ( uint => mapping ( uint => bool )))  turnos_existentes;
    
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
  //  mapping( uint =>mapping (uint=> mapping (uint=> DatosReserva ))) public puestosReservados;


    
    //dado el numero puesto, turno (numero de milisegundos) ,  te devuelva la reserva
   mapping( uint =>mapping (uint=> DatosReserva )) public datosReserva;


   //
    //dado el numero lab, de un puesto, fecha (numero de milisegundos) ,  y turno te devuelva la reserva

     mapping( uint =>mapping (uint=> mapping (uint=> mapping (uint=> DatosReserva )))) public datosReservaPorLabPuestoFechaTurno;

     //dado el numero lab, de un puesto,  y turno te devuelva la reserva

     mapping( uint =>mapping (uint=>  mapping (uint=> DatosReserva ))) public datosReservaPorLabPuestoTurno;



     // dado la direcion de un alumno , una asignatura y un dia  te da un contador de reservas que lleva

     mapping( address=>mapping (string=>mapping (uint => uint)))  public contadorCredito;

     //dada un alumno y un array de puestos devolver true si la reserva tiene el puesto y el alumnos --PARTE MIS COSAS

     mapping( address =>mapping  (uint => bool )) public Misreservas;



     



    //te devuelve array de puestos reservados tal lab y tal fecha 
    //mapping( uint =>mapping (uint=> DatosPuesto[] )) public puestosReservadosLab;

    //dado el indice de laboratorio un array de los indices de los puestos que estan en ese laboratorio 
    mapping(uint=> uint[]) public puestosDelLaboratorio;


    //dado el indice de laboratorio y la fecha te devuelva los indices de los puestos que estan en ese laboratorio 
    mapping(uint=> mapping( uint => uint[])) public puestosDelLaboratorioFecha;


    //dado el indice de una asignatura te devuelve el indice de un lab 
    mapping(uint => uint) public indiceLabPorAsignatura;

    //dado una fecha y un lab cree una rray de puestos 

    mapping(uint=> mapping( uint => DatosPuesto[])) public arrayPuestosDelLab;


    //dado el index de un puesto registrado 
    //dada la fecha ( string en formaro YYYYYMMD??????
    // dado la hora del turno (de 0 a 23) 
    //devuelve el address del alumnos que ha reservado el turno
    mapping(uint => mapping(uint => mapping (uint=> address))) reservasDelAlumno;


       /// Dado el index de un puesto y una fecha te devuelve los turnos de un lab .
    mapping (uint => mapping (uint  => uint[] )) public turnosPorPuesto;

    
    
    
    
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
    /*function puestosLength() public view returns(uint) {
        return puestosReservadosLab.length;
    }
    
*/

    // te devuelve la longitud de los puestos que hay en un laboratorio 

    function puestosDelLaboratorioLength(uint _indexlab) public view returns(uint) {
        return puestosDelLaboratorio[_indexlab].length;


    }



  /**
     * Te devuelve el numero de turnos
     *
     * @return El numero de turnos creadas.
     */

    function turnosLength() public view returns(uint) {
        return turnosRegistrados.length;
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
     * Obtiene los datos de un alumno que ha reservado.
     * 
  
     */
    function obtenerDatosAlumno(address _alumno)  public view returns(address) {
	
        
        if(!estaReservado(_alumno)){
        return address(0);
        } else{	
        return datosPersona[_alumno].dir;
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




 



    /** Un alumno crea una reserva 
    */

    
    
    

        function guardarReserva(uint  _puestoId, uint  _fecha,  uint _turno, string memory _asignatura)  public {
        
	
       
            require(estaMatriculado(msg.sender),"Solo permitido a alumnos no matriculados");
            require(_turno<24, "Turno invalido");
            require(!estaReservado(msg.sender),"Solo permitido a turnos que no esten reservados");
            require(contadorCredito[msg.sender][_asignatura][_fecha]<3, "se ha excedido el numero maximo de credito");

     
           // contadorCredito[msg.sender][_asignatura][_fecha]=0;

            DatosReserva memory reserva = DatosReserva(msg.sender);
            

            datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno]= reserva;
            contadorCredito[msg.sender][_asignatura][_fecha]++;
            


        }

        
    /** Un alumno quita su reserva - ( solo profe , owner y el propio alumnos 
    */


       function quitarReserva(uint  _puestoId, uint  _fecha,  uint _turno,  string memory _asignatura) public {
        
	
       

            require(estaMatriculado(msg.sender),"Solo permitido a alumnos no matriculados");
            require(_turno<24, "Turno invalido");
           // require(estaReservado(msg.sender),"Solo permitido a turnos que  esten reservados");
            require(datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno].dirAlumno==msg.sender, "la reserva es de otro alumno");
            

         datosReservaPorLabPuestoTurno[_puestoId][_fecha][_turno]= DatosReserva(address(0x0));
            contadorCredito[msg.sender][_asignatura][_fecha]--;

        }
     
  
    













    
    

    
    
    
    
        
     //te crea un laboratorio 

    function creaLaboratorio( uint  _laboratorioindex,string memory _nombreL,string memory _asignaura,string memory _Info) soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_nombreL);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        laboratoriosRegistrados.push(DatosLaboratorio(_laboratorioindex,_nombreL,_asignaura,_Info));
        return laboratoriosRegistrados.length - 1;
    }
    
     // te rea una asignatura 

    function creaAsignatura( string memory _nombreAsig, uint _indexLab,string memory _Info)  soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_nombreAsig);
        require(bn.length != 0, "El nombre de la asig no puede ser vacio");
        
       asignaturasRegistradas.push(DatosAsignatura(_nombreAsig,_indexLab,_Info));
        return asignaturasRegistradas.length - 1;
    }
    
    
    
    
    //te crea un puesto 

    function creaPuesto(string memory _NombreP,uint  _indexlab) soloOwner public returns (uint) {
        
        bytes memory bn = bytes(_NombreP);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        puestosRegistrados.push(DatosPuesto(_NombreP,_indexlab));
        uint id = puestosRegistrados.length -1;

        puestosDelLaboratorio[_indexlab].push(id);

        return id;
    
    }   


    //te crea un turno de laboratorio 

    function creaTurno(string memory _nombre, uint _fecha) soloOwner public returns (uint) {
    
    bytes memory bn = bytes(_nombre);
    require(bn.length != 0, "El nombre de la turno no puede estar vacio");
    
    turnosRegistrados.push(DatosTurno(_nombre, _fecha));
    return turnosRegistrados.length - 1;
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
    

    /**
     * Permite a un profe obtener sus propios datos.
     * 
     * 
    
    function quienSoyP() soloRegistrados public view returns (string memory _nombreP, string memory _emailP,string memory _asignaturaP,string memory _departamentoP) {
        DatosProfesor memory datosP = datosProfesor[msg.sender];
        _nombreP = datosP.nombreP;
        _emailP = datosP.emailP;
        _departamentoP = datosP.departamentoP;
        _asignaturaP = datosP.asignaturaP;
    }
    
      
       /**
     * ddevuelve el lab reservado por el alumno, turno y puesto
     * 
    
     * 
     
     */ 

      function miReserva()  soloMatriculados public view returns (string memory lab) {
        
        DatosLaboratorio  memory nombrelab = datosLaboratorio[msg.sender];
        
       
        lab = nombrelab.nombreL;
       
        
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

       /**
     * Consulta si un turno pertenece a un alumno matriculado.
     * 
     * @param alumno La direccion de un alumno.
     * 
     * @return true si es una alumno matriculado.
     */


       function estaReservado(address alumno) private view returns (bool) {
      
        string memory _nombre = datosTurno[alumno].nombre;
        
        bytes memory b = bytes(_nombre);
        
        return b.length != 0;
    }
    


     /**
     * Consulta si una direccion pertenece a un profe registrado.
     * 
     * 
     */
    
       function estaRegistrado(address _profesor) private view returns (bool) {
      
        string memory _nombreP = datosProfesor[_profesor].nombreP;
        
        bytes memory b = bytes(_nombreP);
        
        return b.length != 0;
    }


    
    function estaRegistradoP(address persona) public view returns (bool) {

	address _dir = datosPersona[persona].dir;
        return _dir!=address(0);
    } 
    
    

   




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
        
        require(msg.sender == profesor, "Solo permitido al profesor");
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
