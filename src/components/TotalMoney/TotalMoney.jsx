import "./styles.css"

function TotalMoney({ listTransactions }) {
    return (
        listTransactions.length > 0 ?
            <div className="total-money">
                <div className="total-section">
                    <p className="total-title">Valor total:</p>
                    <p className="total-text">O valor se refere ao saldo</p>
                </div>
                <span className="total">
                    $ {listTransactions.reduce((acc, current) => {
                        if (current.type == "Entrada") {
                            return acc + parseFloat(current.value)
                        }
                        return acc - parseFloat(current.value)
                    }, 0).toFixed(2).replace(".", ",")}
                </span>
            </div>
            :
            <></>
    )
}

export default TotalMoney