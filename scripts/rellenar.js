module.exports = async callback => {

    try {
        const ReslabEtsit = artifacts.require("./ReslabEtsit.sol");

        // Usar las cuentas de usuario
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < 8) {
            throw new Error("No hay cuentas.");
        }

        let reslabetsit = await ReslabEtsit.deployed();

        // Identificar al owner:
        let owner = await reslabetsit.owner();
        console.log("Cuenta del owner =", owner);

      

       console.log("Matricular a dos alumnos:");
        let evaAccount = accounts[1];
      //  let pepeAccount = accounts[2];
        console.log("Cuenta de Eva =", evaAccount);
       // console.log("Cuenta de Pepito =", pepeAccount);
      // await reslabetsit.automatricula("Eva Martinez", "em@dominio.es", {from: evaAccount});


       console.log("Crear dos asignaturas:");
        await reslabetsit.creaAsignatura("core", "lab1", "info");
        await reslabetsit.creaAsignatura("dapp ", "lab2", "info");


        
       console.log("Crear dos laboratrios:");
       await reslabetsit.creaLaboratorio(1,"lab1", "core", "info");
       await reslabetsit.creaLaboratorio(2,"lab2 ", "dap", "info");


       console.log("Crear dos puestos:");
       await reslabetsit.creaPuesto("puesto1", 1);
       await reslabetsit.creaPuesto("puesto2", 2);


       console.log("Crear dos turnos:");
       await reslabetsit.creaTurno("turno1", 12345678);
       await reslabetsit.creaTurno("turno2",12345679);
       await reslabetsit.creaTurno("turno3",12345689);
       await reslabetsit.creaTurno("turno4",12345699);
       await reslabetsit.creaTurno("turno5",12345649);
       await reslabetsit.creaTurno("turno6",12345639);

   

      const tl =  await reslabetsit.turnosLength();
      //const pl =  await reslabetsit.puestosDelLaboratorioLength(_indexlab);

      console.log("numero de turnos", tl);

      console.log("Añadir reservas:");
      await reslabetsit.guardarReserva( 1, 12345649, 1);
      await reslabetsit.guardarReserva( 1, 12345649, 2);
      await reslabetsit.guardarReserva( 2, 12345649, 1);




    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar

};
//npx truffle compile
//npx truffle migrate
//npx truffle migrate --reset --compile-all
//npx truffle exec scripts/rellenar.js

//errores

