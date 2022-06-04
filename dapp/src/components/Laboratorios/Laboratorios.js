import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import LaboratoriosHead from "./LaboratoriosHead";
import LaboratoriosBody from "./LaboratoriosBody";
import BuscaPuesto from "./BuscaPuesto";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';


const {useDrizzle} = drizzleReactHooks;

export const Laboratorios = () => {
    
   
       
   
       return (
           <section className="AppLaboratorios">
               <h2>Laboratorios</h2>
               <table>
                   <LaboratoriosHead/>
                   <LaboratoriosBody />
               </table>
           </section>
       );
   };
   
   
   
   export const Laboratorio = () => {
    const {useCacheCall} = useDrizzle();
    
    let {index} = useParams();
    
    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", index);
    const datospuesto = useCacheCall("ReslabEtsit", "puestosLaboratorioLength") || 0;
    const [dateState, setDateState] = useState(new Date());
    const changeDate = (e) => {
        setDateState(e)
      }

    let rows = [];
    for (let i = 0; i < datospuesto; i++) {
        rows.push(<Laboratorio key={"ab-"+i} laboratorioIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }
    
    return <>
            <header className="AppAlumno">
                <h2>LABORATORIOS
                </h2>
            </header>

            
    
            <ul>
                
                <li><b>Nombre:</b> {datos?.nombreL ?? "Desconocido"}</li>
                {/*<li><b>Asig</b> {datos?.asignaura ?? "Desconocido"}</li>*/}
                <li><b>Puestos correspondientes:</b>{rows}</li>

                <li><b>Info:</b> {index}</li>
            </ul>

            <Calendar 
            value={dateState}
            onChange={changeDate}/>

            <p>El día seleccionado es: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>

            <BuscaPuesto/>

            
    
            <Link to="/laboratorios">Volver</Link>
        </>
    };






       
   

    /*import {drizzleReactHooks} from '@drizzle/react-plugin';

import LaboratorioRow from "./LaboratorioRow";
const {useDrizzle} = drizzleReactHooks;

const LaboratoriosBody = () => {
    const {useCacheCall} = useDrizzle();
    const laboratoriosLength = useCacheCall("ReslabEtsit", "laboratoriosLength") || 0;

    let rows = [];

    // de todos los puestos de un lab ( llamo a la funcion que he descrito )
    for (let i = 0; i < laboratoriosLength; i++) {
        rows.push(<LaboratorioRow key={"ab-"+i} laboratorioIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }
    return <tbody>{rows}</tbody>;

};

export default LaboratoriosBody;*/