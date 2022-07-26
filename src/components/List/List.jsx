import Card from "../Card/Card"
import "./styles.css"

function List({ listTransactions, handleTransaction, NoCard, trash }) {

    return (
        listTransactions.length > 0 ?
            <ul className="list-ul">
                {listTransactions.map((transaction, index) =>
                    <Card transactions={transaction}
                        handleTransaction={handleTransaction}
                        index={index} trash={trash} />)}
            </ul>
            :
            <div>
                <p className="no-text">Você ainda não possui nenhum lançamento</p>
                <img className="no-card" src={NoCard} alt="" />
            </div>


    )


}

export default List