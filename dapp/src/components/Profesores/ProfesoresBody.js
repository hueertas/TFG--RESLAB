import {newContextComponents} from "@drizzle/react-components";

import ProfesorRow from "./ProfesorRow";

const {ContractData} = newContextComponents;

const ProfesoresBody = (props) => {
    const {drizzle, drizzleState, profesRegistradosLength} = props;
    let rows = [];
    for (let i = 0; i < profesRegistradosLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"profesRegistrados"}
            methodArgs={[i]}
            render={addr => <ProfesorRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       ProfesorIndex={i}
                                       ProfesorAddr={addr}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default ProfesoresBody;