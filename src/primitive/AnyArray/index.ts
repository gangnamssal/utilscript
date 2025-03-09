import { Tuple } from '../Tuple';

/**
 * Type representing any array type (Array or Tuple)
 *
 * 모든 배열 타입(Array 또는 Tuple)을 나타내는 타입
 *
 * @param T 배열의 요소 타입 / Type of array elements
 * @returns Array<T> | Tuple<T>
 *
 * @example
 * type StringArray = AnyArray<string> // string[] | [string, string, ...]
 */
export type AnyArray<T = unknown> = Array<T> | Tuple<T>;
