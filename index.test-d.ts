import {expectType} from 'tsd';
import integer from './index.js';

expectType<number>(integer());
expectType<number>(integer({min: 0}));
expectType<number>(integer({min: 0, max: 10}));
