import { Equal, Expect } from '../../src/commonness';
import { Length } from '../../src/array/Length';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error: type error
  Length<5>,
  // @ts-expect-error: type error
  Length<'hello world'>,
];
