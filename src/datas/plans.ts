import type { IPlan } from '@/types/datas/plans';

const plans: IPlan[] = [
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

export default plans;
