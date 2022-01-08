import fakeInteger from './index.js';
import test from 'ava';

test('fakeInteger return type to be number', t => {
	t.is(typeof fakeInteger(), 'number');
});

test('fakeInteger with number min 0 return type to be number', t => {
	t.is(typeof fakeInteger(0), 'number');
});

test('fakeInteger with number min 0 and max 10 return type to be number', t => {
	t.is(typeof fakeInteger(0, 10), 'number');
});

test('fakeInteger with number min 0 and max 10 less than 11', t => {
	t.true(fakeInteger(0, 10) < 11);
});

test('fakeInteger with string to thow error on string', t => {
  const error = t.throws(() => {
		fakeInteger('string')
	}, {instanceOf: TypeError});

	t.is(error.message, 'Expected all arguments to be numbers.');
});

test('fakeInteger with string to thow error on min > max', t => {
	const error = t.throws(() => {
		  fakeInteger(10, 0)
	  }, {instanceOf: TypeError});
  
	  t.is(error.message, 'Min cannot be greater than Max.');
  });