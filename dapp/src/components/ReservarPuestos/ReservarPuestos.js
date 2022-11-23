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
            <h2 className="ReservarPuestosTitulo">Reservar Puestos </h2>


            <div className="TablaReservarPuestos">
                <table>
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