/**
 * Returns an array of keys and values from an object.
 *
 * 객체의 키와 값을 배열로 반환합니다.
 *
 * @param T - The object type whose entries are to be extracted / 객체 타입
 * @param K - The key type used for iteration (internal parameter) / 키 타입
 *
 * @example
 * interface Model {
 *   name: string;
 *   age: number;
 *   locations: string[] | null;
 * }
 *
 * type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
 *
 * type cases = [
 *   Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
 *   Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
 *   Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
 *   Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
 *   Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
 * ]
 */
export type ObjectEntries<T extends Record<PropertyKey, any>, K = keyof T> = K extends keyof T
  ? Required<T>[K] extends never
    ? [K, T[K]]
    : [K, Required<T>[K]]
  : never;
