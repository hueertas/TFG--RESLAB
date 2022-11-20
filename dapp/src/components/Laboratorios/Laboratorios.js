import {drizzleReactHooks} from '@drizzle/react-plugin'
import {useParams, Link} from "react-router-dom";
import LaboratoriosHead from "./LaboratoriosHead";
import LaboratoriosBody from "./LaboratoriosBody";
import BuscaPuesto from "./BuscaPuesto";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';
import ReservarPuestos from '../ReservarPuestos/ReservarPuestos';
import MisReservas from '../MisCosas/MisReservas';


const {useDrizzle} = drizzleReactHooks;

export const Laboratorios = () => {
    
   
       
   
       return (
           <section className="AppLaboratorios">
            {/*<img className="laboratorios" src="/laboratorios.png"/>*/}
               <h2> Listado de Laboratorios</h2>
               
               <div className='tablaAsignaturasdiv'>
                <table className='tablaAsignaturas'>
                    <LaboratoriosHead/>
                    <LaboratoriosBody />
                </table>
               </div>

               <img className="covid" src="/covid free.png"/>
           </section>
       );
   };
   
   
   
   export const Laboratorio = () => {
    const {useCacheCall} = useDrizzle();
    
    let {index} = useParams();
    
    
   
    const datos = useCacheCall("ReslabEtsit", "laboratoriosRegistrados", index);
    /* const datos = useCacheCall("ReslabEtsit", "laboratoriosReservados", labindex,fechaindex);*/
    //const datospuesto = useCacheCall("ReslabEtsit", "puestosLaboratorioLength") || 0;
    const [dateState, setDateState] = useState(new Date(moment().startOf('day')));
    const changeDate = (e) => {
        setDateState(e)
      }
      
     



    var myDate =  new Date(dateState); ; // Your timezone!
    var myEpoch = myDate.getTime()/1000.0;

    /*let rows = [];
    for (let i = 0; i < datospuesto; i++) {
        rows.push(<Laboratorio key={"ab-"+i} laboratorioIndex={i}/>);
       //rows.push(<tr><td>{i}</td></tr>);

    }*/
    const el = useCacheCall("ReslabEtsit", "turnosLength") || 0;
    
    return <>


        <div className='AppAsignaturadiv'>
            <header className="AppAlumno">
                <h2>Laboratorio :
                </h2>
            </header>

            
    
            <ul className='ListaAsignatura'>
                
                <li><b>Nombre:</b> {datos?.nombreL ?? "Desconocido"}</li>
                <li><b>Asignatura</b> {datos?.asignaura ?? "Desconocido"}</li>
                {/*<li><b>Puestos correspondientes:</b>{rows}</li>*/}

                <li><b>Info:</b> {index}</li>
            </ul>

            <h1 className='Selectcalendar'>- Seleccione el día para reservar turno:</h1>

            <Calendar className='Selectcalendar'
            value={dateState}
            onChange={changeDate}/>

            <div className='diaselec'>

            <p>El día seleccionado es: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
            <p>El día seleccionado en formato uint es : <b>{myEpoch}</b></p>
            </div>

            
            {/*<p> el numero de turnos es {el}</p>*/}

            <Link className='volverLab' to="/laboratorios"><img className="volver" src="/volver.png"/></Link>

        </div>
        <div className='AppReservaPuestos'> 

       

        <ReservarPuestos  indexlab={index} fecha={myEpoch} NAsignatura={datos?.asignaura}/>
        <MisReservas  indexlab={index} fecha={moment(dateState).format('MMMM Do YYYY')}/>

         

        </div>
            
           {/*<Link to={`/reservarPuestos/${index}`}>Reservar el puesto </Link>*/}


      
           
    
           

        
       
        </>
    };


 