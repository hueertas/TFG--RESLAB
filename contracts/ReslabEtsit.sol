pragma solidity ^0.7.4;


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
    Puesto[] public puestos;
    
    //labs de la asignatura
    
    Laboratorio[] public laboratorios;
    
    
     struct Laboratorio {
        string nombre;
        uint labId;
        uint maxPuestos;
    }
    

    /*struct Laboratorio{
        string nombre;
        
        
        
    }*/

    /// Datos de un alumno.
    struct DatosAlumno {
        string nombre;
        string email;
        
    }
    
    struct DatosProfesor{
        string nombreP;
        string emailP;
        string asignaturaP;
        string departamentoP;
    }
    
    
    struct DatosAsignatura{
        string nombre;
        Laboratorio[] laboratorio;
        Puesto[] puesto;
        //credito semanal
        //Matriculas matriculados;
    }
    
    
    /// Acceder a los datos de un alumno dada su direccion.
    mapping (address => DatosAlumno) public datosAlumno;
    
      /// Acceder a los datos de un profe dada su direccion.
    mapping (address => DatosProfesor) public datosProfesor;
    
    mapping (address => DatosAsignatura)  datosAsignatura;
    
    mapping(uint => Laboratorio) public labPuestos; //acceder a los puestos del lab dada la info del lab
  

    
    // Array con las direcciones de los alumnos matriculados.
    address[] public matriculas;
    
    
    //array con las direcciones de los profes registrados 
    address[] public profesRegistrados;
    
    //Array credito semanal 
    address [] public creditosemanal;
    
    address[] public asignaturasRegistradas;
    
    
        
   

  

  /*  mapping(uint => bool) public registeredLaboratorios; //saberr si un lab esta registrado
    mapping(uint => Laboratorio) public labPuestos; //acceder a los puestos del lab dada la info del lab 

    // labId -> puestoId ->week-> hour -> waitingList[]
    mapping(uint => mapping(uint => mapping(uint => mapping(uint => address[])))) public reservations;
    // labId -> puestoId ->week-> hour -> waitingListLength
    mapping(uint => mapping(uint => mapping(uint => mapping(uint => uint)))) public reservationLengths;

    // address -> labId -> puestoId ->week-> hour -> bool
    mapping(address => mapping(uint => mapping(uint => mapping(uint => mapping(uint => bool))))) public isPuestoReserved;

    event Reservation(
        address indexed _from,
        uint _labId,
        uint _puestoId,
        uint _week,
        uint _hour
    );

    event Cancellation(
        address indexed _from,
        uint _labId,
        uint _puestoId,
        uint _week,
        uint _hour
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
    function puestosLength() public view returns(uint) {
        return puestos.length;
    }
    
    
    
     /**
     * El numero de labs  creadas.
     *
     * @return El numero de labs creadas.
     */
    function laboratoriosLength() public view returns(uint) {
        return laboratorios.length;
    }
    
    
    
    
    /**
     * Crear un puesto
     *
     * Llos puestos se meteran en el array de puestos y nos refereimos por su posicion en el array
     * @param _nombre El nombre de puesto 
     
   
     * 
     * @return La posicion en el array lab
     */
     
     
     //poner lo del laboratorio pero me dice lo de use pragma experimental ABIENCODERV2
    function creaPuesto(string memory _nombre,TipoConexionesRed  _tipoConexionesRed,TipoSO  _TipoSO/*Laboratorio _laboratorio*/) soloProfesor public returns (uint) {
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre de la puesto no puede ser vacio");
        
        puestos.push(Puesto(_nombre,_tipoConexionesRed,_TipoSO/*_laboratorio*/));
        return puestos.length - 1;
    }
    
    
    
    
        
     //poner lo del laboratorio pero me dice lo de use pragma experimental ABIENCODERV2
   function creaLaboratorio(string memory _nombre,uint  _labId,uint _maxPuestos) soloProfesor public returns (uint) {
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre del lab no puede ser vacio");
        
        laboratorios.push(Laboratorio(_nombre,_labId,_maxPuestos));
        return laboratorios.length - 1;
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

    function addReservation(uint labId, uint puestoId,uint week, uint hour) public {
        require(registeredLaboratorios[labId] == true, "lab does not exist");
        require(puestoId < labPuestos[labId].maxPuestos, "Puesto does not exist");
        require(
            isPuestoReserved[msg.sender][labId][puestoId][week][hour] == false, 
            "You already have a reservation for this puesto at this time"
        );

        reservations[labId][puestoId][week][hour] .push(msg.sender);
        reservationLengths[labId][puestoId][week][hour]  += 1;
        isPuestoReserved[msg.sender][labId][puestoId][week][hour] = true;

        emit Reservation(msg.sender, labId, puestoId, week,hour);
    }

    function cancelReservation(uint labId, uint puestoId,uint week, uint hour) public {
        require(registeredLaboratorios[labId] == true, "lab does not exist");
        require(puestoId < labPuestos[labId].maxPuestos, "Puesto does not exist");
        require(
            isPuestoReserved[msg.sender][labId][puestoId][week][hour] == true, 
            "You don't have a reservation for this Puesto"
        );

        for (uint i = 0; i < reservations[labId][puestoId][week][hour].length; i++) {
            if (reservations[labId][puestoId][week][hour][i] == msg.sender) {
                delete reservations[labId][puestoId][week][hour][i];
                break;
            }
        }

        reservationLengths[labId][puestoId][week][hour] -= 1;
        isPuestoReserved[msg.sender][labId][puestoId][week][hour] = false;

        emit Cancellation(msg.sender, labId, puestoId, week,hour);
    }*/
    
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
}