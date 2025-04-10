import { Equal, Expect } from '../../src/commonness';
import { DeepOmit } from '../../src/object';

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

// 추가 테스트를 위한 복잡한 객체 타입
type complexObj = {
  user: {
    info: {
      name: string;
      contact: {
        email: string;
        phone: number;
      };
      address: {
        city: string;
        country: string;
      };
    };
    settings: {
      theme: string;
      notifications: boolean;
    };
  };
  posts: {
    id: number;
    title: string;
    content: string;
  }[];
};

// 성능 테스트를 위한 깊은 중첩 객체
type deepNestedObj = {
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

// 성능 테스트를 위한 넓은 객체
type wideObj = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested: string };
  prop6: Date;
  prop7: RegExp;
  prop8: Map<string, any>;
  prop9: Set<number>;
  prop10: Promise<void>;
  prop11: () => void;
  prop12: symbol;
  prop13: null;
  prop14: undefined;
  prop15: never;
};

type T = DeepOmit<obj, 'person.age.value.nonexistent'>;

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,

  // 엣지 케이스 추가
  Expect<Equal<DeepOmit<obj, ''>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age'>, { person: { name: string } }>>,
  Expect<Equal<DeepOmit<obj, 'person.nonexistent'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value.nonexistent'>, obj>>,
  Expect<
    Equal<
      DeepOmit<complexObj, 'user.info.contact'>,
      {
        user: {
          info: { name: string; address: { city: string; country: string } };
          settings: { theme: string; notifications: boolean };
        };
        posts: { id: number; title: string; content: string }[];
      }
    >
  >,
  Expect<
    Equal<
      DeepOmit<complexObj, 'user.info.contact.email'>,
      {
        user: {
          info: {
            name: string;
            contact: { phone: number };
            address: { city: string; country: string };
          };
          settings: { theme: string; notifications: boolean };
        };
        posts: { id: number; title: string; content: string }[];
      }
    >
  >,
  Expect<
    Equal<
      DeepOmit<complexObj, 'posts'>,
      {
        user: {
          info: {
            name: string;
            contact: { email: string; phone: number };
            address: { city: string; country: string };
          };
          settings: { theme: string; notifications: boolean };
        };
      }
    >
  >,

  // 성능 테스트 - 깊은 중첩 경로
  Expect<
    Equal<
      DeepOmit<
        deepNestedObj,
        'level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value'
      >,
      {
        level1: {
          level2: {
            level3: {
              level4: { level5: { level6: { level7: { level8: { level9: { level10: {} } } } } } };
            };
          };
        };
      }
    >
  >,

  // 성능 테스트 - 넓은 객체에서 여러 속성 제거
  Expect<Equal<DeepOmit<wideObj, 'prop1'>, Omit<wideObj, 'prop1'>>>,
  Expect<
    Equal<
      DeepOmit<wideObj, 'prop5.nested'>,
      {
        prop1: string;
        prop2: number;
        prop3: boolean;
        prop4: string[];
        prop5: {};
        prop6: Date;
        prop7: RegExp;
        prop8: Map<string, any>;
        prop9: Set<number>;
        prop10: Promise<void>;
        prop11: () => void;
        prop12: symbol;
        prop13: null;
        prop14: undefined;
        prop15: never;
      }
    >
  >,

  // @ts-expect-error: 객체 타입이 아닌 경우
  DeepOmit<string, 'length'>,
  // @ts-expect-error: 객체 타입이 아닌 경우
  DeepOmit<number, 'toString'>,
  // @ts-expect-error: 두 번째 인자가 문자열이 아닌 경우
  DeepOmit<obj, 123>,
];
