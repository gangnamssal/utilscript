/**
 * Type to map the types of an object
 *
 * 객체의 타입을 매핑하는 타입
 *
 * @param T - Object to map / 매핑할 객체
 * @param R - Mapping rule (mapFrom: original type, mapTo: type to convert to) / 매핑 규칙 (mapFrom: 원본 타입, mapTo: 변환할 타입)
 * @returns New object type with mapped types / 매핑된 새로운 객체 타입
 *
 * @example
 * type cases = [
 *   Expect<
 *     Equal<
 *       MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>,
 *       { stringToNumber: number }
 *     >
 *   >,
 * 
 *   Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
 * 
 *   Expect<
 *     Equal<
 *       MapTypes<
 *         { name: string; date: Date },
 *         { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
 *       >,
      { name: boolean; date: string }
 *     >
 *   >,
 * ];
 */
export type MapTypes<
  T extends Record<PropertyKey, any>,
  R extends Record<'mapFrom' | 'mapTo', unknown>,
> = {
  [P in keyof T]: [Extract<R, { mapFrom: T[P] }>] extends readonly [never]
    ? T[P]
    : Extract<R, { mapFrom: T[P] }>['mapTo'];
};
