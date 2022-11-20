import MisDatos from "./MisDatos";
import MisReservas from "./MisReservas";

const MisCosas = (indexlab,fecha) => {

    return <section className="AppMisCosas">
        <h2>Mis Cosas</h2>
        <MisDatos/>
        {<MisReservas indexlab={indexlab} fecha={fecha} />}
    </section>;
}

export default MisCosas;