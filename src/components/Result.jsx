import { forwardRef } from 'react';
import { motion } from 'framer-motion';

import { getFormattedPrice } from '../utils/getFormattedPrice';

export const Result = forwardRef(({ name, value }, ref) => {
  const price = getFormattedPrice(value);

  return (
    <div className="result" ref={ref}>
      <div className="result__title">{name}</div>
      <div className="result__value">{value} ₽</div>
    </div>
  );
});

export const MResult = motion(Result);
