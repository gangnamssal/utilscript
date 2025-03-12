import { IsUnion } from '../../commonness';
import { Tuple } from '../../primitive';

/**
 *
 * Type to append arguments to a function
 *
 * 함수에 인자를 추가하는 유틸리티 타입
 *
 * @param Fn Original function type / 원본 함수 타입
 *
 * @param A Type of argument or array of argument types to append / 추가할 인자 타입 또는 인자 타입 배열
 *
 * @returns A function type with new arguments appended / 새로운 인자가 추가된 함수 타입
 *
 * @example
 * // 단일 인자 추가
 * type Case1 = Append<(a: number, b: string) => number, boolean>;
 * // 결과: (a: number, b: string, x: boolean) => number
 *
 * // 배열 형태로 여러 인자 추가
 * type Case3 = Append<() => void, [undefined, boolean]>;
 * // 결과: (x: undefined, y: boolean) => void
 *
 * // 더 많은 인자 추가
 * type Case6 = Append<() => string, [undefined, boolean, null, number, string]>;
 * // 결과: (x: undefined, y: boolean, z: null, a: number, b: string) => string
 *
 * @link https://www.utilscript.site/docs/usage-function/append
 *
 */

export type Append<Fn extends (...args: Tuple<any>) => unknown, A> = Fn extends (
  ...args: infer Args
) => infer Return
  ? IsUnion<A> extends true
    ? (...args: [...Args, A]) => Return
    : A extends readonly [...infer Rest]
      ? (...args: [...Args, ...Rest]) => Return
      : (...args: [...Args, A]) => Return
  : never;
