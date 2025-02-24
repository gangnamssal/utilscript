import { Equal, Expect } from '../../commonness';
import { AnyArray } from '../../primitive';
/**
 * Type to return the first element of an array
 *
 * 배열의 첫 번째 요소를 반환하는 타입
 *
 * @param T Array / 배열
 * @returns First element of array / 배열의 첫 번째 요소
 *
 * @example
 * type cases = [
 *   Expect<Equal<First<[3, 2, 1]>, 3>>,
 *   Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
 * ]
 */
export type First<T extends AnyArray> = T['length'] extends 0 ? never : T[0];

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
  type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<typeof tuple>, 'tesla'>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
  ];

  type errors = [
    // @ts-expect-error
    First<'notArray'>,
    // @ts-expect-error
    First<{ 0: 'arrayLike' }>,
  ];
}
