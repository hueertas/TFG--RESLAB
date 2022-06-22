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

        console.log("Añadir reservas:");
        let x = await reslabetsit.datosReservaPorLabPuestoTurno( 1, 1655416800, 1); 
        let y = await reslabetsit.datosReservaPorLabPuestoTurno( 22, 1655416800, 1); 
        let z = await reslabetsit.datosReservaPorLabPuestoTurno( 1, 1655416800, 7);

        console.log("Añadir reservas:", x );
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
//npx truffle exec scripts/rellenarLab.js

//errores

