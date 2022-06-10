import {drizzleReactHooks} from "@drizzle/react-plugin";

import ReservaPuestoRow from "./ReservarPuestoRow";

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestosBody = ({indexlab,fecha}) => {
    const {useCacheCall} = useDrizzle();

    const ml = useCacheCall("ReslabEtsit", "puestosDelLaboratorioLength") || 0;

    //preguntar antes cual es el valor de puestos para esa posición delaboratorio . Si ml no lo tenemos devuelvo un array vacio 
    //
    let puestosIndices = useCacheCall(['ReslabEtsit'], call => {
        if (!ml) { return []; }

        let puestosIndices = [];
        
        for (let pi = 0; pi < ml; pi++) {
            const puestoIndice = call("ReslabEtsit", "puestosDelLaboratorio",indexlab,pi) ;   
            if(typeof  puestoIndice !== "undefined" ) {
                puestosIndices.push(puestoIndice);
            
        }}
        return puestosIndices;
    });

    let rows = [];
    for (let i = 0; i < puestosIndices; i++) {
        rows.push(<ReservaPuestoRow key={"cb-"+i} puestoIndice={i} fecha={fecha} />);
    }

    return <tbody>{rows}</tbody>;
};

export default ReservarPuestosBody;