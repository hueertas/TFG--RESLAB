import ReservarPuestosHead from "./ReservarPuestosHead";
import ReservarPuestosBody from "./ReservarPuestosBody";
import {useParams, Link} from "react-router-dom";
import BotonReservar from "./BotonReservar";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import React, {useState} from 'react';



const ReservarPuestos = ({indexlab,fecha,NAsignatura}) => {
    

    
    
    

    return (
        <section className="AppReservaPuestosSection">
            <h2 className="ReservarPuestosTitulo">Reserve aquí su puesto: </h2>
            <h2 className="ReservarPuestosNota">Nota: Sólo se podrá reservar un máximo de tres turnos por día. Cualquier duda consulte con el administrador de la dApp. Para ello pulse Contacto en la navegación de la parte izquierda.</h2>

            <div className="TablaReservar">
                <table className="TablaReservarPuestos">
                    <ReservarPuestosHead />
                    <ReservarPuestosBody indexlab={indexlab} fecha={fecha} NAsignatura={NAsignatura} />
                </table>
            </div>

           
            
        </section>

        //<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>
    );
};


export default ReservarPuestos;


//<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>