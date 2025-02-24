import { Equal, Expect } from '../../commonness';

/**
 * LookUp
 *
 * Extract a type that matches a specific key value
 *
 * 특정 키의 값을 추출하는 타입
 *
 * @param U Object / 객체
 * @param F Key / 키
 * @param T Value / 값
 * @returns Object / 객체
 *
 * @example
 * interface Cat {
 *   type: 'cat';
 *   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
 * }
 *
 * interface Dog {
 *   type: 'dog';
 *   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
 *   color: 'brown' | 'white' | 'black';
 * }
 *
 * type Animal = Cat | Dog;
 *
 * type cases = [
 *   Expect<Equal<LookUp<Animal, 'type', 'dog'>, Dog>>,
 *   Expect<Equal<LookUp<Animal, 'type', 'cat'>, Cat>>,
 * ]
 */
export type LookUp<U, F extends PropertyKey, T> = U extends { [k in F]: T } ? U : never;

/**
 * 테스트 코드
 */

// @ts-ignore

if (process.env.NODE_ENV === 'development') {
  interface Cat {
    type: 'cat';
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
  }

  interface Dog {
    type: 'dog';
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
    color: 'brown' | 'white' | 'black';
  }

  type Animal = Cat | Dog;

  type cases = [
    Expect<Equal<LookUp<Animal, 'type', 'dog'>, Dog>>,
    Expect<Equal<LookUp<Animal, 'type', 'cat'>, Cat>>,
  ];
}
