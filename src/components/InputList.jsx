import { MRangeInput } from './RangeInput';

const inputAnimation = {
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

export const InputList = ({ items, updateInput }) =>
  items.map((item, idx) => (
    <MRangeInput
      variants={inputAnimation}
      custom={idx + 1}
      key={idx}
      idx={idx}
      {...item}
      updateInput={updateInput}
    />
  ));
