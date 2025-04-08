import { If } from '../../commonness';
import { Tuple } from '../../primitive';
import { IndexOf } from '../IndexOf';
import { Length } from '../Length';
import { Max } from '../Max';
import { Min } from '../Min';
import { Push } from '../Push';
import { Splice } from '../Splice';

type SortAsc<T extends Tuple<number>, R extends Tuple = []> =
  Length<T> extends 0 ? R : SortAsc<Splice<T, IndexOf<T, Min<T>>, 1>, Push<R, Min<T>>>;

type SortDesc<T extends Tuple<number>, R extends Tuple = []> =
  Length<T> extends 0 ? R : SortDesc<Splice<T, IndexOf<T, Max<T>>, 1>, Push<R, Max<T>>>;

/**
 *
 * Type that sorts an array in ascending or descending order
 *
 * 배열을 오름차순 또는 내림차순으로 정렬하는 타입
 *
 * @param T The array type to sort / 정렬할 배열 타입
 *
 * @param Desc Whether to sort in descending order (default: false) / 내림차순으로 정렬할지 여부 (기본값: false)
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<Sort<[1, 2, 3]>, [1, 2, 3]>>,
 *   Expect<Equal<Sort<[3, 2, 1]>, [1, 2, 3]>>,
 *   Expect<Equal<Sort<[3, 2, 1], true>, [3, 2, 1]>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/sort
 *
 */

export type Sort<T extends Tuple<number>, Desc extends boolean = false> = If<
  Desc,
  SortDesc<T>,
  SortAsc<T>
>;
