import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Button = forwardRef(({ onClick }, ref) => (
  <button className="button" onClick={onClick} ref={ref}>
    Оставить заявку
  </button>
));

export const MButton = motion(Button);
