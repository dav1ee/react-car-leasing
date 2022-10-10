import { Result } from './Result';
import { Button } from './Button';

export const ResultsList = ({ items, onSubmit }) => {
  return (
    <>
      <div className="result-list">
        {items.map((item, index) => (
          <Result key={index} {...item} />
        ))}
      </div>
      <Button onClick={onSubmit} />
    </>
  );
};
