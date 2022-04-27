const BASE_NUMBER = 10;

const calculatePremium = (age: number, rate: number) =>
  BASE_NUMBER * age * rate;

const calculateAdditionalPayment = (
  age: number,
  rate: number,
  percentageOfAdditionalPayment: number
) => calculatePremium(age, rate) * (percentageOfAdditionalPayment / 100);

const calculateTotalPremium = (
  age: number,
  rate: number,
  percentageOfAdditionalPayment: number
) =>
  calculatePremium(age, rate) +
  calculateAdditionalPayment(age, rate, percentageOfAdditionalPayment);

export { calculatePremium, calculateAdditionalPayment, calculateTotalPremium };
