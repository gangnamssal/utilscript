import { Equal, Expect } from '../../src/commonness';
import { Chunk } from '../../src/array';

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
  // 추가 테스트 케이스
  Expect<Equal<Chunk<[1, 2, 3, 4, 5], 3>, [[1, 2, 3], [4, 5]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 0>, [1, 2, 3]>>,
  Expect<Equal<Chunk<['a', 'b', 'c', 'd'], 2>, [['a', 'b'], ['c', 'd']]>>,
  Expect<Equal<Chunk<[null, undefined, 0, false], 1>, [[null], [undefined], [0], [false]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4, 5, 6], 4>, [[1, 2, 3, 4], [5, 6]]>>,
  // readonly 엣지 케이스
  Expect<Equal<Chunk<readonly [1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<readonly [1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<readonly [1, 2, 3, 4, 5], 3>, [[1, 2, 3], [4, 5]]>>,
];
