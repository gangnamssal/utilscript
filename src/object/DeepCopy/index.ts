import { If, IsObject } from '../../commonness';

/**
 *
 * Copy an object recursively
 *
 * 객체를 재귀적으로 복사하는 타입
 *
 * @param T Object to copy / 복사할 객체
 *
 * @example
 * type Original = { a: 1; b: 2 };
 * type Copied = DeepCopy<Original>;
 *
 * type cases = [
 *   Expect<Equal<Original, Copied>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-object/deep-copy
 *
 */

export type DeepCopy<T> = If<IsObject<T>, { [K in keyof T]: DeepCopy<T[K]> }, T>;
