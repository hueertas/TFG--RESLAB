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

      

       /* console.log("Matricular a dos alumnos:");
        let evaAccount = accounts[1];
      
        console.log("Cuenta de Eva =", evaAccount);
      

        await reslabetsit.autoregistroP( {from: evaAccount});
     
        console.log("terminada matricula");*/




        
       /* await reslabetsit.creaLaboratorio("lab", 13, 30);
        await reslabetsit.creaLaboratorio( "hola",12, 70);
        console.log("Crear dos laboratorios:");*/


      /*  console.log("Añadir asig:"); 
        await reslabetsit.creaAsignatura("core","lab1","info")
        await reslabetsit.creaAsignatura("ore","lab2","info")
 
        console.log("se han añadido");




       console.log("Añadir labs:"); 
       await reslabetsit.creaLaboratorio("labB")
       await reslabetsit.creaLaboratorio("labC")

       console.log("se han añadido");
    
       

        console.log(await reslabetsit.laboratoriosLength());

*/
    const fecha = new Date();
    const hoy = fecha.getDate();


    const tiempoTranscurrido = Date.now();
    const hoyEpoc = new Date(tiempoTranscurrido);

    console.log(hoy);
    console.log(hoyEpoc);

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
//npx truffle exec scripts/rellenarLab.js

//errores

