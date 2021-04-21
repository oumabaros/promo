import { createStore } from 'redux';
import { PromoReducer } from './PromoReducer';

export const PromoDataStore = createStore(PromoReducer);
