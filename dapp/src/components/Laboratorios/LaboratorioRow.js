/*import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const laboratorioRow = (props) => {
    const {drizzle, drizzleState, laboratorioIndex, laboratorioAddr} = props;
    return <tr key={"ALU-" + laboratorioIndex}>
        <th>A<sub>{laboratorioIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"ReslabEtsit"}
            method={"datoslaboratorio"}
            methodArgs={[laboratorioAddr]}
            render={datos => <>
                <td>{datos.laboratorio}</td>
                
            </>}
        />

        <td>{laboratorioAddr}</td>
    </tr>;
};

export default laboratorioRow;*/


import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const laboratorioRow = (props) => {
    const {drizzle, drizzleState, laboratorioIndex} = props;
    return  <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"laboratoriosRegistrados"} // array laboratorios
                methodArgs={[laboratorioIndex]}// rellenar con las laboratorio coo los alumnos
                render={lab =>
                    <tr key={"Asig" + laboratorioIndex  }>
                      <th>E<sub>{laboratorioIndex}</sub></th>
                      <td>{lab.nombreL}</td>
                      <td>{lab.asignaturaL}</td>
                 
                        
                      
                    </tr>
            
                }

    
            />;      
    
};

export default laboratorioRow;

//AYUDA LINEA 49 !!! COMO METER LOS PUESTOS !
/*
        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"labPuestos"} // metodo de laboratorios mapping ( adrress=> DatosLaboratorio) public datoslaboratorios
                methodArgs={[laboratorioAddr, ei]}// rellenar con las laboratorio coo los alumnos
                render={lab =>
                    <td key={"p2-" + laboratorioIndex + "-" + ei}>
                        {lab.maxPuestos }
                        
                    </td>
                }
            />)
    }  */


/*import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const laboratorioRow = (props) => {
    const {drizzle, drizzleState, laboratorioIndex, laboratorioAddr, laboratoriosLength} = props;

    let cells = [];

    for (let ei = 0; ei < laboratoriosLength; ei++) {

        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"ReslabEtsit"}
                method={"labPuestos"} // array laboratorios
                methodArgs={[laboratorioAddr,ei]}// rellenar con las laboratorio coo los alumnos
                render={puesto =>
                    <td key={"p2-" + laboratorioIndex + "-" + ei }>
                      
                    </td>
                }
            />)
    }

    return (
        <tr key={"d" + laboratorioIndex}>
            <th>A<sub>{laboratorioIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"ReslabEtsit"}
                              method={"Datoslaboratorio"}
                              methodArgs={[laboratorioAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            /></td>

            {cells}
        </tr>
    );
};

export default laboratorioRow;*/