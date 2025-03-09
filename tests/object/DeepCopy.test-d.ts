import { DeepCopy } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

type Original = { a: 1; b: 2 };
type Copied = DeepCopy<Original>;

type cases = [Expect<Equal<Original, Copied>>];
