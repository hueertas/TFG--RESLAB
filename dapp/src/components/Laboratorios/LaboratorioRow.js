


import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const LaboratorioRow = (props) => {
    const {drizzle, drizzleState, laboratorioIndex } = props;


    return <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"ReslabEtsit"}
                        method={"laboratoriosRegistrados"}
                        methodArgs={[laboratorioIndex]}
                        render={ev =>
                            <tr key={"LAB" + laboratorioIndex}>
                                <th>L<sub>{laboratorioIndex}</sub></th>
                                <td>{ev.nombreL}</td>
                                <td>{ev.labId}</td>
                               

                              
                            </tr>
                        }
                    />;
                };

export default LaboratorioRow;



