/**
 * Type representing a tuple
 *
 * 튜플을 나타내는 타입
 *
 * @param T 튜플의 요소 타입 / Type of tuple elements
 * @returns ReadonlyArray<T>
 *
 * @example
 * type StringTuple = Tuple<string> // readonly string[]
 */
export type Tuple<T = unknown> = ReadonlyArray<T>;
