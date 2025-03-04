import { Tuple } from '../../primitive';

/**
 * Create a union of numbers in a given range
 *
 * 주어진 범위의 숫자 유니온을 생성
 *
 * @param L - Start of the range / 범위의 시작
 * @param H - End of the range / 범위의 끝
 * @param Result - Result to return / 반환할 결과
 *
 * @example
 * type Result1 = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
 * type Result2 = 0 | 1 | 2;
 * 
 * type cases = [
 *   Expect<Equal<Range<2, 9>, Result1>>,
 *   Expect<Equal<Range<0, 2>, Result2>>,
 * ];

 */
export type Range<
  L extends number,
  H extends number,
  T extends Tuple = [],
  Flag = false,
  Result = null,
> = T['length'] extends H
  ? Result | T['length']
  : T['length'] extends L
    ? Range<L, H, [...T, unknown], true, T['length']>
    : Flag extends true
      ? Range<L, H, [...T, unknown], Flag, Result | T['length']>
      : Range<L, H, [...T, unknown], Flag, Result>;
