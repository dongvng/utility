import { sortAsc, sortDesc, sumByFn } from './array';

const arr = [
  {
    name: 'NA',
    age: 22,
    dob: '8/6/2000',
    bankBalance: 200000,
  },
  {
    name: 'george',
    age: 30,
    dob: '4/3/1993',
    bankBalance: 140000,
  },
  {
    name: 'Arteta',
    age: 40,
    dob: '2/5/1980',
    bankBalance: 640000,
  },
];
test('sortDesc', () => {
  const res = sortDesc(arr, 'name');
  expect(res).toMatchInlineSnapshot(`
    Array [
      Object {
        "age": 30,
        "bankBalance": 140000,
        "dob": "4/3/1993",
        "name": "george",
      },
      Object {
        "age": 22,
        "bankBalance": 200000,
        "dob": "8/6/2000",
        "name": "NA",
      },
      Object {
        "age": 40,
        "bankBalance": 640000,
        "dob": "2/5/1980",
        "name": "Arteta",
      },
    ]
  `);
});

test('sortAsc', () => {
  const res = sortAsc(arr, 'name');
  expect(res).toMatchInlineSnapshot(`
    Array [
      Object {
        "age": 40,
        "bankBalance": 640000,
        "dob": "2/5/1980",
        "name": "Arteta",
      },
      Object {
        "age": 22,
        "bankBalance": 200000,
        "dob": "8/6/2000",
        "name": "NA",
      },
      Object {
        "age": 30,
        "bankBalance": 140000,
        "dob": "4/3/1993",
        "name": "george",
      },
    ]
  `);
});

test('sumByFn', () => {
  const res = sumByFn(arr, (i) => i.bankBalance);
  expect(res).toBe(980000);
});
