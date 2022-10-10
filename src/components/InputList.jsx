import { RangeInput } from './RangeInput';

export const InputList = ({ items, updateInput }) =>
  items.map((item, idx) => <RangeInput key={idx} idx={idx} {...item} updateInput={updateInput} />);
