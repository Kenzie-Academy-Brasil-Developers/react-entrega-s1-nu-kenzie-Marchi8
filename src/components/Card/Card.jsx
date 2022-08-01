import "./styles.css"


function Card({ transactions, handleTransaction, index, trash }) {
    return (
        <li className="card" key={index}>
            {
                transactions.type == "Entrada" ?
                    <div className="entry">.</div>
                    :
                    <div className="expense">.</div>
            }
            <div className="card-description">
                <h3 className="description">{transactions.description}</h3>
                <p className="type">{transactions.type}</p>
            </div>
            <div className="card-value">
                <p className="value">R$ {transactions.value}</p>
                <button className="remove"
                    onClick={() =>
                        handleTransaction(transactions)}>
                    <img src={trash} alt="" />
                </button>
            </div>

        </li>
    )
}

export default Card