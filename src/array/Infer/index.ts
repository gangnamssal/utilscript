import { Tuple } from '../../primitive';

/**
 *
 * Type that infers the union type of all elements in a tuple
 *
 * 튜플의 모든 요소의 유니온 타입을 추론하는 타입
 *
 * @params T - Tuple to infer elements from / 요소를 추론할 튜플
 *
 * @returns Union type of all elements in the tuple / 튜플의 모든 요소의 유니온 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<Infer<[1, 2, 3]>, 1 | 2 | 3>>,
 *   Expect<Equal<Infer<['a', 'b', 'c']>, 'a' | 'b' | 'c'>>,
 *   Expect<Equal<Infer<[true, false]>, true | false>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/infer
 *
 */
export type Infer<T extends Tuple> = T extends Tuple<infer U> ? U : never;
