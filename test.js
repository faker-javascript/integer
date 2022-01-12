import test from 'ava';
import integer from './index.js';

test('integer return type to be number', t => {
    t.is(typeof integer(), 'number');
});

test('integer with number min 0 return type to be number', t => {
    t.is(typeof integer({min: 0}), 'number');
});

test('integer with number min 0 and max 10 return type to be number', t => {
    t.is(typeof integer({min: 0, max: 10}), 'number');
});

test('integer with number min 0 and max 10 less than 11', t => {
    t.true(integer({min: 0, max: 10}) < 11);
});

test('integer with string to thow error on min > max', t => {
    const error = t.throws(() => {
        integer({min: 10, max: 0});
    }, {instanceOf: TypeError});

    t.is(error.message, 'Min cannot be greater than Max.');
});
