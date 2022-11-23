import ReservarPuestosHead from "../ReservarPuestos/ReservarPuestosHead";

import {useParams, Link} from "react-router-dom";

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import React, {useState} from 'react';
import TablaReservasLabBody from "./TablaReservasLabBody";


const TablaReservasLab = ({indexlab,fecha,NAsignatura}) => {
    

    
    
    

    return (
        <section className="AppReservaPuestosSection">
            <h2 className="ReservarPuestosTitulo">Ver Reservas Laboratorio </h2>


            <div className="TablaReservarPuestos">
                <table>
                    <ReservarPuestosHead />
                    <TablaReservasLabBody indexlab={indexlab} fecha={fecha} NAsignatura={NAsignatura} />
                </table>
            </div>

           
            
        </section>

        //<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>
    );
};


export default TablaReservasLab;


//<p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>*/