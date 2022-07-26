import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import TotalMoney from './components/TotalMoney/TotalMoney';
import NuKenzie from "./images/NuKenzie.png"
import NuKenzieLog from "./images/NuKenzieLog.png"
import logTitle from "./images/logTitle.png"
import LoginPng from "./images/login.png"
import Nocard from "./images/NoCard.png"
import R$ from "./images/value.png"
import trash from "./images/trash.png"

function App() {

  const [login, setLogin] = useState(false)

  const [listTransactions, setListTransactions] = useState([])
  // const [filteredTransactions, setFilteredTransactions] = useState(listTransactions)

  const filterEntry = listTransactions.filter(entry => entry.type == "Entrada")
  const filterExpense = listTransactions.filter(entry => entry.type == "Despesa")

  function addTransaction(valueInput, descriptionInput, selectInput) {
    setListTransactions(
      [...listTransactions, {
        description: descriptionInput,
        type: selectInput, value: valueInput
      }]
    )
  }

  function handleTransaction(transaction) {
    setListTransactions(listTransactions.filter(newTrasaction =>
      newTrasaction !== transaction))
  }

  function Login() {
    return setLogin(true)
  }

  function Logout() {
    return setLogin(false)
  }

  return (
    login == false ?
      <>
        <div className="container">
          <div className="App-log">
            <img src={NuKenzieLog} alt="" />
            <img className="Log-title" src={logTitle} alt="" />
            <p className="Log-paragraph">de forma rápida e segura</p>
            <button className="Login" onClick={Login}>Iniciar</button>
          </div>
          <div className="Log-img">
            <img src={LoginPng} alt="" />
          </div>
        </div>
      </>
      :
      <>
        <header className="header" >
          <img src={NuKenzie} alt="" />
          <button className="logout-button" onClick={Logout}>Início</button>
        </header>
        <div className="App">
          <Form addTransaction={addTransaction} R$={R$} />
          <TotalMoney listTransactions={listTransactions} />
          <main className="main-content">
            <div className="header-list">
              <h3 className="resume">Resumo Financeiro</h3>
              <button className="button-all">Todos</button>
              <button className="button-entry" onClick={() => setListTransactions(filterEntry)}>Entradas</button>
              <button className="button-expense" onClick={() => setListTransactions(filterExpense)}>Despesas</button>
            </div>
            <List listTransactions={listTransactions} handleTransaction={handleTransaction} NoCard={Nocard} trash={trash} />
          </main>
        </div>
      </>

  );
}

export default App;