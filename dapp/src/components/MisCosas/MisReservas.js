import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import MisReservasBody from "./MisReservasBody";

import React, {useState} from 'react';
import moment from 'moment';

const {useDrizzle,useDrizzleState} = drizzleReactHooks;



const MisReservas = ({indexlab,fecha}) =>

    <section className="AppMisNotas">
    <h3>Mis Reservas</h3>
    <table>
        <MisReservasHead/>
        <MisReservasBody indexlab={indexlab} fecha={fecha}  />
       
    </table>
    </section>;


const MisReservasHead = () =>
    <thead>
    <tr>
        <th>Laboratorio</th>
        <th>Fecha</th>
        <th>Turno</th>
        <th>Puesto</th>
    </tr>
    </thead>;



/*const MisReservasBody = (indexlab) => {
    const {useDrizzle} = drizzleReactHooks;

    
    const {useCacheCall,useCacheSend} = useDrizzle();

 

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

    //si esta reservado por mi addrres que devuelva el nombre lab, fecha y los indices del turno y puesto
    //mapping dada una direccion te devuelva el lab que tiene reservado
    //con un bucle for recorrer todos los valores de los puestos y tienes un array con los que te van dando true y solo pintas los que has metido en ese array//maping dada una direcion (alumno) y 
    //dada un alumno y dado un array de puestos (ponerlo con el bucle for en frontend) 
    
    const ml = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength",indexlab) || 0;


   // const laboratoriosLength = useCacheCall("ReslabEtsit", "laboratoriosLength") || 0;
   // const mireserva = useCacheCall("ReslabEtsit", "miReserva") || 0;
    //const datoslab = useCacheSend("ReslabEtsit", "datosLaboratorio",miaddress );
    


        return <>
        
       
        {indexlab}

        </>
       
        
        
        ;
   

    
};

 */



const MisReservasRow = (indexlab, fecha,puestoIndice) => {

    const {useDrizzle} = drizzleReactHooks;

    
    const {useCacheCall} = useDrizzle();

 

    const drizzleState = useDrizzleState(state=>state);
    let miaddress = drizzleState.accounts[0];

    
    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", indexlab);
    let puestoName = useCacheCall("ReslabEtsit", "puestosRegistrados", puestoIndice)?.nombre

    
    
    
    //de todos los puestos que hay , funcion    que te devuelva el laboratorio la fecha turno  si hay una reserva con su msgsender(mapping que ya tenemos)

   
    let rows = useCacheCall(['ReslabEtsit'], call => {
        if (!puestoName) { return []; }

    const el = call("ReslabEtsit", "turnosLength") || 0;
    let rows=[];
    
    for (let i = 0; i < el; i++) {

        const reserva = call("ReslabEtsit","datosReservaPorLabPuestoTurno",puestoIndice,fecha,i);
            //rows.push(<ReservarUnPuesto key={"cb-"+i} turnoIndex={i} fecha={fecha} puestoIndice={puestoIndice} />);
            //crea un reserva que le pases la direcion alumno, con su puesto , su turno y su fecha y si coincide esa direccion con algun alumno, eso tiene que ser un address
            rows.push(

                <tr key={"p2-" + puestoIndice + "-" + el}>

                    <td > { reserva === miaddress ? datos?.nombreL :"no lab" }</td>
                    <td > { reserva === miaddress ? fecha :"no fecha" }</td>
                    <td > { reserva === miaddress ? i+1 :"no turno" }</td>
                    <td > { reserva === miaddress ? puestoIndice :"no puesto" }</td>

                 
            
                  
                        
              </tr>      
                       

                       
                        
                       
                 
                    
                    
                
            );
        }
        return rows;
    });


  
    return <>

        <tr key={"d" + puestoIndice}>
                
              
                {rows}
                
        </tr>
         
        { /*<p>El día seleccionado es: <b>{moment(fecha).format('MMMM Do YYYY')} y el puesto es : {puestoName}</b></p>*/}

         </>
        
};

export default MisReservas;
