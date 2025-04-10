import { Expect, Equal, NotEqual } from '../../src/commonness';
import { Flip } from '../../src/object';

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,

  // 엣지 케이스
  Expect<Equal<{}, Flip<{}>>>,
  Expect<Equal<{ undefined: 'key' }, Flip<{ key: undefined }>>>,
  Expect<Equal<{ null: 'key' }, Flip<{ key: null }>>>,
  Expect<Equal<{ '': 'empty' }, Flip<{ empty: '' }>>>,
  Expect<Equal<{ '10': 'age' }, Flip<{ age: 10 }>>>,
  Expect<Equal<{ true: 'isActive' }, Flip<{ isActive: true }>>>,
  Expect<Equal<{ 'a,b,c': 'arr' }, Flip<{ arr: 'a,b,c' }>>>,
  Expect<Equal<{ a: 'x'; b: 'x' }, Flip<{ x: 'a' | 'b' }>>>,
];

// 성능 테스트
type LargeObject = {
  prop1: 'val1';
  prop2: 'val2';
  prop3: 'val3';
  prop4: 'val4';
  prop5: 'val5';
  prop6: 'val6';
  prop7: 'val7';
  prop8: 'val8';
  prop9: 'val9';
  prop10: 'val10';
  prop11: 'val11';
  prop12: 'val12';
  prop13: 'val13';
  prop14: 'val14';
  prop15: 'val15';
  prop16: 'val16';
  prop17: 'val17';
  prop18: 'val18';
  prop19: 'val19';
  prop20: 'val20';
};

// 큰 객체에 대한 Flip 성능 테스트
type FlippedLargeObject = Flip<LargeObject>;

// 중첩된 객체에 대한 성능 테스트
type NestedObject = {
  level1: {
    level2: {
      level3: {
        prop: 'value';
      };
    };
  };
};

// 중첩된 객체는 Flip이 최상위 레벨만 처리하는지 확인
type FlippedNestedObject = Flip<NestedObject>;

// 유니온 타입에 대한 성능 테스트
type UnionObject = { a: 'x' | 'y' | 'z' };
type FlippedUnionObject = Flip<UnionObject>;
