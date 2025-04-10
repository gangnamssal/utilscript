import { Equal, Expect } from '../../src/commonness';
import { Splice } from '../../src/array';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Splice<[1, 2, 3], 1, 1>, [1, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 1, 2>, [1]>>,
  Expect<Equal<Splice<[1, 2, 3, 4], 1, 2>, [1, 4]>>,
  Expect<Equal<Splice<[1, 2, 3], 1, 0>, [1, 2, 3]>>,
  // 엣지 케이스 추가
  Expect<Equal<Splice<[], 0, 0>, []>>,
  Expect<Equal<Splice<[1, 2, 3], 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 0, 3>, []>>,
  Expect<Equal<Splice<[1, 2, 3], 3, 0>, [1, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 4, 0>, [1, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 0, 1, [9]>, [9, 2, 3]>>,
  Expect<Equal<Splice<[1, 2, 3], 1, 1, [9, 10]>, [1, 9, 10, 3]>>,
  // 문자열 타입 테스트
  Expect<Equal<Splice<['a', 'b', 'c'], 1, 1>, ['a', 'c']>>,
  Expect<Equal<Splice<['hello', 'world'], 0, 1, ['typescript']>, ['typescript', 'world']>>,
  // 객체 타입 테스트
  Expect<Equal<Splice<[{ id: 1 }, { id: 2 }, { id: 3 }], 1, 1>, [{ id: 1 }, { id: 3 }]>>,
  // 혼합 타입 테스트
  Expect<Equal<Splice<[1, 'a', true], 1, 1, [false]>, [1, false, true]>>,
  // 유니온 타입 테스트
  Expect<Equal<Splice<[string | number, boolean], 0, 1, [null]>, [null, boolean]>>,
];

// 성능 테스트 케이스
type LargeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
type LargeInsertArray = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

// 큰 배열에서 중간 요소 삭제
type PerformanceTest1 = Splice<LargeArray, 5, 3>;
// 큰 배열의 시작 부분에 삽입
type PerformanceTest2 = Splice<LargeArray, 0, 0, LargeInsertArray>;
// 큰 배열의 끝 부분에 삽입
type PerformanceTest3 = Splice<LargeArray, 20, 0, LargeInsertArray>;
// 큰 배열의 중간에 큰 배열 삽입
type PerformanceTest4 = Splice<LargeArray, 10, 0, LargeInsertArray>;
// 큰 배열에서 여러 요소 삭제 후 삽입
type PerformanceTest5 = Splice<LargeArray, 5, 10, LargeInsertArray>;
