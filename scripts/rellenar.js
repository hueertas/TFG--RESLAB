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
      await reslabetsit.automatricula("Eva Martinez", "em@dominio.es", {from: evaAccount});
       await reslabetsit.automatricula("owner", "owner@dominio.es", {from: owner});


         console.log("Crear dos asignaturas:");
        await reslabetsit.creaAsignatura("core",1, "info");
        await reslabetsit.creaAsignatura("dapp ",2, "info");


        
       console.log("Crear dos laboratrios:");
       await reslabetsit.creaLaboratorio(1,"lab1", "core", "info");
       await reslabetsit.creaLaboratorio(2,"lab2 ", "dap", "info");


       console.log("Crear dos puestos:");
       await reslabetsit.creaPuesto("C01", 1);
       await reslabetsit.creaPuesto("C02", 0);
       await reslabetsit.creaPuesto("C03", 1);
       await reslabetsit.creaPuesto("C04", 1);
       await reslabetsit.creaPuesto("C05", 1);
       await reslabetsit.creaPuesto("C06", 1);
       await reslabetsit.creaPuesto("C07", 1);
       await reslabetsit.creaPuesto("C08", 1);
       await reslabetsit.creaPuesto("C09", 1);
       await reslabetsit.creaPuesto("C10", 1);


       console.log("Crear dos turnos:");
       await reslabetsit.creaTurno("10:00-11:00", 12345678);
       await reslabetsit.creaTurno("11:00-12:00",12345679);
       await reslabetsit.creaTurno("12:00-13:00",12345689);
       await reslabetsit.creaTurno("16:00-17:00",12345699);
       await reslabetsit.creaTurno("17:00-18:00",12345649);
       await reslabetsit.creaTurno("18:00-19:00",12345639);

   

      const tl =  await reslabetsit.turnosLength();
      //const pl =  await reslabetsit.puestosDelLaboratorioLength(_indexlab);

      console.log("numero de turnos", tl);

      console.log("Añadir reservas:");
      await reslabetsit.guardarReserva( 1, 1655416800, 1, {from: owner}); 
      await reslabetsit.guardarReserva( 2, 1655416800, 2, {from: owner});
      await reslabetsit.guardarReserva( 2, 1655416800, 1, {from: owner});

      let x = await reslabetsit.datosReservaPorLabPuestoTurno( 1, 1655416800, 1); 
      let y = await reslabetsit.datosReservaPorLabPuestoTurno( 22, 1655416800, 1); 
      let z = await reslabetsit.datosReservaPorLabPuestoTurno( 1, 1655416800, 7);

      console.log("reserva ocupada:", x );
      console.log("reserva vacia:", y );
      console.log("reserva vacia:", z );





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
//https://www.epochconverter.com/

//errores

