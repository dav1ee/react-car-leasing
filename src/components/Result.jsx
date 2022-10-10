import { getFormattedPrice } from '../utils/getFormattedPrice';

export const Result = ({ name, value }) => {
  const price = getFormattedPrice(value);

  return (
    <div className="result">
      <div className="result__title">{name}</div>
      <div className="result__value">{value} ₽</div>
    </div>
  );
};
