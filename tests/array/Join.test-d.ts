import { Equal, Expect } from '../../src/commonness';
import { Join } from '../../src/array';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
  Expect<Equal<Join<[], 'u'>, ''>>,
  Expect<Equal<Join<['1', '1', '1']>, '1,1,1'>>,
  Expect<Equal<Join<[1, 2, 3], ','>, '1,2,3'>>,
  Expect<Equal<Join<[1, '2', 3], '-'>, '1-2-3'>>,
  Expect<Equal<Join<[], ''>, ''>>,
  Expect<Equal<Join<['a'], ''>, 'a'>>,
  Expect<Equal<Join<['a', 'b'], ''>, 'ab'>>,
  Expect<Equal<Join<[0, 1, 2], '0'>, '00102'>>,
  Expect<Equal<Join<readonly ['a', 'b', 'c'], '-'>, 'a-b-c'>>,
  Expect<Equal<Join<readonly [1, 2, 3], ':'>, '1:2:3'>>,
  Expect<Equal<Join<readonly ['x'], '.'>, 'x'>>,
  Expect<Equal<Join<readonly [], '-'>, ''>>,

  // @ts-expect-error: type error
  Expect<Equal<Join<[true, false], '-'>, 'true-false'>>,
];

// 성능 테스트 케이스
type LongArray = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
];

type PerformanceTests = [
  // 긴 배열 테스트
  Expect<
    Equal<
      Join<LongArray, '-'>,
      '1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30'
    >
  >,

  // 긴 구분자 테스트
  Expect<Equal<Join<['a', 'b', 'c'], '-----'>, 'a-----b-----c'>>,
];
