import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <>
      <h3 className="text-xl font-bold border-b border-white/10 pb-2 mb-4 text-white/90">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">Text</label>
          <input 
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            id="text" 
            placeholder='Enter text...' 
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
            Amount <br />
            <span className="text-xs text-gray-400">(negative - expense, positive - income)</span>
          </label>
          <input 
            type='number' 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            id="amount" 
            placeholder='Enter amount...' 
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>
        <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-violet-700 hover:to-indigo-700 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200">
          Add transaction
        </button>
      </form>
    </>
  )
}
