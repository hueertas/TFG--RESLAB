import ReservarPuestosHead from "./ReservarPuestosHead";
import ReservarPuestosBody from "./ReservarPuestosBody";


const ReservarPuestos = ({indexlab,fecha}) => {

    

    return (
       /* <section className="AppReservaPuestos">
            <h2>Reservar Puestos</h2>
            <table>
                <ReservarPuestosHead />
                <ReservarPuestosBody />
            </table>

            
        </section>*/

        <p> este es el laboratorio : {indexlab} en la fecha : {fecha}</p>
    );
};


export default ReservarPuestos;