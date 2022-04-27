import { defineStore } from 'pinia';

import type { ICountry } from './../types/datas/countries';
import type { IPlan } from './../types/datas/plans';
import countries from './../datas/countries';
import plans from './../datas/plans';

interface IState {
  name: string;
  age: number | null;
  selectedCountry: ICountry | null;
  selectedPlan: IPlan | null;
}

export const useFormStore = defineStore({
  id: 'form',
  state: (): IState => ({
    name: '',
    age: null,
    selectedCountry: countries[0],
    selectedPlan: plans[0],
  }),
});
