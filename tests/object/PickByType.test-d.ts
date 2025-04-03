import { Equal, Expect } from '../../src/commonness';
import { PickByType } from '../../src/object';

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,

  // 엣지 케이스
  Expect<Equal<PickByType<{}, boolean>, {}>>,
  Expect<Equal<PickByType<{ a: undefined }, undefined>, { a: undefined }>>,
  Expect<Equal<PickByType<{ a: null }, null>, { a: null }>>,
  Expect<Equal<PickByType<{ a: never }, never>, { a: never }>>,
  Expect<Equal<PickByType<{ a: unknown }, unknown>, { a: unknown }>>,
  Expect<Equal<PickByType<{ a: any }, any>, { a: any }>>,
  Expect<Equal<PickByType<{ a: string | number }, string>, {}>>,
  Expect<Equal<PickByType<{ a: string | number }, string | number>, { a: string | number }>>,
  Expect<Equal<PickByType<{ [k: string]: boolean }, boolean>, { [k: string]: boolean }>>,
  Expect<Equal<PickByType<{ [k: number]: string }, string>, { [k: number]: string }>>,
];
