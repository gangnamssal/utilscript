import { Expect, Equal } from '../../src/commonness';
import { PartialReadonly, Alike } from '../../src/object';

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// 기본 테스트 케이스
type cases = [
  Expect<Alike<PartialReadonly<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<PartialReadonly<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<PartialReadonly<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<PartialReadonly<Todo2, 'description'>, Expected>>,
  Expect<
    Alike<
      PartialReadonly<{ name: string; age: number }, 'name'>,
      { readonly name: string; age: number }
    >
  >,

  // @ts-expect-error: not working in production
  Expect<Equal<PartialReadonly<{}, 'key'>, {}>>,

  // 엣지 케이스
  Expect<Equal<PartialReadonly<{ a: undefined }, 'a'>, { readonly a: undefined }>>,
  Expect<Equal<PartialReadonly<{ a: null }, 'a'>, { readonly a: null }>>,
  Expect<Equal<PartialReadonly<{ a: never }, 'a'>, { readonly a: never }>>,
  Expect<Equal<PartialReadonly<{ a: unknown }, 'a'>, { readonly a: unknown }>>,
  Expect<Equal<PartialReadonly<{ a: any }, 'a'>, { readonly a: any }>>,
  Expect<Equal<PartialReadonly<{ 'a-b': number }, 'a-b'>, { readonly 'a-b': number }>>,
  Expect<
    Equal<
      PartialReadonly<{ [k: string]: number }, string | number>,
      { readonly [k: string]: number }
    >
  >,
  Expect<Equal<PartialReadonly<{ [k: number]: string }, number>, { readonly [k: number]: string }>>,
];

// 성능 테스트
type LargeObject = {
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
  // ... 더 많은 속성들
  prop20: Record<string, unknown>;
};

// 대규모 객체에 대한 성능 테스트
type LargeReadonlyTest = PartialReadonly<LargeObject, 'prop1' | 'prop5' | 'prop10'>;

// 깊은 중첩 객체에 대한 성능 테스트
type NestedObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: string;
        };
      };
    };
  };
};

type NestedReadonlyTest = PartialReadonly<NestedObject, 'level1'>;

// @ts-expect-error: not working in production
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;
