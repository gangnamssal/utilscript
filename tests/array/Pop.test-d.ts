import { Equal, Expect } from '../../src/commonness';
import { Pop } from '../../src/array/Pop';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
  // 엣지 케이스 추가
  Expect<Equal<Pop<[1]>, []>>,
  Expect<Equal<Pop<readonly [1, 2, 3]>, readonly [1, 2]>>,
  Expect<Equal<Pop<readonly []>, readonly []>>,
  Expect<Equal<Pop<readonly [1]>, readonly []>>,
  // @ts-expect-error: type error
  Pop<number>,
  // @ts-expect-error: type error
  Pop<string>,
  // @ts-expect-error: type error
  Pop<{ length: 10 }>,
  // @ts-expect-error: type error
  Pop<null>,
  // @ts-expect-error: type error
  Pop<undefined>,
];

// 성능 테스트
type LargeTuple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
type LargeReadonlyTuple = readonly [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

// 일반 튜플 성능 테스트
type TestLargeTuple = Pop<LargeTuple>;
// 읽기 전용 튜플 성능 테스트
type TestLargeReadonlyTuple = Pop<LargeReadonlyTuple>;

// 중첩 호출 성능 테스트
type NestedPop<T extends any[]> = Pop<Pop<Pop<T>>>;
type TestNestedPop = NestedPop<LargeTuple>;
