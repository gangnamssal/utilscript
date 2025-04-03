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

// 엣지 케이스
type emptyObject = {};
type emptyObjectExpect = {
  key: string;
};

type existingKeyObject = {
  key: number;
};

type existingKeyObjectExpect = {
  key: string;
};

type readonlyObject = {
  readonly prop: string;
};

type readonlyObjectExpect = {
  readonly prop: string;
  newProp: boolean;
};

type cases = [
  Expect<Equal<Append<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<Append<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<Append<test3, 'moon', false | undefined>, testExpect3>>,

  // 엣지 케이스
  Expect<Equal<Append<emptyObject, 'key', string>, emptyObjectExpect>>,
  Expect<Equal<Append<existingKeyObject, 'key', string>, existingKeyObjectExpect>>,
  Expect<Equal<Append<readonlyObject, 'newProp', boolean>, readonlyObjectExpect>>,
  Expect<Equal<Append<{}, never, never>, {}>>,
  Expect<Equal<Append<{}, any, any>, { [key: string]: any }>>,
];
