import { Expect, Equal } from '../../src/commonness';
import { OmitByType } from '../../src/object';

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>
  >,
  Expect<
    Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>
  >,

  // 엣지 케이스
  Expect<Equal<OmitByType<{}, boolean>, {}>>,
  Expect<Equal<OmitByType<{ a: undefined }, undefined>, {}>>,
  Expect<Equal<OmitByType<{ a: null }, null>, {}>>,
  Expect<Equal<OmitByType<{ a: never }, never>, {}>>,
  Expect<Equal<OmitByType<{ a: unknown }, unknown>, {}>>,
  Expect<Equal<OmitByType<{ a: any }, any>, {}>>,
  Expect<Equal<OmitByType<{ a: string | number }, string>, { a: number }>>,
  Expect<Equal<OmitByType<{ a: string | number }, number>, { a: string }>>,
  Expect<Equal<OmitByType<{ a: string | number }, string | number>, {}>>,
];
