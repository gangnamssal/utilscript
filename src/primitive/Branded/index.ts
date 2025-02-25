import { Equal, Expect } from '../../commonness';

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };

/**
 * Type to create a branded type
 *
 * 브랜드 타입을 생성하는 타입
 *
 * @param T 브랜드화할 타입 / Type to be branded
 * @param B 브랜드 식별자 / Brand identifier
 * @returns 브랜드화된 타입 / Branded type
 *
 * @example
 * type EmailBrand = Branded<string, 'email'> // string & { [__brand]: 'email' }
 */
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
