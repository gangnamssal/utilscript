import { Assign } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// 기본 케이스
type Case1Target = {};

type Case1Origin1 = {
  a: 'a';
};

type Case1Origin2 = {
  b: 'b';
};

type Case1Origin3 = {
  c: 'c';
};

type Case1Answer = {
  a: 'a';
  b: 'b';
  c: 'c';
};

// 중첩 객체 케이스
type Case2Target = {
  a: [1, 2, 3];
};

type Case2Origin1 = {
  a: {
    a1: 'a1';
  };
};

type Case2Origin2 = {
  b: [2, 3, 3];
};

type Case2Answer = {
  a: {
    a1: 'a1';
  };
  b: [2, 3, 3];
};

// 다중 속성 오버라이드 케이스
type Case3Target = {
  a: 1;
  b: ['b'];
};

type Case3Origin1 = {
  a: 2;
  b: {
    b: 'b';
  };
  c: 'c1';
};

type Case3Origin2 = {
  a: 3;
  c: 'c2';
  d: true;
};

type Case3Answer = {
  a: 3;
  b: {
    b: 'b';
  };
  c: 'c2';
  d: true;
};

// 비객체 값 케이스
type Case4Target = {
  a: 1;
  b: ['b'];
};

type Case4Answer = {
  a: 1;
  b: ['b'];
};

// 엣지 케이스
// 빈 배열 할당
type EmptyArrayTarget = {
  a: string;
};

type EmptyArrayAnswer = {
  a: string;
};

// readonly 속성
type ReadonlyTarget = {
  readonly a: number;
};

type ReadonlyOrigin = {
  a: string;
  b: boolean;
};

type ReadonlyAnswer = {
  a: string;
  b: boolean;
};

// 선택적 속성
type OptionalTarget = {
  a?: number;
  b: string;
};

type OptionalOrigin = {
  a: number;
  c: boolean;
};

type OptionalAnswer = {
  a: number;
  b: string;
  c: boolean;
};

// null과 undefined
type NullUndefinedTarget = {
  a: null;
  b: undefined;
};

type NullUndefinedOrigin = {
  a: string;
  b: number;
};

type NullUndefinedAnswer = {
  a: string;
  b: number;
};

// 성능 테스트를 위한 복잡한 객체 타입
type DeepNestedTarget = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: string;
        };
      };
    };
  };
};

type DeepNestedOrigin1 = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: number;
          extra: boolean;
        };
      };
    };
  };
};

type DeepNestedOrigin2 = {
  newProp: {
    nested: {
      value: string[];
    };
  };
};

type DeepNestedAnswer = {
  level1: {
    level2: {
      level3: {
        level4: {
          value: number;
          extra: boolean;
        };
      };
    };
  };
  newProp: {
    nested: {
      value: string[];
    };
  };
};

// 많은 속성을 가진 객체
type LargeTarget = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { key: string };
};

type LargeOrigin = {
  prop6: string;
  prop7: number;
  prop8: boolean;
  prop9: string[];
  prop10: { key: string };
};

type LargeAnswer = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { key: string };
  prop6: string;
  prop7: number;
  prop8: boolean;
  prop9: string[];
  prop10: { key: string };
};

// 여러 객체를 연속으로 할당
type MultiAssignTarget = { a: 1 };
type MultiAssignOrigin1 = { b: 2 };
type MultiAssignOrigin2 = { c: 3 };
type MultiAssignOrigin3 = { d: 4 };
type MultiAssignOrigin4 = { e: 5 };
type MultiAssignOrigin5 = { f: 6 };

type MultiAssignAnswer = {
  a: 1;
  b: 2;
  c: 3;
  d: 4;
  e: 5;
  f: 6;
};

type cases = [
  // 기본 케이스
  Expect<Equal<Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>, Case1Answer>>,
  Expect<Equal<Assign<Case2Target, [Case2Origin1, Case2Origin2]>, Case2Answer>>,
  Expect<Equal<Assign<Case3Target, [Case3Origin1, Case3Origin2]>, Case3Answer>>,
  Expect<Equal<Assign<Case4Target, ['', 0]>, Case4Answer>>,

  // 엣지 케이스
  Expect<Equal<Assign<EmptyArrayTarget, []>, EmptyArrayAnswer>>,
  Expect<Equal<Assign<ReadonlyTarget, [ReadonlyOrigin]>, ReadonlyAnswer>>,
  Expect<Equal<Assign<OptionalTarget, [OptionalOrigin]>, OptionalAnswer>>,
  Expect<Equal<Assign<NullUndefinedTarget, [NullUndefinedOrigin]>, NullUndefinedAnswer>>,
  Expect<Equal<Assign<{}, [{}]>, {}>>,
  Expect<Equal<Assign<{ a: 1 }, [never]>, { a: 1 }>>,
  Expect<Equal<Assign<{}, [any]>, {}>>,

  // 성능 테스트 케이스
  Expect<Equal<Assign<DeepNestedTarget, [DeepNestedOrigin1, DeepNestedOrigin2]>, DeepNestedAnswer>>,
  Expect<Equal<Assign<LargeTarget, [LargeOrigin]>, LargeAnswer>>,
  Expect<
    Equal<
      Assign<
        MultiAssignTarget,
        [
          MultiAssignOrigin1,
          MultiAssignOrigin2,
          MultiAssignOrigin3,
          MultiAssignOrigin4,
          MultiAssignOrigin5,
        ]
      >,
      MultiAssignAnswer
    >
  >,
];
