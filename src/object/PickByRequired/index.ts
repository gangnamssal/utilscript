/**
 * Pick properties that are required in an object
 *
 * 객체에서 필수 프로퍼티만 선택하는 타입
 *
 * @param T - The original object type / 원본 객체 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<PickByRequired<{ foo: number; bar?: string }>, { foo: number }>>,
 *   Expect<Equal<PickByRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
 * ]
 */
export type PickByRequired<T> = Omit<
  { [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K] },
  never
>;
