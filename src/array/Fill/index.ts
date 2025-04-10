import { Tuple } from '../../primitive/Tuple';
import { Length } from '../Length';
import { Push } from '../Push';

/**
 *
 * Type that takes an array, a value, and a start and end index and returns an array with the specified value in the specified range
 *
 * 튜플, 값, 시작과 끝 인덱스를 받아 지정된 범위에 지정된 값을 가진 튜플을 반환하는 타입
 *
 * @params T - Array to be filled / 채워질 튜플
 *
 * @params N - Value to fill / 채울 값
 *
 * @params Start - Start index / 시작 인덱스
 *
 * @params End - End index / 끝 인덱스
 *
 * @returns Array with the specified value in the specified range / 지정된 범위에 지정된 값을 가진 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Fill<[], 0>, []>>,
 *   Expect<Equal<Fill<[], 0, 0, 3>, []>>,
 *   Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
 *   Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
 *   Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
 *   Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
 *   Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
 *   Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
 *   Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
 *   Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
 *   Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/fill
 *
 */
export type Fill<
  T extends Tuple,
  N,
  Start extends number = 0,
  End extends number = Length<T>,
  Result extends Tuple = [],
  InRange extends boolean = false,
> = T extends readonly [infer First, ...infer Rest]
  ? Start extends End
    ? T
    : Length<Result> extends Start
      ? Fill<Rest, N, Start, End, Push<Result, N>, true>
      : InRange extends true
        ? Length<Result> extends End
          ? Fill<Rest, N, Start, End, Push<Result, First>, false>
          : Fill<Rest, N, Start, End, Push<Result, N>, true>
        : Fill<Rest, N, Start, End, Push<Result, First>, false>
  : Result;
