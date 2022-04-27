import type { IPlan } from '@/types/datas/plans';

const MAX_AGE = 99;

const PLANS: IPlan[] = [
  {
    name: 'Standard',
    percentageOfAdditionalPayment: 0,
  },
  {
    name: 'Safe',
    percentageOfAdditionalPayment: 50,
  },
  {
    name: 'Super Safe',
    percentageOfAdditionalPayment: 75,
  },
];

export { PLANS, MAX_AGE };
