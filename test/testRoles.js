let ReslabEtsit = artifacts.require("ReslabEtsit");

contract("ReslabEtsit", accounts => {
	let reslabEtsit;

	let desplegador = accounts[0];
	let addrEthProf = accounts[1];
	let addrEthProf2 = accounts[2];
	let addrEthAlum = accounts[3];
	let addrEthAlum2 = accounts[4];
	let addrEthAlum3 = accounts[5];
	let newOwner = accounts[6];
	let newCoordinador = accounts[8];
	let coordinador = accounts[9];

	before(async() => {
		reslabEtsit = await ReslabEtsit.deployed();
		console.log("ReslabEtsit =", reslabEtsit.address);
	});

	/*it("El owner es quien ha desplegado el contrato.", async () => {
		let owner = await reslabEtsit.owner();
		assert.equal(owner, desplegador, "El owner debe ser quien ha desplegado el contrato.");
	});

	it("Comprobar que, de todas las cuentas, sólo la 0 es owner", async () => {
		let isOwner1 = await reslabEtsit.isOwner({from: desplegador});
		assert.equal(true, isOwner1, "El que ha desplegado el contrato debería ser owner.");

		let isOwner2 = await reslabEtsit.isOwner({from: addrEthProf});
		assert.equal(false, isOwner2, "addrEthProf no debería ser owner.");

		let isOwner3 = await reslabEtsit.isOwner({from: addrEthProf2});
		assert.equal(false, isOwner3, "addrEthProf2 no debería ser owner.");

		let isOwner4 = await reslabEtsit.isOwner({from: addrEthAlum});
		assert.equal(false, isOwner4, "addrEthAlum no debería ser owner.");

		let isOwner5 = await reslabEtsit.isOwner({from: addrEthAlum2});
		assert.equal(false, isOwner5, "addrEthAlum2 no debería ser owner.");

		let isOwner6 = await reslabEtsit.isOwner({from: addrEthAlum3});
		assert.equal(false, isOwner6, "addrEthAlum3 no debería ser owner.");

		let isOwner7 = await reslabEtsit.isOwner({from: newOwner});
		assert.equal(false, isOwner7, "newOwner no debería ser owner.");

		let isOwner8 = await reslabEtsit.isOwner({from: newCoordinador});
		assert.equal(false, isOwner8, "newCoordinador no debería ser owner.");

		let isOwner9 = await reslabEtsit.isOwner({from: coordinador});
		assert.equal(false, isOwner9, "coordinador no debería ser owner.");
	});

	it("Comprobar que, de todas las cuentas, sólo la 9 es coordinador", async () => {
		let isCoordinador1 = await reslabEtsit.isCoordinador({from: desplegador});
		assert.equal(false, isCoordinador1, "El que ha desplegado el contrato no debería ser coordinador.");

		let isCoordinador2 = await reslabEtsit.isCoordinador({from: addrEthProf});
		assert.equal(false, isCoordinador2, "addrEthProf no debería ser coordinador.");

		let isCoordinador3 = await reslabEtsit.isCoordinador({from: addrEthProf2});
		assert.equal(false, isCoordinador3, "addrEthProf2 no debería ser coordinador.");

		let isCoordinador4 = await reslabEtsit.isCoordinador({from: addrEthAlum});
		assert.equal(false, isCoordinador4, "addrEthAlum no debería ser coordinador.");

		let isCoordinador5 = await reslabEtsit.isCoordinador({from: addrEthAlum2});
		assert.equal(false, isCoordinador5, "addrEthAlum2 no debería ser coordinador.");

		let isCoordinador6 = await reslabEtsit.isCoordinador({from: addrEthAlum3});
		assert.equal(false, isCoordinador6, "addrEthAlum3 no debería ser coordinador.");

		let isCoordinador7 = await reslabEtsit.isCoordinador({from: newOwner});
		assert.equal(false, isCoordinador7, "newOwner no debería ser coordinador.");

		let isCoordinador8 = await reslabEtsit.isCoordinador({from: newCoordinador});
		assert.equal(false, isCoordinador8, "newCoordinador no debería ser coordinador.");

		let isCoordinador9 = await reslabEtsit.isCoordinador({from: coordinador});
		assert.equal(true, isCoordinador9, "coordinador debería ser coordinador.");
	});

	
	it("No se permite eliminar un profesor que no está creado", async () => {
		let errorMsg = "eliminarProfesor - No hay Profesores creados.";
        let error = false;

        let numProfesores = await reslabEtsit.numProfesores();
		assert.equal(0, numProfesores, "Todavía no debe haber ningún profesor añadido.");

		try {
            let tx = await reslabEtsit.eliminarProfesor(addrEthProf);
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "No se debería permitir eliminar un profesor que no está creado.");
        }
	});

	it("Comprobar que, de todas las cuentas, ninguna es profesor", async () => {
		let isProfesor1 = await reslabEtsit.isProfesor({from: desplegador});
		assert.equal(false, isProfesor1, "El que ha desplegado el contrato no debería ser profesor.");

		let isProfesor2 = await reslabEtsit.isProfesor({from: addrEthProf});
		assert.equal(false, isProfesor2, "addrEthProf no debería ser profesor.");

		let isProfesor3 = await reslabEtsit.isProfesor({from: addrEthProf2});
		assert.equal(false, isProfesor3, "addrEthProf2 no debería ser profesor.");

		let isProfesor4 = await reslabEtsit.isProfesor({from: addrEthAlum});
		assert.equal(false, isProfesor4, "addrEthAlum no debería ser profesor.");

		let isProfesor5 = await reslabEtsit.isProfesor({from: addrEthAlum2});
		assert.equal(false, isProfesor5, "addrEthAlum2 no debería ser profesor.");

		let isProfesor6 = await reslabEtsit.isProfesor({from: addrEthAlum3});
		assert.equal(false, isProfesor6, "addrEthAlum3 no debería ser profesor.");

		let isProfesor7 = await reslabEtsit.isProfesor({from: newOwner});
		assert.equal(false, isProfesor7, "newOwner no debería ser profesor.");

		let isProfesor8 = await reslabEtsit.isProfesor({from: newCoordinador});
		assert.equal(false, isProfesor8, "newCoordinador no debería ser profesor.");

		let isProfesor9 = await reslabEtsit.isProfesor({from: coordinador});
		assert.equal(false, isProfesor9, "coordinador no debería ser profesor.");
	});

	it("No se permite crear un profesor a quien no es owner ni coordinador", async () => {
        let errorMsg = "Sólo el owner o el coordinador pueden hacer esta operación.";
        let error = false;

		let numProfesores = await reslabEtsit.numProfesores();
		assert.equal(0, numProfesores, "Todavía no debe haber ningún profesor registrado.");

        try {
            await reslabEtsit.anadirProfesor(addrEthProf, {from: newOwner});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador no debería poder crear un profesor.");
        }

        numProfesores = await reslabEtsit.numProfesores();
        assert.equal(0, numProfesores, "Todavía no debe haber ningún profesor registrado.");
    });

	it("El owner crea correctamente un profesor", async() => {
		let numProfesores = await reslabEtsit.numProfesores();
		assert.equal(0, numProfesores, "Todavía no debe haber ningún profesor registrado.");

		let tx = await reslabEtsit.anadirProfesor(addrEthProf, {from: desplegador});

		numProfesores = await reslabEtsit.numProfesores();
		assert.equal(1, numProfesores, "Debe haber un profesor registrado.");

		let indexProf = await reslabEtsit.mapProfesores(addrEthProf);
		let profesor = await reslabEtsit.listaProfesores(indexProf);

		assert.equal(addrEthProf, profesor, "La dirección del profesor creado por el owner debe coincidir.")
	});

	it("Tras crear un profesor, comprobar que, de todas las cuentas, sólo la 1 es profesor", async () => {
		let isProfesor1 = await reslabEtsit.isProfesor({from: desplegador});
		assert.equal(false, isProfesor1, "El que ha desplegado el contrato no debería ser profesor.");

		let isProfesor2 = await reslabEtsit.isProfesor({from: addrEthProf});
		assert.equal(true, isProfesor2, "Ahora addrEthProf sí debería ser profesor.");

		let isProfesor3 = await reslabEtsit.isProfesor({from: addrEthProf2});
		assert.equal(false, isProfesor3, "addrEthProf2 no debería ser profesor.");

		let isProfesor4 = await reslabEtsit.isProfesor({from: addrEthAlum});
		assert.equal(false, isProfesor4, "addrEthAlum no debería ser profesor.");

		let isProfesor5 = await reslabEtsit.isProfesor({from: addrEthAlum2});
		assert.equal(false, isProfesor5, "addrEthAlum2 no debería ser profesor.");

		let isProfesor6 = await reslabEtsit.isProfesor({from: addrEthAlum3});
		assert.equal(false, isProfesor6, "addrEthAlum3 no debería ser profesor.");

		let isProfesor7 = await reslabEtsit.isProfesor({from: newOwner});
		assert.equal(false, isProfesor7, "newOwner no debería ser profesor.");

		let isProfesor8 = await reslabEtsit.isProfesor({from: newCoordinador});
		assert.equal(false, isProfesor8, "newCoordinador no debería ser profesor.");

		let isProfesor9 = await reslabEtsit.isProfesor({from: coordinador});
		assert.equal(false, isProfesor9, "coordinador no debería ser profesor.");
	});

	it("El coordinador crea correctamente un profesor", async() => {
		let numProfesores = await reslabEtsit.numProfesores();
		assert.equal(1, numProfesores, "Debe haber un profesor registrado.");

		let tx = await reslabEtsit.anadirProfesor(addrEthProf2, {from: coordinador});

		numProfesores = await reslabEtsit.numProfesores();
		assert.equal(2, numProfesores, "Debe haber dos profesores registrados.");

		let indexProf = await reslabEtsit.mapProfesores(addrEthProf2);
		let profesor = await reslabEtsit.listaProfesores(indexProf);

		assert.equal(addrEthProf2, profesor, "La dirección del profesor creado por el coordinador debe coincidir.")
	});

	it("Tras crear un segundo profesor, comprobar que, de todas las cuentas, sólo la 1 y 2 son profesores", async () => {
		let isProfesor1 = await reslabEtsit.isProfesor({from: desplegador});
		assert.equal(false, isProfesor1, "El que ha desplegado el contrato no debería ser profesor.");

		let isProfesor2 = await reslabEtsit.isProfesor({from: addrEthProf});
		assert.equal(true, isProfesor2, "Ahora addrEthProf sí debería ser profesor.");

		let isProfesor3 = await reslabEtsit.isProfesor({from: addrEthProf2});
		assert.equal(true, isProfesor3, "Ahora addrEthProf2 sí debería ser profesor.");

		let isProfesor4 = await reslabEtsit.isProfesor({from: addrEthAlum});
		assert.equal(false, isProfesor4, "addrEthAlum no debería ser profesor.");

		let isProfesor5 = await reslabEtsit.isProfesor({from: addrEthAlum2});
		assert.equal(false, isProfesor5, "addrEthAlum2 no debería ser profesor.");

		let isProfesor6 = await reslabEtsit.isProfesor({from: addrEthAlum3});
		assert.equal(false, isProfesor6, "addrEthAlum3 no debería ser profesor.");

		let isProfesor7 = await reslabEtsit.isProfesor({from: newOwner});
		assert.equal(false, isProfesor7, "newOwner no debería ser profesor.");

		let isProfesor8 = await reslabEtsit.isProfesor({from: newCoordinador});
		assert.equal(false, isProfesor8, "newCoordinador no debería ser profesor.");

		let isProfesor9 = await reslabEtsit.isProfesor({from: coordinador});
		assert.equal(false, isProfesor9, "coordinador no debería ser profesor.");
	});

	it("Comprobar inicialmente que, de todas las cuentas, ninguna es alumno", async () => {
		let isAlumno1 = await reslabEtsit.isAlumno({from: desplegador});
		assert.equal(false, isAlumno1, "El que ha desplegado el contrato no debería ser alumno.");

		let isAlumno2 = await reslabEtsit.isAlumno({from: addrEthProf});
		assert.equal(false, isAlumno2, "addrEthProf no debería ser alumno.");

		let isAlumno3 = await reslabEtsit.isAlumno({from: addrEthProf2});
		assert.equal(false, isAlumno3, "addrEthProf2 no debería ser alumno.");

		let isAlumno4 = await reslabEtsit.isAlumno({from: addrEthAlum});
		assert.equal(false, isAlumno4, "addrEthAlum no debería ser alumno.");

		let isAlumno5 = await reslabEtsit.isAlumno({from: addrEthAlum2});
		assert.equal(false, isAlumno5, "addrEthAlum2 no debería ser alumno.");

		let isAlumno6 = await reslabEtsit.isAlumno({from: addrEthAlum3});
		assert.equal(false, isAlumno6, "addrEthAlum3 no debería ser alumno.");

		let isAlumno7 = await reslabEtsit.isAlumno({from: newOwner});
		assert.equal(false, isAlumno7, "newOwner no debería ser alumno.");

		let isAlumno8 = await reslabEtsit.isAlumno({from: newCoordinador});
		assert.equal(false, isAlumno8, "newCoordinador no debería ser alumno.");

		let isAlumno9 = await reslabEtsit.isAlumno({from: coordinador});
		assert.equal(false, isAlumno9, "coordinador no debería ser alumno.");
	});

	it("No se permite crear un alumno a quien no es owner ni coordinador ni profesor", async () => {
        let errorMsg = "Sólo el owner, el coordinador o un profesor pueden hacer esta operación.";
        let error = false;

		let numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(0, numAlumnos, "Todavía no debe haber ningún alumno registrado.");

        try {
            await reslabEtsit.anadirAlumno(addrEthAlum, {from: newOwner});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador o un profesor no debería poder crear un alumno.");
        }

        numAlumnos = await reslabEtsit.numAlumnos();
        assert.equal(0, numAlumnos, "Todavía no debe haber ningún alumno registrado.");
    });

	it("El owner crea correctamente un alumno", async() => {
		let numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(0, numAlumnos, "Todavía no debe haber ningún alumno registrado.");

		let tx = await reslabEtsit.anadirAlumno(addrEthAlum, {from: desplegador});

		numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(1, numAlumnos, "Debe haber un alumno registrado.");

		let indexAlum = await reslabEtsit.mapAlumnos(addrEthAlum);
		let alumno = await reslabEtsit.listaAlumnos(indexAlum);

		assert.equal(addrEthAlum, alumno, "La dirección del alumno creado por el owner debe coincidir.")
	});

	it("Tras crear un alumno, comprobar que, de todas las cuentas, sólo la 3 es alumno", async () => {
		let isAlumno1 = await reslabEtsit.isAlumno({from: desplegador});
		assert.equal(false, isAlumno1, "El que ha desplegado el contrato no debería ser alumno.");

		let isAlumno2 = await reslabEtsit.isAlumno({from: addrEthProf});
		assert.equal(false, isAlumno2, "addrEthProf no debería ser alumno.");

		let isAlumno3 = await reslabEtsit.isAlumno({from: addrEthProf2});
		assert.equal(false, isAlumno3, "addrEthProf2 no debería ser alumno.");

		let isAlumno4 = await reslabEtsit.isAlumno({from: addrEthAlum});
		assert.equal(true, isAlumno4, "Ahora addrEthAlum sí debería ser alumno.");

		let isAlumno5 = await reslabEtsit.isAlumno({from: addrEthAlum2});
		assert.equal(false, isAlumno5, "addrEthAlum2 no debería ser alumno.");

		let isAlumno6 = await reslabEtsit.isAlumno({from: addrEthAlum3});
		assert.equal(false, isAlumno6, "addrEthAlum3 no debería ser alumno.");

		let isAlumno7 = await reslabEtsit.isAlumno({from: newOwner});
		assert.equal(false, isAlumno7, "newOwner no debería ser alumno.");

		let isAlumno8 = await reslabEtsit.isAlumno({from: newCoordinador});
		assert.equal(false, isAlumno8, "newCoordinador no debería ser alumno.");

		let isAlumno9 = await reslabEtsit.isAlumno({from: coordinador});
		assert.equal(false, isAlumno9, "coordinador no debería ser alumno.");
	});

	it("El coordinador crea correctamente un alumno", async() => {
		let numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(1, numAlumnos, "Debe haber un alumno registrado.");

		let tx = await reslabEtsit.anadirAlumno(addrEthAlum2, {from: coordinador});

		numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(2, numAlumnos, "Debe haber dos alumnos registrados.");

		let indexAlum = await reslabEtsit.mapAlumnos(addrEthAlum2);
		let alumno = await reslabEtsit.listaAlumnos(indexAlum);

		assert.equal(addrEthAlum2, alumno, "La dirección del alumno creado por el coordinador debe coincidir.")
	});

	it("Tras crear un segundo alumno, comprobar que, de todas las cuentas, sólo la 3 y 4 son alumnos", async () => {
		let isAlumno1 = await reslabEtsit.isAlumno({from: desplegador});
		assert.equal(false, isAlumno1, "El que ha desplegado el contrato no debería ser alumno.");

		let isAlumno2 = await reslabEtsit.isAlumno({from: addrEthProf});
		assert.equal(false, isAlumno2, "addrEthProf no debería ser alumno.");

		let isAlumno3 = await reslabEtsit.isAlumno({from: addrEthProf2});
		assert.equal(false, isAlumno3, "addrEthProf2 no debería ser alumno.");

		let isAlumno4 = await reslabEtsit.isAlumno({from: addrEthAlum});
		assert.equal(true, isAlumno4, "Ahora addrEthAlum sí debería ser alumno.");

		let isAlumno5 = await reslabEtsit.isAlumno({from: addrEthAlum2});
		assert.equal(true, isAlumno5, "Ahora addrEthAlum2 sí debería ser alumno.");

		let isAlumno6 = await reslabEtsit.isAlumno({from: addrEthAlum3});
		assert.equal(false, isAlumno6, "addrEthAlum3 no debería ser alumno.");

		let isAlumno7 = await reslabEtsit.isAlumno({from: newOwner});
		assert.equal(false, isAlumno7, "newOwner no debería ser alumno.");

		let isAlumno8 = await reslabEtsit.isAlumno({from: newCoordinador});
		assert.equal(false, isAlumno8, "newCoordinador no debería ser alumno.");

		let isAlumno9 = await reslabEtsit.isAlumno({from: coordinador});
		assert.equal(false, isAlumno9, "coordinador no debería ser alumno.");
	});

	it("Un profesor crea correctamente un alumno", async() => {
		let numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(2, numAlumnos, "Debe haber dos alumnos registrados.");

		let tx = await reslabEtsit.anadirAlumno(addrEthAlum3, {from: addrEthProf});

		numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(3, numAlumnos, "Debe haber tres alumnos registrados.");

		let indexAlum = await reslabEtsit.mapAlumnos(addrEthAlum3);
		let alumno = await reslabEtsit.listaAlumnos(indexAlum);

		assert.equal(addrEthAlum3, alumno, "La dirección del alumno creado por un profesor debe coincidir.")
	});

	it("Tras crear un tercer alumno, comprobar que, de todas las cuentas, sólo la 3, 4 y 5 son alumnos", async () => {
		let isAlumno1 = await reslabEtsit.isAlumno({from: desplegador});
		assert.equal(false, isAlumno1, "El que ha desplegado el contrato no debería ser alumno.");

		let isAlumno2 = await reslabEtsit.isAlumno({from: addrEthProf});
		assert.equal(false, isAlumno2, "addrEthProf no debería ser alumno.");

		let isAlumno3 = await reslabEtsit.isAlumno({from: addrEthProf2});
		assert.equal(false, isAlumno3, "addrEthProf2 no debería ser alumno.");

		let isAlumno4 = await reslabEtsit.isAlumno({from: addrEthAlum});
		assert.equal(true, isAlumno4, "Ahora addrEthAlum sí debería ser alumno.");

		let isAlumno5 = await reslabEtsit.isAlumno({from: addrEthAlum2});
		assert.equal(true, isAlumno5, "Ahora addrEthAlum2 sí debería ser alumno.");

		let isAlumno6 = await reslabEtsit.isAlumno({from: addrEthAlum3});
		assert.equal(true, isAlumno6, "Ahora addrEthAlum3 sí debería ser alumno.");

		let isAlumno7 = await reslabEtsit.isAlumno({from: newOwner});
		assert.equal(false, isAlumno7, "newOwner no debería ser alumno.");

		let isAlumno8 = await reslabEtsit.isAlumno({from: newCoordinador});
		assert.equal(false, isAlumno8, "newCoordinador no debería ser alumno.");

		let isAlumno9 = await reslabEtsit.isAlumno({from: coordinador});
		assert.equal(false, isAlumno9, "coordinador no debería ser alumno.");
	});

	// no se permite crear laboratorio a quien no es coordinador
	it("No se permite crear una laboratorio a quien no es owner ni coordinador ", async () => {
		let nombre = "Pruebalab";
		let asignatura = "core";
		let info = "hola";
		
        let errorMsg = "Sólo el owner, el coordinador pueden hacer esta operación.";
        let error = false;
		//crear numLaboratorios contrato!!!!!!!!!!!!!!!!!!!

		let numLaboratorios = await reslabEtsit.numLaboratorios();
		assert.equal(0, numLaboratorios, "Todavía no debe haber ninguna asignatura creada.");

        try {
            await reslabEtsit.creaLaboratorio(nombre, asignatura, info, {from: newOwner});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador  no debería poder crear una laboratorio.");
        }

        numLaboratorios = await reslabEtsit.numLaboratorios();
        assert.equal(0, numLaboratorios, "Todavía no debe haber ninguna laboratorio creada");
    });



	it("Un coordinador crea correctamente un laboratorio", async () => {
		let nombre = "Pruebalab";
		let asignatura = "core";
		let info = "hola";
	

		let numLaboratorios = await reslabEtsit.numLaboratorios();
		assert.equal(0, numLaboratorios, "Todavía no debe haber ninguna asignatura creada.");

		let tx = await reslabEtsit.creaAsignatura(nombre, asignatura, info, {from: newCoordinador });

		numLaboratorios = await reslabEtsit.numLaboratorios();
		assert.equal(1, numLaboratorios, "Debe haber una asignatura creada.");

		let laboratorio = await reslabEtsit.listaLaboratorios(0);

		
		assert.equal(nombre, laboratorio.nombre, "El nombre de la evaluación debe coincidir.");
		assert.equal(asignatura, laboratorio.indexLab, "La asignatura del lab debe coincidir.");
		assert.equal(info, laboratorio.info, "La info del lab  debe coincidir.");
	
	});

	
	

	it("Un coordinador actualiza correctamente un laboratorio", async () => {
		let newNombre = "NewPrueba";
	
		let newasignatura = "einb";
		let newinfo = "adios";

		numLaboratorios = await reslabEtsit.numLaboratorios();
		assert.equal(1, numLaboratorios, "Debe haber una asignatura creada.");

		await reslabEtsit.actualizarAsignatura(newNombre, newasignatura, newinfo, {from: newCoordinador});

		let laboratorio = await reslabEtsit.listaEvaluaciones(0);

		assert.equal(newNombre, laboratorio.nombre, "El nombre de la evaluación debe coincidir.");
		
		assert.equal(newasignatura, laboratorio.asignatura, "La asignatura del lab debe coincidir.");
		assert.equal(newinfo, laboratorio.info, "La info del lab debe coincidir.");
	});



		
	it("Un coordinador elimina correctamente un lab", async () => {
		let newNombre = "NewPrueba";
	
		let newasignatura = "einb";
		let newinfo = "adios";


		let numLaboratorios = await reslabEtsit.numLaboratorios();
		assert.equal(1, numLaboratorios, "Debe haber una lab creada.");

		let tx = await reslabEtsit.borrarNota(newNombre, newasignatura, newinfo, {from: newCoordinador});

		numLaboratorios = await reslabEtsit.numLaboratorios();
		assert.equal(0, numLaboratorios, "No debe haber ninguna nota registrada.");
	});



	// no se permite crear asignatura a quien no es coordinador
	it("No se permite crear una asignatura a quien no es owner ni coordinador ", async () => {
		let nombre = "Pruebalab";
		let indexLab = 0;
		let info = "hola";
		
        let errorMsg = "Sólo el owner, el coordinador pueden hacer esta operación.";
        let error = false;
		//crear numAsignaturass contrato!!!!!!!!!!!!!!!!!!!

		let numAsignaturas = await reslabEtsit.numAsignaturas();
		assert.equal(0, numAsignaturas, "Todavía no debe haber ninguna asignatura creada.");

        try {
            await reslabEtsit.creaLaboratorio(nombre, indexLab, info, {from: newOwner});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador  no debería poder crear una asignatura.");
        }

        numAsignaturas = await reslabEtsit.numAsignaturas();
        assert.equal(0, numAsignaturas, "Todavía no debe haber ninguna asignatura creada");
    });



	it("Un coordinador crea correctamente un asignatura", async () => {
		let nombre = "Pruebalab";
		let indexLab = "core";
		let info = "hola";
	

		let numAsignaturas = await reslabEtsit.numAsignaturas();
		assert.equal(0, numAsignaturas, "Todavía no debe haber ninguna asignatura creada.");

		let tx = await reslabEtsit.creaAsignatura(nombre, indexLab, info, {from: newCoordinador });

		numAsignaturas = await reslabEtsit.numAsignaturas();
		assert.equal(1, numAsignaturas, "Debe haber una asignatura creada.");

		let asignatura = await reslabEtsit.listaLaboratorios(0);

		
		assert.equal(nombre, asignatura.nombre, "El nombre de la evaluación debe coincidir.");
		assert.equal(indexLab, asignatura.indexLab, "La asignatura del lab debe coincidir.");
		assert.equal(info, asignatura.info, "La info del lab  debe coincidir.");
	
	});

	
	

	it("Un coordinador actualiza correctamente un asignatura", async () => {
		let newNombre = "NewPrueba";
	
		let newindexLab = "einb";
		let newinfo = "adios";

		numAsignaturas = await reslabEtsit.numAsignaturas();
		assert.equal(1, numAsignaturas, "Debe haber una asignatura creada.");

		await reslabEtsit.actualizarAsignatura(newNombre, newindexLab, newinfo, {from: newCoordinador});

		let asignatura = await reslabEtsit.listaEvaluaciones(0);

		assert.equal(newNombre, asignatura.nombre, "El nombre de la evaluación debe coincidir.");
		
		assert.equal(newindexLab, asignatura.indexLab, "La asignatura del lab debe coincidir.");
		assert.equal(newinfo, asignatura.info, "La info del lab debe coincidir.");
	});



		
	it("Un coordinador elimina correctamente un lab", async () => {
		let newNombre = "NewPrueba";
	
		let newnewindexLab = "einb";
		let newinfo = "adios";


		let numAsignaturas = await reslabEtsit.numAsignaturas();
		assert.equal(1, numAsignaturas, "Debe haber una lab creada.");

		let tx = await reslabEtsit.borrarNota(newNombre, newnewindexLab, newinfo, {from: newCoordinador});

		numAsignaturas = await reslabEtsit.numAsignaturas();
		assert.equal(0, numAsignaturas, "No debe haber ninguna nota registrada.");
	});








	
	// no se permite crear turno a quien no es coordinador
	it("No se permite crear una turno a quien no es owner ni coordinador ", async () => {
		let nombre = "Pruebalab";
		let fecha = 67764578;
		
		
        let errorMsg = "Sólo el owner, el coordinador pueden hacer esta operación.";
        let error = false;
		//crear numTurnoss contrato!!!!!!!!!!!!!!!!!!!

		let numTurnos = await reslabEtsit.numTurnos();
		assert.equal(0, numTurnos, "Todavía no debe haber ninguna turno creada.");

        try {
            await reslabEtsit.creaTurno(nombre, fecha,  {from: newOwner});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador  no debería poder crear una turno.");
        }

        numTurnos = await reslabEtsit.numTurnos();
        assert.equal(0, numTurnos, "Todavía no debe haber ninguna turno creada");
    });



	it("Un coordinador crea correctamente un turno", async () => {
		let nombre = "Pruebalab";
		let fecha = 67764578;
	

		let numTurnos = await reslabEtsit.numTurnos();
		assert.equal(0, numTurnos, "Todavía no debe haber ninguna turno creada.");

		let tx = await reslabEtsit.creaAsignatura(nombre, fecha, {from: newCoordinador });

		numTurnos = await reslabEtsit.numTurnos();
		assert.equal(1, numTurnos, "Debe haber una turno creada.");

		let turno = await reslabEtsit.listaTurnos(0);

		
		assert.equal(nombre, turno.nombre, "El nombre de la evaluación debe coincidir.");
		assert.equal(fecha, turno.fecha, "La turno del lab debe coincidir.");
		
	
	});

	
	

	it("Un coordinador actualiza correctamente un turno", async () => {
		let newNombre = "NewPrueba";
	
		let newfecha = 67764579;
	

		numTurnos = await reslabEtsit.numTurnos();
		assert.equal(1, numTurnos, "Debe haber una turno creada.");

		await reslabEtsit.actualizarAsignatura(newNombre, newfecha, {from: newCoordinador});

		let turno = await reslabEtsit.listaEvaluaciones(0);

		assert.equal(newNombre, turno.nombre, "El nombre de la evaluación debe coincidir.");
		
		assert.equal(newfecha, turno.fecha, "La turno del lab debe coincidir.");
		
	});



		
	it("Un coordinador elimina correctamente un lab", async () => {
		let newNombre = "NewPrueba";
	
		let newfecha = 67764579;
	


		let numTurnos = await reslabEtsit.numTurnos();
		assert.equal(1, numTurnos, "Debe haber una lab creada.");

		let tx = await reslabEtsit.borrarNota(newNombre, newfecha, {from: newCoordinador});

		numTurnos = await reslabEtsit.numTurnos();
		assert.equal(0, numTurnos, "No debe haber ninguna nota registrada.");
	});







	it("No se permite actualizar el coordinador a quien no es owner ni coordinador.", async () => {
		let errorMsg = "Sólo el owner o el coordinador pueden hacer esta operación.";
        let error = false;

		let coordInicial = await reslabEtsit.coordinador();
		assert.equal(coordinador, coordInicial, "El coordinador inicial no coincide.");

		try {
            await reslabEtsit.actualizarCoordinador(newCoordinador, {from: addrEthProf});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador no debería poder actualizar el owner.");
        }

		let coordActualizado = await reslabEtsit.coordinador();
		assert.equal(coordinador, coordActualizado, "No se debería haber actualizado el coordinador.");
	});

	it("El coordinador actualiza correctamente el coordinador", async () => {
		let coordInicial = await reslabEtsit.coordinador();
		assert.equal(coordinador, coordInicial, "El coordinador inicial no coincide.");

		await reslabEtsit.actualizarCoordinador(newCoordinador, {from: coordinador});

		let coordActualizado = await reslabEtsit.coordinador();
		assert.equal(newCoordinador, coordActualizado, "El coordinador actualizado no coincide.");
	});

	it("Tras actualizar el coordinador, comprobar que, de todas las cuentas, sólo la 8 es coordinador", async () => {
		let isCoordinador1 = await reslabEtsit.isCoordinador({from: desplegador});
		assert.equal(false, isCoordinador1, "El que ha desplegado el contrato no debería ser coordinador (II).");

		let isCoordinador2 = await reslabEtsit.isCoordinador({from: addrEthProf});
		assert.equal(false, isCoordinador2, "addrEthProf no debería ser coordinador (II).");

		let isCoordinador3 = await reslabEtsit.isCoordinador({from: addrEthProf2});
		assert.equal(false, isCoordinador3, "addrEthProf2 no debería ser coordinador (II).");

		let isCoordinador4 = await reslabEtsit.isCoordinador({from: addrEthAlum});
		assert.equal(false, isCoordinador4, "addrEthAlum no debería ser coordinador (II).");

		let isCoordinador5 = await reslabEtsit.isCoordinador({from: addrEthAlum2});
		assert.equal(false, isCoordinador5, "addrEthAlum2 no debería ser coordinador (II).");

		let isCoordinador6 = await reslabEtsit.isCoordinador({from: addrEthAlum3});
		assert.equal(false, isCoordinador6, "addrEthAlum3 no debería ser coordinador (II).");

		let isCoordinador7 = await reslabEtsit.isCoordinador({from: newOwner});
		assert.equal(false, isCoordinador7, "newOwner no debería ser coordinador (II).");

		let isCoordinador8 = await reslabEtsit.isCoordinador({from: newCoordinador});
		assert.equal(true, isCoordinador8, "Ahora newCoordinador sí debería ser coordinador (II).");

		let isCoordinador9 = await reslabEtsit.isCoordinador({from: coordinador});
		assert.equal(false, isCoordinador9, "El que ha sido designado coordinador en el despliegue ya no debería ser coordinador (II).");
	});

	it("No se permite eliminar un alumno a quien no es owner ni coordinador ni profesor", async () => {
		let errorMsg = "Sólo el owner, el coordinador o un profesor pueden hacer esta operación.";
        let error = false;

		let numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(3, numAlumnos, "Todavía debe haber tres alumnos registrados.");

        try {
            let tx = await reslabEtsit.eliminarAlumno(addrEthAlum3, {from: addrEthAlum});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador o un profesor no debería poder eliminar un alumno.");
        }

        numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(3, numAlumnos, "Todavía debe haber tres alumnos registrados.");
    });

	it("Un profesor puede eliminar correctamente un alumno", async () => {
		let numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(3, numAlumnos, "Todavía debe haber tres alumnos registrados.");

		let tx = await reslabEtsit.eliminarAlumno(addrEthAlum3, {from: addrEthProf});

		numAlumnos = await reslabEtsit.numAlumnos();
		assert.equal(2, numAlumnos, "Todavía debe haber dos alumnos registrados.");
	});

	it("Tras eliminar uno de los tres alumnos, comprobar que, de todas las cuentas, sólo la 3 y la 4 son alumnos", async () => {
		let isAlumno1 = await reslabEtsit.isAlumno({from: desplegador});
		assert.equal(false, isAlumno1, "El que ha desplegado el contrato no debería ser alumno.");

		let isAlumno2 = await reslabEtsit.isAlumno({from: addrEthProf});
		assert.equal(false, isAlumno2, "addrEthProf no debería ser alumno.");

		let isAlumno3 = await reslabEtsit.isAlumno({from: addrEthProf2});
		assert.equal(false, isAlumno3, "addrEthProf2 no debería ser alumno.");

		let isAlumno4 = await reslabEtsit.isAlumno({from: addrEthAlum});
		assert.equal(true, isAlumno4, "addrEthAlum ya no debería ser alumno.");

		let isAlumno5 = await reslabEtsit.isAlumno({from: addrEthAlum2});
		assert.equal(true, isAlumno5, "addrEthAlum2 no debería ser alumno.");

		let isAlumno6 = await reslabEtsit.isAlumno({from: addrEthAlum3});
		assert.equal(false, isAlumno6, "addrEthAlum3 no debería ser alumno.");

		let isAlumno7 = await reslabEtsit.isAlumno({from: newOwner});
		assert.equal(false, isAlumno7, "newOwner no debería ser alumno.");

		let isAlumno8 = await reslabEtsit.isAlumno({from: newCoordinador});
		assert.equal(false, isAlumno8, "newCoordinador no debería ser alumno.");

		let isAlumno9 = await reslabEtsit.isAlumno({from: coordinador});
		assert.equal(false, isAlumno9, "coordinador no debería ser alumno.");
	});

	it("No se permite eliminar un profesor a quien no es owner ni coordinador", async () => {
		let errorMsg = "Sólo el owner o el coordinador pueden hacer esta operación.";
        let error = false;

		let numProfesores = await reslabEtsit.numProfesores();
		assert.equal(2, numProfesores, "Todavía debe haber dos profesores registrados.");

        try {
            let tx = await reslabEtsit.eliminarProfesor(addrEthProf2, {from: addrEthAlum});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner o el coordinador no debería poder eliminar un profesor.");
        }

        numProfesores = await reslabEtsit.numProfesores();
		assert.equal(2, numProfesores, "Todavía debe haber dos profesores registrados.");
    });

	it("El coordinador elimina correctamente un profesor", async () => {
		let numProfesores = await reslabEtsit.numProfesores();
		assert.equal(2, numProfesores, "Todavía debe haber dos profesores registrados.");

		let tx = await reslabEtsit.eliminarProfesor(addrEthProf2, {from: newCoordinador});

		numProfesores = await reslabEtsit.numProfesores();
		assert.equal(1, numProfesores, "Todavía debe haber un profesor registrado.");
	});

	it("Tras eliminar uno de los dos profesores, comprobar que, de todas las cuentas, sólo la 1 es profesor", async () => {
		let isProfesor1 = await reslabEtsit.isProfesor({from: desplegador});
		assert.equal(false, isProfesor1, "El que ha desplegado el contrato no debería ser profesor.");

		let isProfesor2 = await reslabEtsit.isProfesor({from: addrEthProf});
		assert.equal(true, isProfesor2, "addrEthProf ya no debería ser profesor.");

		let isProfesor3 = await reslabEtsit.isProfesor({from: addrEthProf2});
		assert.equal(false, isProfesor3, "addrEthProf2 sí debería seguir siendo profesor.");

		let isProfesor4 = await reslabEtsit.isProfesor({from: addrEthAlum});
		assert.equal(false, isProfesor4, "addrEthAlum no debería ser profesor.");

		let isProfesor5 = await reslabEtsit.isProfesor({from: addrEthAlum2});
		assert.equal(false, isProfesor5, "addrEthAlum2 no debería ser profesor.");

		let isProfesor6 = await reslabEtsit.isProfesor({from: addrEthAlum3});
		assert.equal(false, isProfesor6, "addrEthAlum3 no debería ser profesor.");

		let isProfesor7 = await reslabEtsit.isProfesor({from: newOwner});
		assert.equal(false, isProfesor7, "newOwner no debería ser profesor.");

		let isProfesor8 = await reslabEtsit.isProfesor({from: newCoordinador});
		assert.equal(false, isProfesor8, "newCoordinador no debería ser profesor.");

		let isProfesor9 = await reslabEtsit.isProfesor({from: coordinador});
		assert.equal(false, isProfesor9, "coordinador no debería ser profesor.");
	});

	it("No se permite actualizar el owner a quien no es owner", async () => {
        let errorMsg = "Sólo el owner puede hacer esta operación.";
        let error = false;

        let owner = await reslabEtsit.owner();
        assert.equal(desplegador, owner, "El owner debe ser quien ha desplegado el contrato.");

        try {
            await reslabEtsit.actualizarOwner(newOwner, {from: newOwner});
        } catch(err) {
            error = err.toString().includes(errorMsg);
        } finally {
            assert.equal(true, error, "Alguien que no es el owner no debería poder actualizar el owner.");
        }

        let newOwnerAct = await reslabEtsit.owner();
        assert.equal(desplegador, newOwnerAct, "El owner se ha actualizado y no tendría que haber ocurrido.");
    });

    it("El owner actualiza correctamente el owner", async () => {
        let owner = await reslabEtsit.owner();
        assert.equal(desplegador, owner, "El owner debe ser quien ha desplegado el contrato.");

        await reslabEtsit.actualizarOwner(newOwner, {from: desplegador});

        let newOwnerAct = await reslabEtsit.owner();
        assert.equal(newOwner, newOwnerAct, "El owner no se ha actualizado correctamente.");
    });

    it("Tras actualizar el owner, comprobar que, de todas las cuentas, sólo la 6 es owner", async () => {
		let isOwner1 = await reslabEtsit.isOwner({from: desplegador});
		assert.equal(false, isOwner1, "El que ha desplegado el contrato ya no debería ser owner (II).");

		let isOwner2 = await reslabEtsit.isOwner({from: addrEthProf});
		assert.equal(false, isOwner2, "addrEthProf no debería ser owner (II).");

		let isOwner3 = await reslabEtsit.isOwner({from: addrEthProf2});
		assert.equal(false, isOwner3, "addrEthProf2 no debería ser owner (II).");

		let isOwner4 = await reslabEtsit.isOwner({from: addrEthAlum});
		assert.equal(false, isOwner4, "addrEthAlum no debería ser owner (II).");

		let isOwner5 = await reslabEtsit.isOwner({from: addrEthAlum2});
		assert.equal(false, isOwner5, "addrEthAlum2 no debería ser owner (II).");

		let isOwner6 = await reslabEtsit.isOwner({from: addrEthAlum3});
		assert.equal(false, isOwner6, "addrEthAlum3 no debería ser owner (II).");

		let isOwner7 = await reslabEtsit.isOwner({from: newOwner});
		assert.equal(true, isOwner7, "Ahora newOwner sí debería ser owner (II).");

		let isOwner8 = await reslabEtsit.isOwner({from: newCoordinador});
		assert.equal(false, isOwner8, "newCoordinador no debería ser owner (II).");

		let isOwner9 = await reslabEtsit.isOwner({from: coordinador});
		assert.equal(false, isOwner9, "coordinador no debería ser owner (II).");
	});

	/*it("", async () => {
		assert.equal(expected, actual, msg);
	});*/
});