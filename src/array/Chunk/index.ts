import { Tuple } from '../../primitive';
import { Length } from '../Length';
import { Push } from '../Push';

/**
 * Type that takes an array and a number and returns an array of arrays of the specified size
 *
 * 배열과 숫자를 받아 지정된 크기의 배열로 분할된 배열을 반환하는 타입
 *
 * @params A - Array to be chunked / 분할할 배열
 * @params Split - Size of each chunk / 각 청크의 크기
 * @returns Array of arrays of the specified size / 지정된 크기의 배열로 분할된 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Chunk<[], 1>, []>>,
 *   Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
 *   Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
 *   Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
 *   Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
 *   Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
 * ];
 */
export type Chunk<
  A extends Tuple,
  Split extends number,
  Temp extends Tuple = [],
  R extends Tuple = [],
> = A extends [infer AF, ...infer AR]
  ? Length<[...Temp, AF]> extends Split
    ? Chunk<AR, Split, [], Push<R, [...Temp, AF]>>
    : Chunk<AR, Split, Push<Temp, AF>, R>
  : Length<Temp> extends 0
    ? R
    : [...R, Temp];
