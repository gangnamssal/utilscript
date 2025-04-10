import { If } from '../../commonness/If';
import { IsObject } from '../../commonness/IsObject';
import { Tuple } from '../../primitive/Tuple';
import { Merge } from '../Merge';

/**
 *
 * Assign properties from an array of objects to a target object
 *
 * 배열의 객체에서 속성을 목표 객체에 할당
 *
 * @param T Target object / 목표 객체
 *
 * @param U Array of objects / 객체 배열
 *
 * @returns Merged object / 병합된 객체
 *
 * @example
 * type Case1Target = {};
 *
 * type Case1Origin1 = { a: 'a'; };
 *
 * type Case1Origin2 = { b: 'b'; };
 *
 * type Case1Origin3 = { c: 'c'; };
 *
 * type Case1Answer = { a: 'a'; b: 'b'; c: 'c'; };
 *
 * type cases = [
 *   Expect<Equal<Assign<Case1Target, [Case1Origin1, Case1Origin2, Case1Origin3]>, Case1Answer>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/assign
 *
 */
export type Assign<T extends Record<PropertyKey, unknown>, U extends Tuple> = U extends readonly [
  infer First,
  ...infer Rest,
]
  ? If<IsObject<First>, Assign<Merge<T, First>, Rest>, Assign<T, Rest>>
  : T;
