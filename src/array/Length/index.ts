import { Equal, Expect } from '../../commonness';
import { Tuple } from '../../primitive';

/**
 * Type to return the length of an array
 *
 * 배열의 길이를 반환하는 타입
 *
 * @param T Tuple / 튜플
 * @returns Length of tuple / 튜플의 길이
 *
 * @example
 * type cases = [
 *   Expect<Equal<Length<[1, 2, 3]>, 3>>,
 * ]
 */

export type Length<T extends Tuple> = T['length'];

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
  const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

  type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error
    Length<5>,
    // @ts-expect-error
    Length<'hello world'>,
  ];
}
