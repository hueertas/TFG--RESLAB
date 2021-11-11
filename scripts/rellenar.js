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
        let pepeAccount = accounts[2];
        console.log("Cuenta de Eva =", evaAccount);
        console.log("Cuenta de Pepito =", pepeAccount);

        await reslabetsit.automatricula("Eva Martinez", "em@dominio.es", {from: evaAccount});
        await reslabetsit.automatricula("Jose Redondo", "jr@stio.com", {from: pepeAccount});
        console.log("terminada matricula");
       /* await reslabetsit.creaLaboratorio("lab", 13, 30);
        await reslabetsit.creaLaboratorio( "hola",12, 70);
        console.log("Crear dos laboratorios:");*/

        

       console.log("Matricular a dos profes:");
        //???????????????????? xq la de los profes no va 
        let santiagoAccount = accounts[3];
        let carmenAccount = accounts[4];
        console.log("Cuenta de Santiago =", santiagoAccount);
        console.log("Cuenta de Carmen =", carmenAccount);
        await reslabetsit.autoRegistro("Santiago Bautista", "sb@dominio.es","core","dit", {from: santiagoAccount});
        await reslabetsit.autoRegistro("Carmen Sanchez", "cs@stio.com","adsw","dit1", {from: carmenAccount});


        

      /*console.log("Añadir calificaciones:");
        await asignatura.califica(evaAccount, 0, 1, 65);
        await asignatura.califica(evaAccount, 1, 1, 75);
        await asignatura.califica(pepeAccount, 0, 0, 0);
        await asignatura.califica(pepeAccount, 1, 1, 50);
*/

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

