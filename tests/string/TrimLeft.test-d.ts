import { Equal, Expect } from '../../src/commonness';
import { TrimLeft } from '../../src/string';

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
  // 엣지 케이스
  Expect<Equal<TrimLeft<string>, string>>,
  Expect<Equal<TrimLeft<'   한글   '>, '한글   '>>,
  Expect<Equal<TrimLeft<'\r\n\t문자열'>, '문자열'>>,
  Expect<Equal<TrimLeft<'  \u00A0  '>, '\u00A0  '>>, // 공백 문자 (non-breaking space)
  Expect<Equal<TrimLeft<'  \u2000  '>, '\u2000  '>>, // 다른 유형의 공백 문자
  Expect<Equal<TrimLeft<'  123'>, '123'>>,
  Expect<Equal<TrimLeft<'  !@#$%'>, '!@#$%'>>,
];
