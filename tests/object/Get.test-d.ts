import { Equal, Expect } from '../../src/commonness';
import { Get } from '../../src/object';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,
  Expect<Equal<Get<Data, 'no.existed'>, never>>,
];

// 엣지 케이스
type edgeCases = [
  Expect<Equal<Get<{}, 'key'>, never>>,
  Expect<Equal<Get<{ a: null }, 'a'>, null>>,
  Expect<Equal<Get<{ a: undefined }, 'a'>, undefined>>,
  Expect<Equal<Get<{ a: { b: { c: string } } }, 'a.b.c'>, string>>,
  Expect<Equal<Get<{ 'a.b.c': number }, 'a.b.c'>, number>>,
  Expect<Equal<Get<{ a: { b: { c: number } } }, 'a.b'>, { c: number }>>,
  Expect<Equal<Get<{ '': { empty: boolean } }, ''>, { empty: boolean }>>,
  Expect<Equal<Get<{ '': { empty: boolean } }, '.empty'>, boolean>>,
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
  Expect<
    Equal<
      Get<
        DeepNestedObject,
        'level1.level2.level3.level4.level5.level6.level7.level8.level9.level10.value'
      >,
      string
    >
  >,
  Expect<
    Equal<
      Get<DeepNestedObject, 'level1.level2.level3.level4.level5.level6.level7.level8.level9'>,
      { level10: { value: string } }
    >
  >,
  Expect<Equal<Get<DeepNestedObject, 'level1.nonexistent.value'>, never>>,
];

// 복잡한 객체 구조에 대한 성능 테스트
type ComplexObject = {
  a: number;
  b: string;
  c: boolean;
  d: {
    e: number[];
    f: {
      g: Map<string, number>;
      h: Set<string>;
      i: {
        j: Promise<string>;
        k: () => void;
      };
    };
  };
};

type complexCases = [
  Expect<Equal<Get<ComplexObject, 'd.f.i.j'>, Promise<string>>>,
  Expect<Equal<Get<ComplexObject, 'd.f.i.k'>, () => void>>,
  Expect<Equal<Get<ComplexObject, 'd.e'>, number[]>>,
];

type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  'foo.baz': false;
  hello: 'world';
};
