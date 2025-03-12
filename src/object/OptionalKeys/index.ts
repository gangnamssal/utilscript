import { PickByOptional } from '../PickByOptional';

/**
 *
 * Get keys of properties that are optional in an object
 *
 * 객체에서 선택적인 프로퍼티의 키만 가져오는 타입
 *
 * @param T - The original object type / 원본 객체 타입
 *
 * @returns Keys of properties that are optional in an object / 선택적인 프로퍼티의 키만 가져오는 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<OptionalKeys<{ a: number, b?: string }>, 'b'>>,
 *   Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, 'b'>>,
 *   Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, 'b' | 'c' | 'd'>>,
 *   Expect<Equal<OptionalKeys<{}>, never>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-object/optional-keys
 *
 */
export type OptionalKeys<T> = keyof PickByOptional<T>;
