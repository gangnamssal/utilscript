import { Extends } from '../../commonness/Extends';
import { If } from '../../commonness/If';

type RecursiveGetType<T, K extends string> = K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? If<Extends<Rest, ''>, T[First], RecursiveGetType<T[First], Rest>>
    : never
  : K extends keyof T
    ? T[K]
    : never;

/**
 *
 * Get a value from an object using a string path
 *
 * 문자열 경로를 사용하여 객체에서 값을 가져오는 타입
 *
 * @param T Object to get value from / 값을 가져올 객체
 *
 * @param K String path to get value from / 값을 가져올 문자열 경로
 *
 * @returns Value at path / 경로에 있는 값
 *
 * @example
 * type cases = [
 *   Expect<Equal<Get<{ a: 1 }, 'a'>, 1>>,
 *   Expect<Equal<Get<{ a: { b: 2 } }, 'a.b'>, 2>>,
 *   Expect<Equal<Get<{ a: { b: 2 } }, 'a.c'>, never>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/get
 *
 */
export type Get<T, K extends string> = K extends keyof T ? T[K] : RecursiveGetType<T, K>;
