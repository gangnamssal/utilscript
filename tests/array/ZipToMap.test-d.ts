import { ZipToMap } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6]]>, { 1: 2; 3: 4; 5: 6 }>>,
  Expect<Equal<ZipToMap<[[1, 2], [3, 4], [5, 6], [7, 8]]>, { 1: 2; 3: 4; 5: 6; 7: 8 }>>,
  Expect<Equal<ZipToMap<[]>, unknown>>,
  Expect<Equal<ZipToMap<[['a', 1], ['b', 2], ['c', 3]]>, { a: 1; b: 2; c: 3 }>>,
  Expect<Equal<ZipToMap<[['true', false], ['false', true]]>, { true: false; false: true }>>,
  Expect<
    Equal<ZipToMap<[['string', number], ['boolean', object]]>, { string: number; boolean: object }>
  >,
];

// 성능 테스트를 위한 큰 데이터셋
type LargeDataset = [
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
  [4, 'd'],
  [5, 'e'],
  [6, 'f'],
  [7, 'g'],
  [8, 'h'],
  [9, 'i'],
  [10, 'j'],
  [11, 'k'],
  [12, 'l'],
  [13, 'm'],
  [14, 'n'],
  [15, 'o'],
  [16, 'p'],
  [17, 'q'],
  [18, 'r'],
  [19, 's'],
  [20, 't'],
];

// 성능 테스트
type PerformanceTest = [
  // 큰 데이터셋 변환 테스트
  Expect<
    Equal<
      ZipToMap<LargeDataset>,
      {
        1: 'a';
        2: 'b';
        3: 'c';
        4: 'd';
        5: 'e';
        6: 'f';
        7: 'g';
        8: 'h';
        9: 'i';
        10: 'j';
        11: 'k';
        12: 'l';
        13: 'm';
        14: 'n';
        15: 'o';
        16: 'p';
        17: 'q';
        18: 'r';
        19: 's';
        20: 't';
      }
    >
  >,

  // 중첩된 구조 테스트
  Expect<Equal<ZipToMap<[[1, [1, 2]], [2, [3, 4]]]>, { 1: [1, 2]; 2: [3, 4] }>>,

  // 복잡한 키 타입 테스트
  Expect<Equal<ZipToMap<[['a' | 'b', 1], ['c' | 'd', 2]]>, { a: 1; b: 1; c: 2; d: 2 }>>,
];
