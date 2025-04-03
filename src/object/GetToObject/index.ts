import { If, IsNever } from '../../commonness';
import { Get } from '../Get';

type GetToObjectHelper<T, K extends string> = K extends keyof T
  ? Pick<T, K>
  : K extends `${infer A}.${infer B}`
    ? A extends keyof T
      ? B extends ''
        ? T[A]
        : { [k in A]: GetToObjectHelper<T[A], B> }
      : never
    : K extends keyof T
      ? { [k in K]: T[K] }
      : never;

/**
 *
 * Utility type to get a value from an object by a string path
 *
 * 문자열 경로로 객체에서 값을 가져오는 유틸리티 타입
 *
 * @param T Object type to get the value from / 값을 가져올 객체 타입
 *
 * @param K String path to get the value from / 값을 가져올 문자열 경로
 *
 * @returns Value of the object at the path / 경로에 있는 객체의 값
 *
 * @example
 * type cases = [
 *   Expect<Equal<GetToObject<{ a: 1 }, 'a'>, { a: 1 }>>,
 *   Expect<Equal<GetToObject<{ a: 1 }, 'b'>, never>>,
 *   Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.b.d'>, never>>,
 *   Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.b.c'>, { a: { b: { c: 1 } } }>>
 *   Expect<Equal<GetToObject<{ a: { b: { c: 1 } } }, 'a.k.d'>, never>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/get-to-object
 *
 */
export type GetToObject<T, K extends string> = If<
  IsNever<Get<GetToObjectHelper<T, K>, K>>,
  never,
  GetToObjectHelper<T, K>
>;
