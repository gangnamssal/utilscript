import { Concat } from '../../array';
import { ToFnIntersection } from '../ToFnIntersection';

/**
 *
 * Utility type to convert a union type to a tuple
 *
 * 유니온 타입을 튜플로 변환하는 유틸리티 타입
 *
 * @param T Union type to convert / 변환할 유니온 타입
 *
 * @returns Tuple type containing each member of the union type / 유니온 타입의 각 멤버를 포함하는 튜플 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToTuple<'a' | 'b'>['length'], 2>>,
 *   Expect<Equal<ToUnion<ToTuple<'a' | 'b'>>, 'a' | 'b'>>,
 *   Expect<Equal<ToUnion<ToTuple<'a'>>, 'a'>>,
 *   Expect<Equal<ToUnion<ToTuple<any>>, any>>,
 *   Expect<Equal<ToUnion<ToTuple<undefined | void | 1>>, void | 1>>,
 *   Expect<Equal<ToUnion<ToTuple<never>>, never>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-union/to-tuple
 *
 */
export type ToTuple<T> =
  ToFnIntersection<T> extends () => infer R ? Concat<ToTuple<Exclude<T, R>>, [R]> : [];
