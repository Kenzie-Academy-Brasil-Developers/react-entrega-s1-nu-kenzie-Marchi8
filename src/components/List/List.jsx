import { useEffect } from "react";
import Card from "../Card/Card"
import "./styles.css"

function List({ filter, setFilter, listTransactions, handleTransaction, NoCard, trash }) {

    const showAllTransactions = () => {
        setFilter(listTransactions);
    };

    useEffect(showAllTransactions, [listTransactions,]);

    const filterAll = () => {
        setFilter(listTransactions);
    };

    const filterEntry = () => {
        const filtering = listTransactions.filter(
            (transaction) => transaction.type === "Entrada"
        );
        setFilter(filtering);
    };

    const filterExpense = () => {
        const filtering = listTransactions.filter(
            (transaction) => {
                return transaction.type === "Despesa"
            }
        );
        setFilter(filtering);
    };

    return (
        <>
            <div className="header-list">
                <h3 className="resume">Resumo Financeiro</h3>
                <button onClick={filterAll}
                    className="button-all">Todos</button>
                <button onClick={filterEntry}
                    className="button-entry" >Entradas</button>
                <button onClick={filterExpense}
                    className="button-expense" >Despesas</button>
            </div>
            {listTransactions.length > 0 ?
                <ul className="list-ul">
                    {filter.map((transaction, index) =>
                        <Card transactions={transaction}
                            handleTransaction={handleTransaction}
                            key={index} trash={trash} filter={filter} />)}
                </ul>
                :
                <div className="empty-div">
                    <p className="no-text">Você ainda não possui nenhum lançamento</p>
                    <img className="no-card" src={NoCard} alt="" />
                </div>}
        </>
    )
}

export default List