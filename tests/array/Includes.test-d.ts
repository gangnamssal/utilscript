import { Equal, Expect } from '../../src/commonness';
import { Includes } from '../../src/array/Includes';

const tuple = ['Kars', 'Esidisi', 'Wamuu', 'Santana'] as const;

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[object], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
  Expect<Equal<Includes<typeof tuple, 'Kars'>, true>>,
  // 추가된 엣지 케이스
  Expect<Equal<Includes<[], 1>, false>>,
  Expect<Equal<Includes<[any], 1>, false>>,
  Expect<Equal<Includes<[unknown], 1>, false>>,
  Expect<Equal<Includes<[never], 1>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 1 & 2>, false>>,
  Expect<Equal<Includes<[{}], { toString(): string }>, false>>,
  Expect<Equal<Includes<[null, undefined], null | undefined>, false>>,
  // 성능 테스트 케이스
  Expect<
    Equal<
      Includes<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20>,
      true
    >
  >,
  Expect<
    Equal<
      Includes<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21>,
      false
    >
  >,
  Expect<
    Equal<
      Includes<
        [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
        ],
        'z'
      >,
      false
    >
  >,
  Expect<Equal<Includes<[1, 2, 3, ...number[]], 4>, false>>,
  Expect<Equal<Includes<[...string[], 'a', 'b', 'c'], 'a'>, true>>,
  Expect<Equal<Includes<[...string[], 'a', 'b', 'c'], 'd'>, false>>,
  Expect<
    Equal<
      Includes<
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...number[]],
        42
      >,
      false
    >
  >,
];
