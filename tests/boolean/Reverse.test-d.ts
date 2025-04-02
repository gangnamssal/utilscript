import { Equal, Expect } from '../../src/commonness';
import { Reverse } from '../../src/boolean';

type cases = [
  Expect<Equal<Reverse<true>, false>>,
  Expect<Equal<Reverse<false>, true>>,

  // 엣지 케이스 추가
  Expect<Equal<Reverse<boolean>, boolean>>,

  // @ts-expect-error: boolean 타입이 아닌 경우
  Reverse<string>,
  // @ts-expect-error: boolean 타입이 아닌 경우
  Reverse<number>,
  // @ts-expect-error: boolean 타입이 아닌 경우
  Reverse<null>,
  // @ts-expect-error: boolean 타입이 아닌 경우
  Reverse<undefined>,
  // @ts-expect-error: boolean 타입이 아닌 경우
  Reverse<object>,
];
