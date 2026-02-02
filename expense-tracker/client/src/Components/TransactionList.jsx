import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import { AnimatePresence, motion } from 'framer-motion';

export const TransactionList = () => {
  const { transactions = [], getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold border-b border-white/10 pb-2 mb-4 text-white/90">History</h3>
      <ul className="mb-10 w-full relative">
        <AnimatePresence mode="popLayout">
          {transactions.map(transaction => (
            <Transaction
              key={transaction._id}
              transaction={transaction}
            />
          ))}
        </AnimatePresence>
        {transactions.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center text-gray-400 italic mt-5"
          >
            No transactions yet
          </motion.p>
        )}
      </ul>
    </div>
  );
};