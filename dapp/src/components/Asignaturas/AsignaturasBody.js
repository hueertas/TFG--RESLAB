
import {newContextComponents} from "@drizzle/react-components";

import AsignaturaRow from "./AsignaturaRow";

const {ContractData} = newContextComponents;

const AsignaturasBody = (props) => {
    const {drizzle, drizzleState,asignaturasRegistradasLength,laboratoriosLength} = props;
    let rows = [];
    for (let i = 0; i < asignaturasRegistradasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"asignaturasRegistradas"}
            methodArgs={[i]}
            render={addr => <AsignaturaRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       asignaturaIndex={i}
                                       asignaturaAddr={addr}
                                       laboratoriosLength={laboratoriosLength}/>}
            
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default AsignaturasBody;