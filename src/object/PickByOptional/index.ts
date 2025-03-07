import { PickByRequired } from '../PickByRequired';
/**
 * Get properties that are optional in an object
 *
 * 객체에서 선택적인 프로퍼티만 가져오는 타입
 *
 * @param T - The original object type / 원본 객체 타입
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
 *   Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
 * ];
 */
export type GetOptional<T> = Omit<T, keyof PickByRequired<T>>;
