import { Equal, Expect } from '../../src/commonness';
import { Trim } from '../../src/string';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
  // 엣지 케이스
  Expect<Equal<Trim<string>, string>>,
  Expect<Equal<Trim<'   한글   '>, '한글'>>,
  Expect<Equal<Trim<'\r\n\t문자열\r\n\t'>, '문자열'>>,
  Expect<Equal<Trim<'  \u00A0  '>, '\u00A0'>>, // 공백 문자 (non-breaking space)
  Expect<Equal<Trim<'  \u2000  '>, '\u2000'>>, // 다른 유형의 공백 문자
  Expect<Equal<Trim<'  123  '>, '123'>>,
  Expect<Equal<Trim<'  !@#$%  '>, '!@#$%'>>,
];
