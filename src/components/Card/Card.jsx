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
            <h3 className="description">{transactions.description}</h3>
            <p className="type">{transactions.type}</p>
            <p className="value">R$ {transactions.value}</p>
            <button className="remove"
                onClick={() => handleTransaction(transactions)}> <img src={trash} alt="" /> </button>
        </li>
    )
}

export default Card