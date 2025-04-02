import { Equal, Expect } from '../../src/commonness';
import { TrimRight } from '../../src/string';

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
  // 엣지 케이스
  Expect<Equal<TrimRight<string>, string>>,
  Expect<Equal<TrimRight<'한글   '>, '한글'>>,
  Expect<Equal<TrimRight<'문자열\r\n\t'>, '문자열'>>,
  Expect<Equal<TrimRight<'  \u00A0  '>, '  \u00A0'>>, // 공백 문자 (non-breaking space)
  Expect<Equal<TrimRight<'  \u2000  '>, '  \u2000'>>, // 다른 유형의 공백 문자
  Expect<Equal<TrimRight<'123  '>, '123'>>,
  Expect<Equal<TrimRight<'!@#$%  '>, '!@#$%'>>,
];
