import { useState } from "react"
import "./styles.css"

function Form({ addTransaction, R$ }) {

    const [valueInput, setValueInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [selectInput, setSelectInput] = useState("Entrada")

    return (
        <form className="form">
            <div className="form-header">
                <label className="label-description" htmlFor="input">Descrição</label>
                <input className="input-description" type="text"
                    placeholder="Digite aqui sua descrição"
                    value={descriptionInput}
                    onChange={(event) => setDescriptionInput(event.target.value)} />
                <p className="example">Ex: Compra de roupas</p>
            </div>
            <div className="form-footer">
                <label className="label-value" htmlFor="input-number">Valor</label>
                <input className="input-value" type="number"
                    placeholder="1" value={valueInput}
                    onChange={(event) => setValueInput(event.target.value)} />
                <img className="reais" src={R$} />
                <label className="label-selectValue"
                    htmlFor="select">Tipo de valor</label>
                <select className="select-value"
                    value={selectInput} onChange={(event) =>
                        setSelectInput(event.target.value)} >
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
            </div>
            <button className="submit-form" type="submit" onClick={(event) => {
                event.preventDefault();
                addTransaction(valueInput, descriptionInput, selectInput);
                setDescriptionInput("")
                setValueInput("")
            }}>Inserir valor</button>
        </form>
    )
}

export default Form