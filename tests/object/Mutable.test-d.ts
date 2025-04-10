import { Mutable } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,

  // 엣지 케이스
  Expect<Equal<Mutable<{}>, {}>>,
  Expect<Equal<Mutable<Readonly<{}>>, {}>>,
  Expect<Equal<Mutable<Readonly<{ readonly a?: number }>>, { a?: number }>>,
  Expect<Equal<Mutable<Readonly<{ readonly [k: string]: number }>>, { [k: string]: number }>>,
  Expect<Equal<Mutable<Readonly<{ readonly [k: number]: string }>>, { [k: number]: string }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: undefined }>>, { a: undefined }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: null }>>, { a: null }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: never }>>, { a: never }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: unknown }>>, { a: unknown }>>,
  Expect<Equal<Mutable<Readonly<{ readonly a: any }>>, { a: any }>>,
];

// 에러 케이스
type errors = [
  // @ts-expect-error: not working in production
  Mutable<'string'>,
  // @ts-expect-error: not working in production
  Mutable<0>,
];

// 성능 테스트
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 큰 객체 생성
interface LargeObject {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested1: string; nested2: number };
  prop6: Map<string, any>;
  prop7: Set<number>;
  prop8: () => void;
  prop9: RegExp;
  prop10: Date;
  // ... 더 많은 속성들
}

// 중첩된 깊은 객체
interface DeepNestedObject {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: string;
        };
      };
    };
  };
}

// 성능 테스트 케이스
type performanceTests = [
  // 큰 객체에 대한 성능 테스트
  Expect<Equal<Mutable<Readonly<LargeObject>>, LargeObject>>,

  // 깊게 중첩된 객체에 대한 성능 테스트
  Expect<Equal<Mutable<Readonly<DeepNestedObject>>, DeepNestedObject>>,

  // 배열 성능 테스트
  Expect<Equal<Mutable<Readonly<number[]>>, number[]>>,

  // 유니온 타입 성능 테스트
  Expect<Equal<Mutable<Readonly<{ a: string } | { b: number }>>, { a: string } | { b: number }>>,

  // 인터섹션 타입 성능 테스트
  Expect<Equal<Mutable<Readonly<{ a: string } & { b: number }>>, { a: string; b: number }>>,
];
