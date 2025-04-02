import { Equal, Expect } from '../../src/commonness';
import { ToString } from '../../src/number';

type cases = [
  Expect<Equal<ToString<123>, '123'>>,
  Expect<Equal<ToString<0>, '0'>>,
  Expect<Equal<ToString<-123>, '-123'>>,
  Expect<Equal<ToString<123.456>, '123.456'>>,
  Expect<Equal<ToString<0.0>, '0'>>,

  // 엣지 케이스 추가
  Expect<Equal<ToString<999999999>, '999999999'>>,
  Expect<Equal<ToString<-0>, '0'>>,
  Expect<Equal<ToString<-0.0>, '0'>>,
  Expect<Equal<ToString<1e10>, '10000000000'>>,
  Expect<Equal<ToString<-1e10>, '-10000000000'>>,
  Expect<Equal<ToString<0.000001>, '0.000001'>>,
  Expect<Equal<ToString<1.0000000000000002>, '1.0000000000000002'>>,

  // @ts-expect-error: 숫자 타입이 아닌 경우
  ToString<string>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  ToString<boolean>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  ToString<null>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  ToString<undefined>,
];
