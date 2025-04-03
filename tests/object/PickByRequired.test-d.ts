import { Expect, Equal } from '../../src/commonness';
import { PickByRequired } from '../../src/object';

type cases = [
  Expect<Equal<PickByRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<PickByRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
  Expect<Equal<PickByRequired<{}>, {}>>,
  Expect<Equal<PickByRequired<{ foo?: number; bar?: string }>, {}>>,
  Expect<Equal<PickByRequired<{ foo: number; bar: string }>, { foo: number; bar: string }>>,
  Expect<
    Equal<PickByRequired<{ foo: number | undefined; bar?: string }>, { foo: number | undefined }>
  >,

  // 엣지 케이스
  Expect<Equal<PickByRequired<{ a: null; b?: undefined }>, { a: null }>>,
  Expect<Equal<PickByRequired<{ a: never; b?: unknown }>, { a: never }>>,
  Expect<Equal<PickByRequired<{ a: never; b?: any }>, { a: never }>>,
  Expect<Equal<PickByRequired<{ a: any; b?: string }>, { a: any }>>,
  Expect<Equal<PickByRequired<{ 'a-b': number; 'c-d'?: string }>, { 'a-b': number }>>,
  Expect<Equal<PickByRequired<{ [k: string]: number }>, { [k: string]: number }>>,
  Expect<Equal<PickByRequired<{ [k: number]: string }>, { [k: number]: string }>>,
  Expect<Equal<PickByRequired<{ a: string | undefined; b?: number }>, { a: string | undefined }>>,
];
