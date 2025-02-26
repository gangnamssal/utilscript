import { Remove } from '../../array';
import { Tuple } from '../../primitive';

/**
 *
 * Type to append arguments to a function
 *
 * 함수에 인자를 추가하는 유틸리티 타입
 *
 * @description
 * 기존 함수 타입에 새로운 인자를 추가할 수 있습니다.
 * 최대 26개(A-Z)의 추가 인자를 지원합니다.
 * never 타입의 인자는 자동으로 제거됩니다.
 *
 * @params Fn 원본 함수 타입
 * @params A 첫 번째로 추가할 인자 타입
 * @params B 두 번째로 추가할 인자 타입 (기본값: never)
 * @params C 세 번째로 추가할 인자 타입 (기본값: never)
 * ...
 * @params Z 마지막으로 추가할 인자 타입 (기본값: never)
 * @returns 새로운 인자가 추가된 함수 타입을 반환합니다
 *
 * @example
 * // 기본 사용법
 * type Case1 = Append<(a: number, b: string) => number, boolean>;
 * // 결과: (a: number, b: string, x: boolean) => number
 *
 * // 여러 인자 추가
 * type Case2 = Append<() => void, string, number, boolean>;
 * // 결과: (x: string, y: number, z: boolean) => void
 *
 * // never 타입은 무시됨
 * type Case3 = Append<() => void, string, never, boolean>;
 * // 결과: (x: string, y: boolean) => void
 */

export type Append<
  Fn extends (...args: Tuple<any>) => unknown,
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
