import { Expect, Equal } from '../../src/commonness';
import { PickByOptional } from '../../src/object';

type cases = [
  Expect<Equal<PickByOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<PickByOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,

  // 엣지 케이스
  Expect<Equal<PickByOptional<{}>, {}>>,
  Expect<Equal<PickByOptional<{ a?: undefined }>, { a?: undefined }>>,
  Expect<Equal<PickByOptional<{ a?: null }>, { a?: null }>>,
  Expect<Equal<PickByOptional<{ a?: never }>, { a?: never }>>,
  Expect<Equal<PickByOptional<{ a?: unknown }>, { a?: unknown }>>,
  Expect<Equal<PickByOptional<{ a?: any }>, { a?: any }>>,
  Expect<
    Equal<PickByOptional<{ a: string; b?: number; c?: boolean }>, { b?: number; c?: boolean }>
  >,
  Expect<Equal<PickByOptional<{ a: string | undefined; b?: string }>, { b?: string }>>,

  // @ts-expect-error: not working in production
  Expect<Equal<PickByOptional<{ [k: string]: number; a?: string }>, { a?: string }>>,
  // @ts-expect-error: not working in production
  Expect<Equal<PickByOptional<{ [k: number]: number; 1?: string }>, { 1?: string }>>,
];
