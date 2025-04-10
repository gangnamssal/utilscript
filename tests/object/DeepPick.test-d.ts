import { DeepPick } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

// 기본 테스트 케이스
type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | ''>, { a: number } & unknown>>,
  Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
  Expect<
    Equal<
      DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>,
      { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
    >
  >,
  Expect<
    Equal<DeepPick<Obj, 'a' | 'obj.e' | ''>, { a: number } & { obj: { e: string } } & unknown>
  >,

  // 엣지 케이스
  Expect<Equal<DeepPick<Obj, never>, unknown>>,
  Expect<Equal<DeepPick<{}, 'a'>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'nonexistent'>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'obj.nonexistent'>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'obj.obj2.nonexistent'>, unknown>>,
  Expect<
    Equal<
      DeepPick<Obj, 'a' | 'b' | 'c'>,
      {
        a: number;
      } & {
        b: string;
      } & {
        c: boolean;
      }
    >
  >,
  Expect<Equal<DeepPick<Obj, 'obj3'>, { obj3: { j: number; k: string; l: boolean } }>>,
  Expect<Equal<DeepPick<Obj, 'obj.obj2'>, { obj: { obj2: { g: number; h: string; i: boolean } } }>>,
];

// 성능 테스트 케이스
type DeepNestedObj = {
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

type PerformanceTestCases = [
  // 깊은 중첩 경로 테스트
  Expect<
    Equal<
      DeepPick<
        DeepNestedObj,
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

  // 대량의 유니온 타입 테스트
  Expect<
    Equal<
      DeepPick<
        Obj,
        | 'a'
        | 'b'
        | 'c'
        | 'obj.d'
        | 'obj.e'
        | 'obj.f'
        | 'obj.obj2.g'
        | 'obj.obj2.h'
        | 'obj.obj2.i'
        | 'obj3.j'
        | 'obj3.k'
        | 'obj3.l'
      >,
      { a: number } & { b: string } & { c: boolean } & { obj: { d: number } } & {
        obj: { e: string };
      } & { obj: { f: boolean } } & { obj: { obj2: { g: number } } } & {
        obj: { obj2: { h: string } };
      } & { obj: { obj2: { i: boolean } } } & { obj3: { j: number } } & { obj3: { k: string } } & {
        obj3: { l: boolean };
      }
    >
  >,
];
