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

export type ToEnum<T extends Tuple, N extends boolean = false> = N extends true
  ? Readonly<ZipToMap<Zip<CapitalizeWords<T>, ToIndex<T>>>>
  : Readonly<ZipToMap<Zip<CapitalizeWords<T>, T>>>;
