import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable(){

    useEffect(()=> {
        api.get('transactions')
        .then(response => console.log(response.data));
    },[]);


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/05/2024</td>
                    </tr>
                    <tr>
                        <td>Alugle</td>
                        <td className="withdraw">R$ -1.100</td>
                        <td>Casa</td>
                        <td>15/04/2024</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}