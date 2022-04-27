import { defineStore } from 'pinia';

import type { ICountry } from './../types/datas/countries';
import type { IPlan } from './../types/datas/plans';
import countries from './../datas/countries';
import { PLANS } from './../datas/plans';

interface IState {
  name: string;
  age: number | null;
  selectedCountry: ICountry | null;
  selectedPlan: IPlan | null;
}

export const useFormStore = defineStore({
  id: 'form',
  state: (): IState => {
    return {
      name: '',
      age: null,
      selectedCountry: countries[0],
      selectedPlan: PLANS[0],
    };
  },
});
