import {drizzleReactHooks} from "@drizzle/react-plugin";

import ReservaPuestoRow from "./ReservarPuestoRow";

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestosBody = () => {
    const {useCacheCall} = useDrizzle();

    const ml = useCacheCall("ReslabEtsit", "puestosLength") || 0;

    let rows = [];
    for (let i = 0; i < ml; i++) {
        rows.push(<ReservaPuestoRow key={"cb-"+i} puestoIndex={i}/>);
    }

    return <tbody>{rows}</tbody>;
};

export default ReservarPuestosBody;