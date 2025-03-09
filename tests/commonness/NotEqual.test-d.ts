import { Expect, NotEqual } from '../../src/commonness';

type cases = [Expect<NotEqual<1, 2>>, Expect<NotEqual<'a', 'b'>>];
