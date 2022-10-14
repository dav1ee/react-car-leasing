import React from 'react';
import { motion } from 'framer-motion';

import { InputList } from './components/InputList';
import { ResultsList } from './components/ResultsList';

import './scss/app.scss';

const titleAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const App = () => {
  const [inputs, setInputs] = React.useState([
    {
      name: 'Стоимость автомобиля',
      value: 3300000,
      min: 1000000,
      max: 6000000,
      right: '₽',
    },
    {
      name: 'Первоначальный взнос',
      value: 13,
      min: 10,
      max: 60,
      right: 420000,
    },
    {
      name: 'Срок лизинга',
      value: 60,
      min: 1,
      max: 60,
      right: 'мес.',
    },
  ]);

  const [results, setResults] = React.useState([
    {
      name: 'Сумма договора лизинга',
      value: 4467313,
    },
    {
      name: 'Ежемесячный платеж от',
      value: 114455,
    },
  ]);

  const updateInput = (e, idx) => {
    let newState = [...inputs];
    let input = newState[idx];
    input.value = +e.target.value;

    if (input.value > input.max) {
      input.value = input.max;
    }

    if (input.value < input.min) {
      input.value = input.min;
    }

    newState[idx] = input;

    setInputs(newState);
    updateInitialPayment();
    countLeaseTerm();
    countMonthlyPayment();
  };

  const updateInitialPayment = () => {
    let newState = [...inputs];
    let input = newState[1];
    input.right = ((input.value / 100) * newState[0].value).toFixed(0);
    newState[1] = input;

    setInputs(newState);
  };

  const countLeaseTerm = () => {
    const initialPayment = +[...inputs][1].right;
    const months = [...inputs][2].value;
    const monthlyPayment = [...results][1].value;
    let leaseTerm = [...results][0];
    let newState = [...results];

    leaseTerm.value = initialPayment + months * monthlyPayment;
    newState[0] = leaseTerm;

    setResults(newState);
  };

  const countMonthlyPayment = () => {
    const initialPayment = +[...inputs][1].right;
    const carPrice = [...inputs][0].value;
    const months = [...inputs][2].value;
    let monthlyPayment = [...results][1];
    let newState = [...results];

    monthlyPayment.value = (
      (carPrice - initialPayment) *
      ((0.035 * Math.pow(1 + 0.035, months)) / (Math.pow(1 + 0.035, months) - 1))
    ).toFixed(0);
    newState[1] = monthlyPayment;

    setResults(newState);
  };

  const onSubmit = async () => {
    const res = await fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        car_coast: inputs[0].value,
        initial_payment: inputs[1].right,
        initial_payment_percent: inputs[1].value,
        lease_term: inputs[2].value,
        total_sum: results[0].value,
        monthly_payment: results[1].value,
      }),
    });
    const result = await res.json();

    console.log(result);
  };

  return (
    <motion.div initial="hidden" whileInView="visible" className="container">
      <motion.h1 variants={titleAnimation} className="title">
        Рассчитайте стоимость автомобиля в лизинг
      </motion.h1>
      <div className="wrapper">
        <InputList items={inputs} updateInput={updateInput} />
        <ResultsList items={results} onSubmit={onSubmit} />
      </div>
    </motion.div>
  );
};

export default App;
