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
