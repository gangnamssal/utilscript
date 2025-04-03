import { Expect, Equal } from '../../src/commonness';
import { OptionalKeys } from '../../src/object';

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<
    Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>
  >,
  Expect<Equal<OptionalKeys<{}>, never>>,

  // 엣지 케이스
  Expect<Equal<OptionalKeys<{ a?: undefined }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: null }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: never }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: unknown }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: any }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a: string | undefined; b?: string }>, 'b'>>,
  // @ts-expect-error: not working in production
  Expect<Equal<OptionalKeys<{ [k: string]: number; a?: string }>, 'a'>>,
  // @ts-expect-error: not working in production
  Expect<Equal<OptionalKeys<{ [k: number]: number; 1?: string }>, 1>>,
];
