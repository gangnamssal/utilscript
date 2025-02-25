import { Equal, Expect } from '../../commonness';

/**
 * Make all properties of an object mutable
 *
 * 객체의 모든 프로퍼티를 가변적으로 만들어주는 타입
 *
 * @param T The original object type / 원본 객체 타입
 *
 * @example
 *   interface Todo1 {
 *     title: string;
 *     description: string;
 *     completed: boolean;
 *     meta: {
 *       author: string;
 *     };
 *   }

 *   type cases = [
 *     Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
 *   ];
 */

export type Mutable<T extends Record<PropertyKey, any>> = { -readonly [P in keyof T]: T[P] };

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }

  type List = [1, 2, 3];

  type cases = [
    Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
    Expect<Equal<Mutable<Readonly<List>>, List>>,
  ];

  type errors = [
    // @ts-expect-error
    Mutable<'string'>,
    // @ts-expect-error
    Mutable<0>,
  ];
}
