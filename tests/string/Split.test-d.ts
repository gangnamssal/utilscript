import { Equal, Expect } from '../../src/commonness';
import { Split } from '../../src/string';

type cases = [
  Expect<Equal<Split<'Hi! How are you?'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<
    Equal<
      Split<'Hi! How are you?', ''>,
      ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
    >
  >,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'The sine in cosine', 'in'>, ['The s', 'e ', ' cos', 'e']>>,
  Expect<
    Equal<
      Split<'Never say never, forever and ever.', 'ver'>,
      ['Ne', ' say ne', ', fore', ' and e', '.']
    >
  >,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<''>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
  Expect<Equal<Split<'posts/:id/:user/', '/'>, ['posts', ':id', ':user', '']>>,
  // 엣지 케이스
  Expect<Equal<Split<'a', 'a'>, ['', '']>>,
  Expect<Equal<Split<'aaa', 'a'>, ['', '', '', '']>>,
  Expect<Equal<Split<'////', '/'>, ['', '', '', '', '']>>,
  Expect<Equal<Split<'123', ''>, ['1', '2', '3']>>,
  Expect<Equal<Split<'123', '2'>, ['1', '3']>>,
  Expect<Equal<Split<'12345', '23'>, ['1', '45']>>,
  Expect<Equal<Split<'hello world', 'hello'>, ['', ' world']>>,
  Expect<Equal<Split<'hello world', 'world'>, ['hello ', '']>>,
  // 추가 엣지 케이스
  Expect<Equal<Split<'a.b.c', '.'>, ['a', 'b', 'c']>>,
  Expect<Equal<Split<'.a.b.c', '.'>, ['', 'a', 'b', 'c']>>,
  Expect<Equal<Split<'a.b.c.', '.'>, ['a', 'b', 'c', '']>>,
  Expect<Equal<Split<'.a.b.c.', '.'>, ['', 'a', 'b', 'c', '']>>,
  Expect<Equal<Split<'..', '.'>, ['', '', '']>>,
  Expect<Equal<Split<'🍎🍌🍇', '🍌'>, ['🍎', '🍇']>>,
  Expect<Equal<Split<'안녕하세요', '하'>, ['안녕', '세요']>>,
  Expect<Equal<Split<'123456789', '5'>, ['1234', '6789']>>,
  Expect<Equal<Split<'abcabc', 'abc'>, ['', '', '']>>,
];
