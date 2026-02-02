import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions = [] } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="flex justify-between gap-4 my-8">
      <div className="flex-1 text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-200">
        <h4 className="text-sm font-semibold uppercase text-gray-300 mb-1 tracking-wide">Income</h4>
        <p className="text-xl font-bold text-emerald-400 tracking-wide">
          ₹{numberWithCommas(income)}
        </p>
      </div>
      <div className="flex-1 text-center p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-200">
        <h4 className="text-sm font-semibold uppercase text-gray-300 mb-1 tracking-wide">Expense</h4>
        <p className="text-xl font-bold text-rose-400 tracking-wide">
          ₹{numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};