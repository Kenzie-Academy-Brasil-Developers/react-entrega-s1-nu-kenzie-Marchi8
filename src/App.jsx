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
// import { Toast } from 'react-toastify/dist/components';

function App() {

  const [login, setLogin] = useState(false)
  const [listTransactions, setListTransactions] = useState([])
  const [filter, setFilter] = useState([])

  function addTransaction(valueInput, descriptionInput, selectInput) {
    if (descriptionInput === "" || valueInput === "" || selectInput === "") {
      alert("Preencha todos os campos");
    } else if (valueInput.includes("-")) {
      alert("Não é possível adicionar valores negativos");
    }
    else {
      setListTransactions(
        [...listTransactions, {
          description: descriptionInput,
          type: selectInput, value: valueInput
        }]
      )
    }
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
            <div className="logo">
              <img src={NuKenzieLog} alt="" />
            </div>
            <img className="Log-title" src={logTitle} alt="" />
            <p className="Log-paragraph">de forma rápida e segura</p>
            <button onClick={Login} className="Login" >Iniciar</button>
          </div>
          <div className="Log-img">
            <img className="Log-block" src={LoginPng} alt="" />
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
          <section className="section">
            <Form addTransaction={addTransaction} R$={R$} />
            <TotalMoney listTransactions={listTransactions} />
          </section>
          <main className="main-content">
            <List filter={filter} setFilter={setFilter} listTransactions={listTransactions} handleTransaction={handleTransaction} NoCard={Nocard} trash={trash} />
          </main>
        </div>
      </>
  );
}

export default App;