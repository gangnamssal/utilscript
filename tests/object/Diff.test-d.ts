import { Diff } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Foo = {
  name: string;
  age: string;
};

type Bar = {
  name: string;
  age: string;
  gender: number;
};

type Coo = {
  name: string;
  gender: number;
};

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,

  // 엣지 케이스
  Expect<Equal<Diff<{}, {}>, {}>>,
  Expect<Equal<Diff<{}, { a: number }>, { a: number }>>,
  Expect<Equal<Diff<{ a: number }, {}>, { a: number }>>,
  Expect<Equal<Diff<{ a: string }, { a: number }>, { a: number }>>,
  Expect<Equal<Diff<{ a: string; b: number }, { a: string }>, { b: number }>>,
  Expect<Equal<Diff<{ a?: string }, { a: string }>, { a: string }>>,
  Expect<Equal<Diff<{ readonly a: string }, { a: string }>, {}>>,
];

// 성능 테스트
type LargeObject1 = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested: string };
  prop6: () => void;
  prop7: Map<string, any>;
  prop8: Set<number>;
  prop9: Promise<void>;
  prop10: Date;
};

type LargeObject2 = {
  prop1: string;
  prop2: string; // 다른 타입
  prop3: boolean;
  prop4: number[]; // 다른 타입
  prop5: { nested: number }; // 다른 타입
  prop6: () => void;
  prop7: Map<string, any>;
  prop8: Set<string>; // 다른 타입
  prop11: RegExp; // 추가된 속성
};

type PerformanceTest = [
  // 큰 객체 간의 차이 테스트
  Expect<
    Equal<
      keyof Diff<LargeObject1, LargeObject2>,
      'prop2' | 'prop4' | 'prop5' | 'prop8' | 'prop9' | 'prop10' | 'prop11'
    >
  >,

  // 깊은 중첩 객체 테스트
  Expect<
    Equal<
      Diff<{ a: { b: { c: { d: string } } } }, { a: { b: { c: { d: number } } } }>,
      { a: { b: { c: { d: number } } } }
    >
  >,
];
