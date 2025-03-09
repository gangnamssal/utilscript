import { LookUp } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Animal = Cat | Dog;

type cases = [
  Expect<Equal<LookUp<Animal, 'type', 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'type', 'cat'>, Cat>>,
  Expect<Equal<LookUp<Animal, 'breeds', 'Curl'>, Cat>>,
  Expect<Equal<LookUp<Animal, 'breeds', 'Boxer'>, Dog>>,
];
