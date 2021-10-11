pragma solidity ^0.7.4;


contract ReslabEtsit {
    
   
    /**
     * address del profesor que ha desplegado el contrato.
     * El contrato lo despliega el profesor.
     */
    address public profesor; // array de profesores y meter o quitar profesores
     
    
    /// Nombre de la asignatura
    string public nombre;
    
   
    
    /**
     * Datos de un puesto
     */
     
     
     
    enum TipoSO {windows, macos , linux}
    
    enum TipoConexionesRed { cable, inalambrico} // array de strings 
    
   
    enum Horario { turnom ,turnot}//poenr horas y turnos en enum???? array de horas 
    
    struct Puesto {
        string nombre;
        //caracteristicas
        TipoConexionesRed tipoConexionesRed;
        TipoSO tipoSO;
       // Laboratorio laboratorio;
       
    }
    
    
    
    
    
    /// puestos de la asignatura.
    Puesto[] public puestos;
    
    
    
    

    struct Laboratorio{
        string nombre;
        
        Horario horario;
    }

    /// Datos de un alumno.
    struct DatosAlumno {
        string nombre;
        string email;
        
    }
    
    
    struct Asignatura{
        string nombre;
        Puesto puesto;
        //credito semanal
        //Matriculas matriculados;
    }
    
    
    /// Acceder a los datos de un alumno dada su direccion.
    mapping (address => DatosAlumno) public datosAlumno;
    
    
    
    
    // Array con las direcciones de los alumnos matriculados.
    address[] public matriculas;
    
    //Array credito semanal 
    address [] public creditosemanal;
    
    
  
    
    
    
    
    /**
     * Constructor.
     * 
     * @param _nombre Nombre de la asignatura.
     * //habria qu eponer nombre puesto /lab /alumno etc 
    
     */
    constructor(string memory _nombre) {
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre de la asignatura no puede ser vacio");
       
       
      
        profesor = msg.sender;
        nombre = _nombre;
        
        
        // poner los labs con push o hay que ir creandolos y actualizanolos con un metacontrato ????
        
    }
    
    
    /**
     * El numero depuestos creadas.
     *
     * @return El numero de puestos creadas.
     */
    function puestosLength() public view returns(uint) {
        return puestos.length;
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
    
    
    
    
        
    
 
     /**
     * El numero de alumnos matriculados.
     *
     * @return El numero de alumnos matriculados.
     */
    function matriculasLength() public view returns(uint) {
        return matriculas.length;
    }
    
    
      /**
     * numero de credito semanal 
     *
     * @return El numero de credito semanal 
     * 
     */
     
     function creditosemanalLength() public view returns(uint) {
        return creditosemanal.length;
    }
     
    
    
    
    
    /**
     * Los alumnos pueden automatricularse con el metodo automatricula.
     * 
     * Impedir que se pueda meter un nombre vacio.
     *
     * @param _nombre El nombre del alumno. 
     * @param _email  El email del alumno.
     */
    function automatricula(string memory _nombre, string memory _email) noMatriculados public {
        
        bytes memory b = bytes(_nombre);
        require(b.length != 0, "El nombre no puede ser vacio");
        
        DatosAlumno memory datos = DatosAlumno(_nombre, _email);
        
        datosAlumno[msg.sender] = datos;
        
        matriculas.push(msg.sender);
        
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
    
    //como hacer para que te devuelva los puestos segun asignatura 
    
    /*function getPuestos (string asignatura) soloMatriculados public view returns (
        string nombre, TipoConexionesRed tipoConexionesRed,TipoSO tipoSO)
         
         require (asignatura.length!=0,"no vacio");
         
         Puesto memory puesto= tipoConexionesRed[msg.sender][asignatura];
         //meter tb tipoSO
         tipoConexionesRed=Puesto.tipoConexionesRed
         tipoSO=Puesto.tipoSO;
         
    // con laboratorios tb ! */
   
    
    
    
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
    
    
    /**
     * Modificador para que una funcion solo la pueda ejecutar un alumno no matriculado aun.
     */
    modifier noMatriculados() {
        
        require(!estaMatriculado(msg.sender), "Solo permitido a alumnos no matriculados");
        _;
    }
    
   // compilar : truffle compile

   
}