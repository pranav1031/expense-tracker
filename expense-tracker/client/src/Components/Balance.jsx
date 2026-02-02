import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

export const Balance = () => {
  const { transactions = [] } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  // Animation for the counter
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => numberWithCommas(latest.toFixed(2)));
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, parseFloat(total), { duration: 1 });
    return () => controls.stop();
  }, [total]);

  return (
    <div className="mb-8 text-center p-4">
      <h4 className="text-gray-300 text-sm uppercase tracking-wider mb-2">Your Balance</h4>
      <div className="flex justify-center items-center text-4xl font-bold tracking-tight text-white drop-shadow-lg">
        <span className="mr-1">₹</span>
        <motion.span>{rounded}</motion.span>
      </div>
    </div>
  );
};