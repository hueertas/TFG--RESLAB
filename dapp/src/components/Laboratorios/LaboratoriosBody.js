
import {newContextComponents} from "@drizzle/react-components";

import LaboratorioRow from "./LaboratorioRow";



const LaboratoriosBody = (props) => {
    const {drizzle, drizzleState,laboratoriosLength} = props;
    let rows = [];
    for (let i = 0; i < laboratoriosLength; i++) {
        rows.push(<LaboratorioRow
            drizzle={drizzle}
            drizzleState={drizzleState}
            laboratorioIndex={i}/>);
}
return <tbody>{rows}</tbody>;
};


export default LaboratoriosBody;