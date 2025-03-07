import { PickByRequired } from '../PickByRequired';

/**
 * Get keys of properties that are required in an object
 *
 * 객체에서 필수 프로퍼티의 키만 가져오는 타입
 *
 * @param T - The original object type / 원본 객체 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<RequiredKeys<{ a: number, b?: string }>, 'a'>>,
 *   Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, 'a'>>,
 *   Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, 'a' | 'c' | 'd'>>,
 *   Expect<Equal<RequiredKeys<{}>, never>>,
 * ];
 */
export type RequiredKeys<T> = keyof PickByRequired<T>;
