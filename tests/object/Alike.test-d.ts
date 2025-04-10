import { Alike } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Alike<{ a: 1 }, { a: 1 }>, true>>,
  Expect<Equal<Alike<{ a: 1 }, { a: 2 }>, false>>,

  // 엣지 케이스
  Expect<Equal<Alike<{}, {}>, true>>,
  Expect<Equal<Alike<{ a: 1 }, {}>, false>>,
  Expect<Equal<Alike<{}, { a: 1 }>, false>>,
  Expect<Equal<Alike<{ a: null }, { a: undefined }>, false>>,
  Expect<Equal<Alike<{ a: undefined }, { a?: undefined }>, false>>,
  Expect<Equal<Alike<{ a: readonly string[] }, { a: string[] }>, false>>,
  Expect<Equal<Alike<{ a: { b: 1 } }, { a: { b: 1; c: 2 } }>, false>>,
  Expect<Equal<Alike<null, undefined>, false>>,
  Expect<Equal<Alike<1, 1n>, false>>,
];

// 성능 테스트
type NestedObject1 = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: {
                  i: {
                    j: 1;
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

type NestedObject2 = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: {
                  i: {
                    j: 2;
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

type LargeObject1 = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: symbol;
  prop5: null;
  prop6: undefined;
  prop7: string[];
  prop8: { nested: string };
  prop9: () => void;
  prop10: Map<string, any>;
};

type LargeObject2 = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: symbol;
  prop5: null;
  prop6: undefined;
  prop7: string[];
  prop8: { nested: number }; // 여기만 다름
  prop9: () => void;
  prop10: Map<string, any>;
};

type PerformanceTests = [
  // 깊게 중첩된 객체 비교
  Expect<Equal<Alike<NestedObject1, NestedObject1>, true>>,
  Expect<Equal<Alike<NestedObject1, NestedObject2>, false>>,

  // 큰 객체 비교
  Expect<Equal<Alike<LargeObject1, LargeObject1>, true>>,
  Expect<Equal<Alike<LargeObject1, LargeObject2>, false>>,

  // 복잡한 타입 비교
  Expect<Equal<Alike<{ a: string | number }, { a: string | number }>, true>>,
  Expect<Equal<Alike<{ a: string | number }, { a: string | boolean }>, false>>,

  // 재귀적 타입 비교
  Expect<Equal<Alike<{ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } }>, true>>,
  Expect<Equal<Alike<{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }>, false>>,
];
