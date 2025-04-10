import { IsNever } from '../../commonness/IsNever';
import { GetToObject } from '../GetToObject';

/**
 *
 * Utility type to pick a value from an object by a string path
 *
 * 문자열 경로로 객체에서 값을 선택하는 유틸리티 타입
 *
 * @param T Object type to pick the value from / 값을 선택할 객체 타입
 *
 * @param U String path to pick the value from / 값을 선택할 문자열 경로
 *
 * @returns Picked value / 선택된 값
 *
 * @example
 *
 * type Obj = {
 *   a: number;
 *   b: string;
 *   c: boolean;
 *   obj: {
 *     d: number;
 *     e: string;
 *     f: boolean;
 *     obj2: {
 *       g: number;
 *       h: string;
 *       i: boolean;
 *     };
 *   };
 *   obj3: {
 *     j: number;
 *     k: string;
 *     l: boolean;
 *   };
 * };
 *
 * type cases = [
 *   Expect<Equal<DeepPick<Obj, ''>, unknown>>,
 *   Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
 *   Expect<Equal<DeepPick<Obj, 'a' | ''>, { a: number } & unknown>>,
 *   Expect<Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>>,
 *   Expect<Equal<DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>, { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/deep-pick
 *
 */

export type DeepPick<T, K> = (
  K extends string
    ? (arg: IsNever<GetToObject<T, K>> extends true ? unknown : GetToObject<T, K>) => unknown
    : never
) extends (arg: infer U) => unknown
  ? U
  : never;
