import { Append } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  moon: false | undefined;
};

type cases = [
  Expect<Equal<Append<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<Append<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<Append<test3, 'moon', false | undefined>, testExpect3>>,
];
