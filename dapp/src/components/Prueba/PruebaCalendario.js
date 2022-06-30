
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import React, {useState} from 'react';
import moment from 'moment';




   
   
   
    const PruebaCalendario = () => {

    
         
    
        const [dateState, setDateState] = useState(new Date(moment().startOf('day')));
        const changeDate = (e) => {
            setDateState(e)
        }
        
        
        
        
/*
        const [dateState, setDateState] = useState(new Date());
        const changeDate = (e) => {
            setDateState(e)
        }
        
    */

    // var datehora = moment().startOf(dateState);

        var myDate =  new Date(dateState); ; // Your timezone!
        var myEpoch = myDate.getTime()/1000.0;


    
        return <>


                <Calendar 
                value={dateState}
                onChange={changeDate}/>

                <p>El día seleccionado es: <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                <p>El día seleccionado en formato uint es : <b>{myEpoch}</b></p>

            </>
        };


    export default PruebaCalendario;


