import ReservarPuestosHead from "./ReservarPuestosHead";
import ReservarPuestosBody from "./ReservarPuestosBody";


const ReservarPuestos = () => {

    return (
        <section className="AppReservaPuestos">
            <h2>Reservar Puestos</h2>
            <table>
                <ReservarPuestosHead />
                <ReservarPuestosBody />
            </table>

            
        </section>
    );
};


export default ReservarPuestos;