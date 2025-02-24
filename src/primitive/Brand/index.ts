import { Equal, Expect } from '../../commonness';

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };

export type Branded<T, B> = T & Brand<B>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type BrandedString = Branded<string, 'brand'>;
  type BrandedNumber = Branded<number, 'brand'>;

  type String = 'brand';

  type cases = [
    Expect<Equal<BrandedString, BrandedString>>,

    // @ts-expect-error
    Expect<Equal<BrandedString, BrandedNumber>>,

    // @ts-expect-error
    Expect<Equal<BrandedString, String>>,

    // @ts-expect-error
    Expect<Equal<BrandedNumber, BrandedString>>,
  ];
}
