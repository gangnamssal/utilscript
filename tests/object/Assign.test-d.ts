import { Assign } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// case1
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

// case2
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

// case3

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

// case 4
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

type cases = [
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
];
