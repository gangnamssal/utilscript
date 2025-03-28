import { Equal, Expect } from '../../src/commonness';
import { ToObject } from '../../src/array/ToObject';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const sym1 = Symbol(1);
const sym2 = Symbol(2);
const tupleSymbol = [sym1, sym2] as const;
const tupleMix = [1, '2', 3, '4', sym1] as const;
const emptyTuple = [] as const;
const singleElementTuple = ['single'] as const;
const duplicateKeysTuple = ['a', 'b', 'a'] as const;

type cases = [
  Expect<
    Equal<
      ToObject<typeof tuple>,
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >,
  Expect<Equal<ToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<ToObject<typeof tupleSymbol>, { [sym1]: typeof sym1; [sym2]: typeof sym2 }>>,
  Expect<Equal<ToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4'; [sym1]: typeof sym1 }>>,
  Expect<Equal<ToObject<typeof emptyTuple>, {}>>,
  Expect<Equal<ToObject<typeof singleElementTuple>, { single: 'single' }>>,
  Expect<Equal<ToObject<typeof duplicateKeysTuple>, { a: 'a'; b: 'b' }>>,
];

// @ts-expect-error: type error
type error = ToObject<[[1, 2], object]>;

// @ts-expect-error: 튜플 요소가 PropertyKey가 아닌 경우
type errorNonPropertyKey = ToObject<[{}, []]>;

// @ts-expect-error: 튜플이 아닌 경우
type errorNotTuple = ToObject<string>;
