/*import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AsignaturaRow = (props) => {
    const {drizzle, drizzleState, asignaturaIndex, asignaturaAddr} = props;
    return <tr key={"ALU-" + asignaturaIndex}>
        <th>A<sub>{asignaturaIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"datosAsignatura"}
            methodArgs={[asignaturaAddr]}
            render={datos => <>
                <td>{datos.laboratorio}</td>
                
            </>}
        />

        <td>{asignaturaAddr}</td>
    </tr>;
};

export default AsignaturaRow;*/


import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AsignaturaRow = (props) => {
    const {drizzle, drizzleState, asignaturaIndex, asignaturaAddr, laboratoriosLength} = props;

    let cells = [];

    for (let ei = 0; ei < laboratoriosLength; ei++) {

        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"labPuestos"} // array asignaturas
                methodArgs={[asignaturaAddr,ei]}// rellenar con las asignatura coo los alumnos
                render={puesto =>
                    <td key={"p2-" + asignaturaIndex + "-" + ei }>
                      
                    </td>
                }
            />)
    }

    return (
        <tr key={"d" + asignaturaIndex}>
            <th>A<sub>{asignaturaIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"ReslabEtsit"}
                              method={"DatosAsignatura"}
                              methodArgs={[asignaturaAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            /></td>

            {cells}
        </tr>
    );
};

export default AsignaturaRow;

//AYUDA LINEA 49 !!! COMO METER LOS PUESTOS !
/*
        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"labPuestos"} // metodo de laboratorios mapping ( adrress=> DatosLaboratorio) public datoslaboratorios
                methodArgs={[asignaturaAddr, ei]}// rellenar con las asignatura coo los alumnos
                render={lab =>
                    <td key={"p2-" + asignaturaIndex + "-" + ei}>
                        {lab.maxPuestos }
                        
                    </td>
                }
            />)
    }  */


/*import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AsignaturaRow = (props) => {
    const {drizzle, drizzleState, asignaturaIndex, asignaturaAddr, laboratoriosLength} = props;

    let cells = [];

    for (let ei = 0; ei < laboratoriosLength; ei++) {

        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratorios"} // array asignaturas
                methodArgs={[asignaturaAddr, ei]}// rellenar con las asignatura coo los alumnos
                render={lab =>
                    <td key={"p2-" + asignaturaIndex + "-" + ei}>
                        
                        
                    </td>
                }
            />)
    }

    return (
        <tr key={"d" + asignaturaIndex}>
            <th>A<sub>{asignaturaIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"ReslabEtsit"}
                              method={"DatosAsignatura"}
                              methodArgs={[asignaturaAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            /></td>

            {cells}
        </tr>
    );
};

export default AsignaturaRow;*/