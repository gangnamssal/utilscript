/**
 * Convert union type to intersection type of functions
 *
 * 유니온 타입을 함수 교차 타입으로 변환
 *
 * @param T Union type to convert / 변환할 유니온 타입
 * @returns Intersection type of functions / 함수 교차 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToFnIntersection<'foo' | 42 | true>, (() => 'foo') & (() => 42) & (() => true)>>,
 * ]
 */
export type ToFnIntersection<T> = (T extends any ? (arg: () => T) => any : never) extends (
  arg: infer R,
) => any
  ? R
  : never;
