import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { motion } from 'framer-motion';
import { Utensils, Home, Car, ShoppingBag, Film, Wallet, CircleDollarSign, Trash2, Zap } from 'lucide-react';

const getIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('food') || t.includes('dinner') || t.includes('lunch')) return <Utensils size={18} />;
  if (t.includes('rent') || t.includes('home') || t.includes('house')) return <Home size={18} />;
  if (t.includes('car') || t.includes('gas') || t.includes('uber') || t.includes('transport')) return <Car size={18} />;
  if (t.includes('shop') || t.includes('buy') || t.includes('clothes')) return <ShoppingBag size={18} />;
  if (t.includes('movie') || t.includes('cinema') || t.includes('game')) return <Film size={18} />;
  if (t.includes('salary') || t.includes('income') || t.includes('paycheck')) return <Wallet size={18} />;
  if (t.includes('electric') || t.includes('bill')) return <Zap size={18} />;
  return <CircleDollarSign size={18} />;
};

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const isExpense = transaction.amount < 0;
  
  return (
    <motion.li 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }} // Slide out to right on delete
      transition={{ duration: 0.3 }}
      className={`relative flex justify-between items-center bg-white rounded-lg p-4 shadow-sm my-3 border-l-4 group hover:shadow-md transition-shadow ${
        isExpense ? 'border-rose-500' : 'border-emerald-500'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${isExpense ? 'bg-rose-100 text-rose-500' : 'bg-emerald-100 text-emerald-500'}`}>
          {getIcon(transaction.text)}
        </div>
        <span className="font-medium text-slate-700 capitalize">{transaction.text}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className={`font-bold tracking-wide ${isExpense ? 'text-rose-600' : 'text-emerald-600'}`}>
          {sign}₹{numberWithCommas(Math.abs(transaction.amount))}
        </span>
        <button 
          onClick={() => deleteTransaction(transaction._id)} 
          className="text-gray-400 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 rounded hover:bg-rose-50"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.li>
  )
}