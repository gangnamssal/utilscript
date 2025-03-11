import { RequiredKeys } from '../RequiredKeys';
/**
 *
 * Get properties that are optional in an object
 *
 * 객체에서 선택적인 프로퍼티만 가져오는 타입
 *
 * @param T - The original object type / 원본 객체 타입
 *
 * @returns Properties that are optional in an object / 선택적인 프로퍼티만 가져오는 타입
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<PickByOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
 *   Expect<Equal<PickByOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-object/pick-by-optional
 *
 */
export type PickByOptional<T> = Omit<T, RequiredKeys<T>>;
