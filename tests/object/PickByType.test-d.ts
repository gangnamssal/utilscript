import { Equal, Expect } from '../../src/commonness';
import { PickByType } from '../../src/object';

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

// 기본 테스트 케이스
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

// 성능 테스트
interface LargeModel {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string;
  prop5: number;
  prop6: boolean;
  prop7: string;
  prop8: number;
  prop9: boolean;
  prop10: string;
  prop11: number;
  prop12: boolean;
  prop13: string;
  prop14: number;
  prop15: boolean;
  prop16: string;
  prop17: number;
  prop18: boolean;
  prop19: string;
  prop20: number;
}

type PerformanceTest = [
  Expect<
    Equal<
      PickByType<LargeModel, string>,
      {
        prop1: string;
        prop4: string;
        prop7: string;
        prop10: string;
        prop13: string;
        prop16: string;
        prop19: string;
      }
    >
  >,
  Expect<
    Equal<
      PickByType<LargeModel, number>,
      {
        prop2: number;
        prop5: number;
        prop8: number;
        prop11: number;
        prop14: number;
        prop17: number;
        prop20: number;
      }
    >
  >,
  Expect<
    Equal<
      PickByType<LargeModel, boolean>,
      {
        prop3: boolean;
        prop6: boolean;
        prop9: boolean;
        prop12: boolean;
        prop15: boolean;
        prop18: boolean;
      }
    >
  >,
];
