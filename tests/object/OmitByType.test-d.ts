import { Expect, Equal } from '../../src/commonness';
import { OmitByType } from '../../src/object';

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

// 기본 테스트 케이스
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
  // 대규모 객체에서 특정 타입 제외 테스트
  Expect<
    Equal<
      OmitByType<LargeModel, boolean>,
      {
        prop1: string;
        prop2: number;
        prop4: string;
        prop5: number;
        prop7: string;
        prop8: number;
        prop10: string;
        prop11: number;
        prop13: string;
        prop14: number;
        prop16: string;
        prop17: number;
        prop19: string;
        prop20: number;
      }
    >
  >,

  // 복잡한 유니온 타입 처리 테스트
  Expect<
    Equal<
      OmitByType<
        {
          a: string | number;
          b: string | boolean;
          c: number | boolean;
          d: string | number | boolean;
        },
        string
      >,
      {
        a: number;
        b: boolean;
        c: number | boolean;
        d: number | boolean;
      }
    >
  >,
];
