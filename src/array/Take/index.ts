import { Tuple } from '../../primitive/Tuple';
import { From } from '../From';
import { Length } from '../Length';
import { MatchReadonly } from '../MatchReadonly';
import { Push } from '../Push';

type TakePositive<N, A extends Tuple, R extends Tuple = []> =
  Length<R> extends N
    ? MatchReadonly<A, R>
    : A extends [infer First, ...infer Rest]
      ? TakePositive<N, Rest, Push<R, First>>
      : A extends readonly [infer First, ...infer Rest]
        ? readonly [...TakePositive<N, Rest, Push<R, First>>]
        : MatchReadonly<A, R>;

type TakeNegative<
  N extends number,
  A extends Tuple,
  R extends Tuple = [],
  CurrentIndex extends Tuple = From<Length<A>>,
> =
  Length<R> extends N
    ? MatchReadonly<A, R>
    : CurrentIndex extends readonly [...infer Rest, any]
      ? TakeNegative<N, A, [A[Length<Rest>], ...R], Rest>
      : MatchReadonly<A, R>;

/**
 *
 * Get the specified number of elements from an array.
 *
 * 튜플에서 지정된 수의 요소를 가져옵니다. 양수인 경우 앞에서부터, 음수인 경우 뒤에서부터 요소를 가져옵니다.
 *
 * @param N - The number of elements to take (positive or negative) / 가져올 요소의 수 (양수 또는 음수)
 * @param A - The tuple type to take elements from / 요소를 가져올 튜플 타입
 *
 * @returns A new tuple containing the specified number of elements / 지정된 수의 요소를 포함하는 새 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
 *   Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/take
 *
 */

export type Take<
  N extends number,
  A extends Tuple,
> = `${N}` extends `-${infer Number extends number}` ? TakeNegative<Number, A> : TakePositive<N, A>;
