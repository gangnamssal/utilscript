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
  Expect<Equal<Split<'posts/:id/:user/', '/'>, ['posts', ':id', ':user']>>,
];
