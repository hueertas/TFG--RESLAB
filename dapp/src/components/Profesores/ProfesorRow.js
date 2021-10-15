import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const ProfesorRow = (props) => {
    const {drizzle, drizzleState, profesorIndex, profesorAddr} = props;
    return <tr key={"ALU-" + profesorIndex}>
        <th>A<sub>{profesorIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"datosProfesor"}
            methodArgs={[profesorAddr]}
            render={datos => <>
                <td>{datos.nombreP}</td>
                <td>{datos.emailP}</td>
                <td>{datos.asignaturaP}</td>
                <td>{datos.departamentoP}</td>
            </>}
        />

        <tdp>{profesorAddr}</tdp>
    </tr>;
};

export default ProfesorRow;