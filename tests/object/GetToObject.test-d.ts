import { GetToObject } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<GetToObject<{ a: 1 }, 'a'>, { a: 1 }>>,
  Expect<Equal<GetToObject<{ a: 1 }, 'b'>, never>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2 }, 'a'>, { a: 1 }>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2 }, 'b'>, { b: 2 }>>,
  Expect<Equal<GetToObject<{ a: { b: 1 } }, 'a'>, { a: { b: 1 } }>>,
  Expect<Equal<GetToObject<{ a: { b: 1 } }, 'a.b'>, { a: { b: 1 } }>>,
  Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.b.c'>, { a: { b: { c: 1 } } }>>,
  Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.b.d'>, never>>,
  Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.k.d'>, never>>,
  Expect<Equal<GetToObject<{ a: { b: 1; c: 2 } }, 'a.b'>, { a: { b: 1 } }>>,
  Expect<Equal<GetToObject<{ a: { b: 1; c: 2 } }, 'a.c'>, { a: { c: 2 } }>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2; c: 3 }, 'a'>, { a: 1 }>>,
  Expect<Equal<GetToObject<{ a: 1; b: 2; c: 3 }, 'c'>, { c: 3 }>>,

  // 엣지 케이스
  Expect<Equal<GetToObject<{}, 'key'>, never>>,
  Expect<Equal<GetToObject<{ a: null }, 'a'>, { a: null }>>,
  Expect<Equal<GetToObject<{ a: undefined }, 'a'>, { a: undefined }>>,
  Expect<Equal<GetToObject<{ 'a.b.c': number }, 'a.b.c'>, { 'a.b.c': number }>>,
  Expect<Equal<GetToObject<{ '': { empty: boolean } }, ''>, { '': { empty: boolean } }>>,
  Expect<Equal<GetToObject<{ '': { empty: boolean } }, '.empty'>, { '': { empty: boolean } }>>,
  Expect<Equal<GetToObject<{ foo: { bar: { baz: string } } }, 'foo.bar.baz.qux'>, never>>,
  Expect<Equal<GetToObject<{ foo: { bar: { baz: string } } }, ''>, never>>,
];

// 성능 테스트 케이스
type DeepNestedObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            level6: {
              level7: {
                level8: {
                  level9: {
                    level10: {
                      value: string;
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

type LargeObject = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested: string };
  prop6: Map<string, any>;
  prop7: Set<number>;
  prop8: () => void;
  prop9: RegExp;
  prop10: Date;
  prop11: Promise<any>;
  prop12: symbol;
  prop13: null;
  prop14: undefined;
  prop15: never;
  prop16: unknown;
  prop17: any;
  prop18: object;
  prop19: Record<string, any>;
  prop20: { deep: { deeper: { deepest: string } } };
};

// 깊은 중첩 객체 성능 테스트
type DeepNestedPerformanceTest = [
  Expect<
    Equal<
      GetToObject<
        DeepNestedObject,
        'level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value'
      >,
      {
        level1: {
          level2: {
            level3: {
              level4: {
                level5: {
                  level6: { level7: { level8: { level9: { level10: { value: string } } } } };
                };
              };
            };
          };
        };
      }
    >
  >,
];

// 큰 객체 성능 테스트
type LargeObjectPerformanceTest = [
  Expect<
    Equal<
      GetToObject<LargeObject, 'prop20.deep.deeper.deepest'>,
      { prop20: { deep: { deeper: { deepest: string } } } }
    >
  >,
  Expect<Equal<GetToObject<LargeObject, 'prop5.nested'>, { prop5: { nested: string } }>>,
];

// 여러 경로 동시 처리 성능 테스트
type MultiPathPerformanceTest<T> = [
  GetToObject<T, 'prop1'>,
  GetToObject<T, 'prop5.nested'>,
  GetToObject<T, 'prop20.deep.deeper.deepest'>,
  GetToObject<T, 'level1.level2.level3.level4.level5'>,
];
