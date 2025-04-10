import { Merge } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

// 기본 테스트 케이스
type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >,
  Expect<Equal<Merge<{ a: 1 }, { b: 2 }>, { a: 1; b: 2 }>>,
  Expect<Equal<Merge<{ a: 1 }, { a: 2 }>, { a: 2 }>>,
  Expect<Equal<Merge<{ a: 1 }, { a: 2; b: 2 }>, { a: 2; b: 2 }>>,

  // 엣지 케이스
  Expect<Equal<Merge<{}, { a: 1 }>, { a: 1 }>>,
  Expect<Equal<Merge<{ a: 1 }, {}>, { a: 1 }>>,
  Expect<Equal<Merge<{}, {}>, {}>>,
  Expect<Equal<Merge<{ a: undefined }, { a: null }>, { a: null }>>,
  Expect<Equal<Merge<{ a: null }, { a: undefined }>, { a: undefined }>>,
  Expect<Equal<Merge<{ a: { b: 1 } }, { a: { c: 2 } }>, { a: { c: 2 } }>>,
  Expect<Equal<Merge<{ a: never }, { b: unknown }>, { a: never; b: unknown }>>,
  Expect<Equal<Merge<{ a: any }, { a: string }>, { a: string }>>,
  Expect<Equal<Merge<{ 'a-b': number }, { 'a-b': string }>, { 'a-b': string }>>,
];

// 성능 테스트
type LargeObject1 = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested1: string; nested2: number };
  prop6: () => void;
  prop7: Map<string, any>;
  prop8: Set<number>;
  prop9: Promise<string>;
  prop10: Date;
};

type LargeObject2 = {
  prop5: { nested3: boolean; nested4: string[] };
  prop11: RegExp;
  prop12: symbol;
  prop13: Error;
  prop14: ArrayBuffer;
  prop15: { deep1: { deep2: { deep3: string } } };
  prop16: [number, string, boolean];
  prop17: readonly string[];
  prop18: Record<string, number>;
  prop19: unknown;
  prop20: never;
};

// 대규모 객체 병합 성능 테스트
type LargeMergeResult = Merge<LargeObject1, LargeObject2>;

// 깊은 중첩 객체 성능 테스트
type Nested1 = { a: { b: { c: { d: { e: string } } } } };
type Nested2 = { a: { b: { c: { d: { f: number } } } } };
type NestedMergeResult = Merge<Nested1, Nested2>;

// 많은 속성을 가진 객체 성능 테스트
type ManyProps1 = { [K in `key${1 extends 1 ? 1 : 0}${number}`]: number };
type ManyProps2 = { [K in `key${2 extends 2 ? 2 : 0}${number}`]: string };
type ManyPropsMergeResult = Merge<ManyProps1, ManyProps2>;
