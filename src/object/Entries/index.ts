import { Extends } from '../../commonness/Extends';
import { If } from '../../commonness/If';

/**
 *
 * Returns an array of keys and values from an object.
 *
 * 객체의 키와 값을 배열로 반환합니다.
 *
 * @param T - Object type whose entries are to be extracted / 키와 값을 추출할 객체 타입
 *
 * @returns An array of keys and values from an object / 객체의 키와 값을 배열로 반환
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
 *   Expect<Equal<Entries<Model>, ModelEntries>>,
 *   Expect<Equal<Entries<Partial<Model>>, ModelEntries>>,
 *   Expect<Equal<Entries<{ key?: undefined }>, ['key', undefined]>>,
 *   Expect<Equal<Entries<{ key: undefined }>, ['key', undefined]>>,
 *   Expect<Equal<Entries<{ key: string | undefined }>, ['key', string | undefined]>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/entries
 *
 */
export type Entries<T extends Record<PropertyKey, any>> = NonNullable<
  {
    [K in keyof T]: [K, If<Extends<Required<T>[K], never>, T[K], Required<T>[K]>];
  }[keyof T]
>;
