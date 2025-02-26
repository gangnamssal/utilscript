import { AnyArray } from '../../primitive';

/**
 * DeepReadonly
 *
 * 객체의 모든 속성을 읽기 전용으로 만드는 타입
 *
 * @param T Object / 객체
 * @returns DeepReadonly object / 읽기 전용 객체
 *
 * @example
 * const X = { x: { y: { z: string } } };
 *
 * type cases = [
 *   Expect<Equal<DeepReadonly<X>, { readonly x: { readonly y: { readonly z: string } } }>>,
 * ]
 */

export type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<PropertyKey, any>
    ? T[k] extends (...args: AnyArray<any>) => unknown
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k];
};
