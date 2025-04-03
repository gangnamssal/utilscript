import { Equal, Expect } from '../../src/commonness';
import { MatchReadonly } from '../../src/array';

type cases = [
  // 일반 배열 테스트
  Expect<Equal<MatchReadonly<[1, 2, 3], [4, 5, 6]>, [4, 5, 6]>>,
  Expect<Equal<MatchReadonly<Array<number>, [string, boolean]>, [string, boolean]>>,
  Expect<Equal<MatchReadonly<number[], [1, 2, 3]>, [1, 2, 3]>>,

  // readonly 배열 테스트
  Expect<Equal<MatchReadonly<readonly [1, 2, 3], [4, 5, 6]>, readonly [4, 5, 6]>>,
  Expect<Equal<MatchReadonly<readonly number[], [string, boolean]>, readonly [string, boolean]>>,
  Expect<
    Equal<MatchReadonly<readonly [string, number], [boolean, string]>, readonly [boolean, string]>
  >,

  // 중첩 배열 테스트
  Expect<Equal<MatchReadonly<[1, [2, 3]], [4, [5, 6]]>, [4, [5, 6]]>>,
  Expect<Equal<MatchReadonly<readonly [1, [2, 3]], [4, [5, 6]]>, readonly [4, [5, 6]]>>,

  // 빈 배열 테스트
  Expect<Equal<MatchReadonly<[], []>, []>>,
  Expect<Equal<MatchReadonly<readonly [], []>, readonly []>>,

  // 다양한 타입 테스트
  Expect<Equal<MatchReadonly<[string, number, boolean], [1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<MatchReadonly<readonly [string, number, boolean], [1, 2, 3]>, readonly [1, 2, 3]>>,
];
