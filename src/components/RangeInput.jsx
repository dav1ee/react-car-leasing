import { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const RangeInput = forwardRef(({ idx, name, value, min, max, right, updateInput }, ref) => {
  return (
    <>
      {name === 'Первоначальный взнос' ? (
        <div className="range-input" ref={ref}>
          <label>{name}</label>
          <input
            className="range-input__field"
            type="number"
            value={right}
            onChange={(e) => console.log(e)}
          />
          <input
            className="range-input__slider"
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => updateInput(e, idx)}
          />
          <div className="range-input__right">{value}%</div>
        </div>
      ) : (
        <div className="range-input" ref={ref}>
          <label>{name}</label>
          <input
            className="range-input__field"
            type="number"
            value={value}
            onChange={(e) => updateInput(e, idx)}
          />
          <input
            className="range-input__slider"
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => updateInput(e, idx)}
          />
          <div className="range-input__right">{right}</div>
        </div>
      )}
    </>
  );
});

export const MRangeInput = motion(RangeInput);
