/**
 *
 * Convert union type to intersection type
 *
 * 유니온 타입을 교차 타입으로 변환
 *
 * @param U Union type / 유니온 타입
 *
 * @returns Intersection type / 교차 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToIntersection<'a' | 'b'>, 'a' & 'b'>>,
 *   Expect<Equal<ToIntersection<'a' | 'b' | 'c'>, 'a' & 'b' & 'c'>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-union/to-intersection
 *
 */
export type ToIntersection<U> = (U extends infer T ? (arg: T) => unknown : never) extends (
  arg: infer R,
) => unknown
  ? R
  : never;
