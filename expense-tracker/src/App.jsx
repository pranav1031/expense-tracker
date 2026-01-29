import React from 'react'
import { Header } from "./Components/Header"
import { Balance } from './Components/balance'
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TransactionList } from './Components/TransactionList'
import './App.css'
import { AddTransaction } from './Components/AddTransaction'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
    
  )
}

export default App
