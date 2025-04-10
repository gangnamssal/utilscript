import { GreaterThan } from '../../number/GreaterThan';
import { Tuple } from '../../primitive/Tuple';
import { Concat } from '../Concat';
import { Length } from '../Length';
import { Push } from '../Push';

type SpliceImpl<
  T extends Tuple,
  Start extends number,
  Delete extends number,
  Insert extends Tuple,
  Acc extends Tuple = [],
  CurrentIndex extends Tuple = [],
  DeletedCount extends Tuple = [],
> = T extends readonly [infer First, ...infer Rest]
  ? // 현재 인덱스가 시작 인덱스와 같은지 확인
    Length<CurrentIndex> extends Start
    ? // 삭제할 요소의 수가 삭제한 요소의 수와 같은지 확인
      Length<DeletedCount> extends Delete
      ? [...Acc, ...Insert, First, ...Rest]
      : SpliceImpl<
          Rest,
          Start,
          Delete,
          Insert,
          Acc,
          Push<CurrentIndex, unknown>,
          Push<DeletedCount, unknown>
        >
    : // 현재 인덱스가 시작 인덱스와 같지 않은 경우
      Length<CurrentIndex> extends number
      ? // 삭제할 요소의 수가 삭제한 요소의 수와 같은지 확인
        Length<DeletedCount> extends Delete
        ? [...Acc, ...Insert, First, ...Rest]
        : // 삭제할 요소의 수가 삭제한 요소의 수와 같지 않은 경우
          Length<CurrentIndex> extends Start
          ? SpliceImpl<
              Rest,
              Start,
              Delete,
              Insert,
              Acc,
              Push<CurrentIndex, unknown>,
              Push<DeletedCount, unknown>
            >
          : // 삭제한 요소의 수가 0인 경우
            Length<DeletedCount> extends 0
            ? SpliceImpl<
                Rest,
                Start,
                Delete,
                Insert,
                Push<Acc, First>,
                Push<CurrentIndex, unknown>,
                DeletedCount
              >
            : SpliceImpl<
                Rest,
                Start,
                Delete,
                Insert,
                Acc,
                Push<CurrentIndex, unknown>,
                Push<DeletedCount, unknown>
              >
      : never
  : Concat<Acc, Insert>;

/**
 *
 * Type that removes elements from an array and optionally adds new elements
 *
 * 배열에서 요소를 제거하고 선택적으로 새 요소를 추가하는 타입
 *
 * @param T The array type to work with / 작업할 배열 타입
 *
 * @param Start The starting index to remove elements (default: 0) / 요소를 제거할 시작 인덱스 (기본값: 0)
 *
 * @param Delete The number of elements to remove (default: array length) / 제거할 요소의 수 (기본값: 배열의 길이)
 *
 * @param Insert Array of new elements to insert (default: empty array) / 삽입할 새 요소들의 배열 (기본값: 빈 배열)
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<Splice<[1, 2, 3], 1, 1>, [1, 3]>>,
 *   Expect<Equal<Splice<[1, 2, 3], 1, 2>, [1]>>,
 *   Expect<Equal<Splice<[1, 2, 3], 1, 0, [9, 10]>, [1, 9, 10, 2, 3]>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/splice
 *
 */

export type Splice<
  T extends Tuple,
  Start extends number = 0,
  Delete extends number = Length<T>,
  Insert extends Tuple = [],
> =
  GreaterThan<Start, Length<T>> extends true
    ? T
    : Start extends Length<T>
      ? T
      : Delete extends 0
        ? T
        : SpliceImpl<T, Start, Delete, Insert>;
