import { DeepReadonly } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
  // 엣지 케이스
  Expect<Equal<DeepReadonly<{}>, {}>>,
  Expect<Equal<DeepReadonly<[]>, readonly []>>,
  Expect<Equal<DeepReadonly<null>, null>>,
  Expect<Equal<DeepReadonly<undefined>, undefined>>,
  Expect<Equal<DeepReadonly<string>, string>>,
  Expect<Equal<DeepReadonly<number>, number>>,
  Expect<Equal<DeepReadonly<boolean>, boolean>>,
  Expect<Equal<DeepReadonly<{ readonly a: number }>, { readonly a: number }>>,
  Expect<Equal<DeepReadonly<readonly string[]>, readonly string[]>>,
];

// 성능 테스트를 위한 깊은 중첩 객체
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

// 성능 테스트 케이스
type performanceCases = [
  // 깊은 중첩 객체 테스트
  Expect<
    Equal<
      DeepReadonly<DeepNestedObject>,
      {
        readonly level1: {
          readonly level2: {
            readonly level3: {
              readonly level4: {
                readonly level5: {
                  readonly level6: {
                    readonly level7: {
                      readonly level8: {
                        readonly level9: {
                          readonly level10: {
                            readonly value: string;
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
      }
    >
  >,
];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        },
      ];
    };
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        },
      ];
    };
  };
};

type Expected2 = { readonly a: string } | { readonly b: number };
