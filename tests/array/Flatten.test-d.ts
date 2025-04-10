import { Equal, Expect } from '../../src/commonness';
import { Flatten } from '../../src/array/Flatten';

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<Flatten<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<Flatten<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
  // 엣지 케이스
  Expect<Equal<Flatten<[[[]]], 1>, [[]]>>,
  Expect<Equal<Flatten<[[[]]], 2>, []>>,
  Expect<
    Equal<Flatten<[string, number, [boolean, [symbol]]]>, [string, number, boolean, [symbol]]>
  >,
  Expect<
    Equal<Flatten<[string, number, [boolean, [symbol]]], 0>, [string, number, [boolean, [symbol]]]>
  >,
  Expect<Equal<Flatten<[[[[string]]]], 10>, [string]>>,
  // 성능 테스트 케이스
  Expect<
    Equal<
      Flatten<[1, [2], [3, [4]], [5, [6, [7]]], [8, [9, [10, [11]]]]], 999>,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    >
  >,
  Expect<
    Equal<
      Flatten<[1, [2], [3, [4]], [5, [6, [7]]], [8, [9, [10, [11]]]]], 2>,
      [1, 2, 3, 4, 5, 6, [7], 8, 9, [10, [11]]]
    >
  >,
  Expect<
    Equal<
      Flatten<[1, [2], [3, [4]], [5, [6, [7]]], [8, [9, [10, [11]]]]], 3>,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11]]
    >
  >,
  Expect<
    Equal<
      Flatten<
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [10, 11, 12],
          [13, 14, 15],
          [16, 17, 18],
          [19, 20, [21, 22, 23]],
        ]
      >,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, [21, 22, 23]]
    >
  >,
];
