import { Remove } from '../../array';
import { Equal, Expect } from '../../commonness';

/**
 * 함수에 인자를 추가하는 유틸리티 타입
 *
 * @description
 * 기존 함수 타입에 새로운 인자를 추가할 수 있습니다.
 * 최대 26개(A-Z)의 추가 인자를 지원합니다.
 * never 타입의 인자는 자동으로 제거됩니다.
 *
 * @template Fn 원본 함수 타입
 * @template A 첫 번째로 추가할 인자 타입
 * @template B 두 번째로 추가할 인자 타입 (기본값: never)
 * @template C 세 번째로 추가할 인자 타입 (기본값: never)
 * ...
 * @template Z 마지막으로 추가할 인자 타입 (기본값: never)
 *
 * @returns 새로운 인자가 추가된 함수 타입을 반환합니다
 *
 * @example
 * // 기본 사용법
 * type Case1 = AppendArgs<(a: number, b: string) => number, boolean>;
 * // 결과: (a: number, b: string, x: boolean) => number
 *
 * // 여러 인자 추가
 * type Case2 = AppendArgs<() => void, string, number, boolean>;
 * // 결과: (x: string, y: number, z: boolean) => void
 *
 * // never 타입은 무시됨
 * type Case3 = AppendArgs<() => void, string, never, boolean>;
 * // 결과: (x: string, y: boolean) => void
 */

export type AppendArgs<
  Fn extends (...args: any[]) => any,
  A,
  B = never,
  C = never,
  D = never,
  E = never,
  F = never,
  G = never,
  H = never,
  I = never,
  J = never,
  K = never,
  L = never,
  M = never,
  N = never,
  O = never,
  P = never,
  Q = never,
  R = never,
  S = never,
  T = never,
  U = never,
  V = never,
  W = never,
  X = never,
  Y = never,
  Z = never,
> = Fn extends (...args: infer Args) => infer Return
  ? (
      ...args: Remove<
        [...Args, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z],
        never
      >
    ) => Return
  : never;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type Case1 = AppendArgs<(a: number, b: string) => number, boolean>;
  type Result1 = (a: number, b: string, x: boolean) => number;

  type Case2 = AppendArgs<() => void, undefined>;
  type Result2 = (x: undefined) => void;

  type Case3 = AppendArgs<() => void, undefined, boolean>;
  type Result3 = (x: undefined, y: boolean) => void;

  type Case4 = AppendArgs<() => void, undefined, boolean, null>;
  type Result4 = (x: undefined, y: boolean, z: null) => void;

  type Case5 = AppendArgs<() => void, undefined, boolean, null, number>;
  type Result5 = (x: undefined, y: boolean, z: null, a: number) => void;

  type Case6 = AppendArgs<() => void, undefined, boolean, null, number, string>;
  type Result6 = (x: undefined, y: boolean, z: null, a: number, b: string) => void;

  type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
    Expect<Equal<Case3, Result3>>,
    Expect<Equal<Case4, Result4>>,
    Expect<Equal<Case5, Result5>>,
    Expect<Equal<Case6, Result6>>,
    // @ts-expect-error
    AppendArgs<unknown, undefined>,
  ];
}
