import { Expect } from '../../commonness';
import { Alike } from '../Alike';
/**
 * Make some properties readonly
 *
 * 일부 속성을 읽기 전용으로 만드는 타입
 *
 * @param T 객체
 * @param K 읽기 전용으로 만들 속성
 *
 * @example
 * type cases = [
 *   Expect<
 *     Alike<
 *       PartialReadonly<{ name: string; age: number }, 'name'>,
 *       { readonly name: string; age: number }
 *     >
 *   >,
 * ]
 */

export type PartialReadonly<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;

/**
 * 테스트 코드
 */

// @ts-ignore

if (process.env.NODE_ENV === 'development') {
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
  ];

  // @ts-expect-error
  type error = MyReadonly2<Todo1, 'title' | 'invalid'>;
}
