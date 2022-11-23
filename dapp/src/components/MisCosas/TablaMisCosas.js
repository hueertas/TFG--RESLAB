import ReservarPuestosHead from "../ReservarPuestos/ReservarPuestosHead";

import {useParams, Link} from "react-router-dom";

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import React, {useState} from 'react';
import TablaMisCosasHead from "./TablaMisCosasHead"
import TablaMisCosasBody from "./TablaMisCosasBody"





const TablaMisCosas = ({indexlab,fecha,NAsignatura}) => {
    



    return (
        <section className="AppMisCosasSection">
            <h2 className="ReservarPuestosTitulo">Ver Mis Reservas</h2>

            


            <div className="TablaReservarPuestos">
                <table>
                <TablaMisCosasHead />
                <TablaMisCosasBody indexlab={indexlab} fecha={fecha} NAsignatura={NAsignatura} />
                </table>
            </div>

           
            
        </section>

        
    );
};


export default TablaMisCosas;