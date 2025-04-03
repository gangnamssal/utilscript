import { Equal, Expect } from '../../src/commonness';
import { ToNumber } from '../../src/string';

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
  // 엣지 케이스
  Expect<Equal<ToNumber<''>, never>>,
  Expect<Equal<ToNumber<'-1'>, -1>>,
  Expect<Equal<ToNumber<'999999999'>, 999999999>>,
  Expect<Equal<ToNumber<'0123'>, number>>,
  Expect<Equal<ToNumber<string>, never>>,
  Expect<Equal<ToNumber<'안녕123'>, never>>,
  Expect<Equal<ToNumber<'123안녕'>, never>>,
  Expect<Equal<ToNumber<'0x123'>, number>>,
  Expect<Equal<ToNumber<'0b101'>, number>>,
  Expect<Equal<ToNumber<'123.456'>, 123.456>>,
];

type T = ToNumber<'0b101'>;
