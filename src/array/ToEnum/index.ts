import { Tuple } from '../../primitive';
import { ToIndex } from '../ToIndex';
import { Zip } from '../Zip';
import { ZipToMap } from '../ZipToMap';

type CapitalizeWords<T extends Tuple, R extends Tuple = []> = T extends readonly [
  infer First extends string,
  ...infer Rest extends Tuple<string>,
]
  ? CapitalizeWords<Rest, [...R, Capitalize<First>]>
  : R;

/**
 *
 * Convert an array to an enum
 *
 * 튜플을 열거형으로 변환
 *
 * @param T - The array to convert / 변환할 튜플
 *
 * @param N - Whether to convert to a readonly enum / 읽기 전용 열거형으로 변환할지 여부
 *
 * @returns The enum / 열거형
 *
 * @example
 * const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;
 *
 * type cases = [
 *   Expect<Equal<ToEnum<typeof OperatingSystem>, { readonly MacOS: 'macOS'; readonly Windows: 'Windows'; readonly Linux: 'Linux'; }>>,
 *   Expect<Equal<ToEnum<typeof OperatingSystem, true>, { readonly MacOS: 0; readonly Windows: 1; readonly Linux: 2; }>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/to-enum
 *
 */

export type ToEnum<T extends Tuple, N extends boolean = false> = N extends true
  ? Readonly<ZipToMap<Zip<CapitalizeWords<T>, ToIndex<T>>>>
  : Readonly<ZipToMap<Zip<CapitalizeWords<T>, T>>>;
