import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const ReservarPuestosHead = () => {
    const {useCacheCall} = useDrizzle();

    let thead = [];
    thead.push(<th key={"chae"}>P/T</th>);
    thead.push(<th key={"chn"}>Nombre Puestos</th>);

    const el = useCacheCall("ReslabEtsit", "turnosLength") || 0;
    for (let i = 0; i < el; i++) {
        thead.push(<th key={"chev-" + i}>Turno<sub>{i}</sub></th>);
    }

    return <thead><tr>{thead}</tr></thead>;
};

export default ReservarPuestosHead;
