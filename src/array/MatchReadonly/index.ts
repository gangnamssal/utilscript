import { Tuple } from '../../primitive';

/**
 *
 * Type to match the readonly status of one tuple to another
 *
 * 하나의 튜플의 readonly 상태를 다른 튜플에 적용하는 타입
 *
 * @param T Source tuple to check readonly status / readonly 상태를 확인할 원본 튜플
 * @param R Target tuple to apply readonly status / readonly 상태를 적용할 대상 튜플
 *
 * @returns Tuple with matched readonly status / readonly 상태가 일치된 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<MatchReadonly<[1, 2, 3], [4, 5, 6]>, [4, 5, 6]>>,
 *   Expect<Equal<MatchReadonly<readonly [1, 2, 3], [4, 5, 6]>, readonly [4, 5, 6]>>
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/match-readonly
 *
 */

export type MatchReadonly<T extends Tuple, R extends Tuple> =
  T extends Array<unknown> ? R : readonly [...R];
