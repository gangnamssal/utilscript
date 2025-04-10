import { Equal, Expect } from '../../src/commonness';
import { Zip } from '../../src/array/Zip';

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
  // 엣지 케이스 추가
  Expect<Equal<Zip<[1], []>, []>>,
  Expect<Equal<Zip<readonly [1, 2], readonly [3, 4]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Zip<[null, undefined], [undefined, null]>, [[null, undefined], [undefined, null]]>>,
  Expect<Equal<Zip<[never], [unknown]>, [[never, unknown]]>>,
  Expect<Equal<Zip<[any], [string]>, [[any, string]]>>,
];

// 성능 테스트 - 큰 배열에서의 동작 확인
type LargeArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
type LargeArray2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

type LargeZipResult = Zip<LargeArray1, LargeArray2>;

// 중첩된 Zip 성능 테스트
type NestedZipTest = Zip<Zip<[1, 2], [3, 4]>, Zip<[5, 6], [7, 8]>>;
