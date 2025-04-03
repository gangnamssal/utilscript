import { Expect, Equal } from '../../src/commonness';
import { RequiredKeys } from '../../src/object';

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,

  // 엣지 케이스
  Expect<Equal<RequiredKeys<{ a?: number; b?: string }>, never>>,
  Expect<Equal<RequiredKeys<{ a: null; b: undefined }>, 'a' | 'b'>>,
  Expect<Equal<RequiredKeys<{ a: never; b: unknown }>, 'a' | 'b'>>,
  Expect<Equal<RequiredKeys<{ a: any; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ 'a-b': number; 'c-d'?: string }>, 'a-b'>>,
  Expect<Equal<RequiredKeys<{ [k: string]: number }>, string | number>>,
  Expect<Equal<RequiredKeys<{ [k: number]: string }>, number>>,
  Expect<Equal<RequiredKeys<{ a: string | undefined; b: number }>, 'a' | 'b'>>,
];
