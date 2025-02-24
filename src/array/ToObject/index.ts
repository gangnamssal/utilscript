import { Equal, Expect } from '../../commonness';
import { Tuple } from '../../primitive';

/**
 * Convert a tuple to an object
 *
 * 튜플을 객체로 변환하는 타입
 *
 * @param T Tuple to convert / 변환할 튜플
 * @returns Object with keys from the tuple / 튜플의 키를 가진 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToObject<['a', 'b', 'c']>, { a: 'a', b: 'b', c: 'c' }>>,
 *   ]
 */
export type ToObject<T extends Tuple<PropertyKey>> = {
  [key in T[number]]: key;
};

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
  const tupleNumber = [1, 2, 3, 4] as const;
  const sym1 = Symbol(1);
  const sym2 = Symbol(2);
  const tupleSymbol = [sym1, sym2] as const;
  const tupleMix = [1, '2', 3, '4', sym1] as const;

  type cases = [
    Expect<
      Equal<
        ToObject<typeof tuple>,
        { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
      >
    >,
    Expect<Equal<ToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
    Expect<Equal<ToObject<typeof tupleSymbol>, { [sym1]: typeof sym1; [sym2]: typeof sym2 }>>,
    Expect<
      Equal<ToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4'; [sym1]: typeof sym1 }>
    >,
  ];

  // @ts-expect-error
  type error = ToObject<[[1, 2], {}]>;
}
