import { MResult } from './Result';
import { MButton } from './Button';

const resultAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const btnAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export const ResultsList = ({ items, onSubmit }) => {
  return (
    <>
      <div className="result-list">
        {items.map((item, index) => (
          <MResult variants={resultAnimation} custom={index + 4} key={index} {...item} />
        ))}
      </div>
      <MButton variants={btnAnimation} custom={6} onClick={onSubmit} />
    </>
  );
};
