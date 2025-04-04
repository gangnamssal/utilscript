/**
 *
 * Utility type to deeply omit properties from an object by a string path
 *
 * 문자열 경로로 객체에서 속성을 깊이 제거하는 유틸리티 타입
 *
 * @param O Object type to omit properties from / 속성을 제거할 객체 타입
 *
 * @param K String path to omit properties from / 속성을 제거할 문자열 경로
 *
 * @returns Object with omitted properties / 속성이 제거된 객체
 *
 * @example
 *
 * type obj = {
 *   person: {
 *     name: string;
 *     age: {
 *       value: number;
 *     };
 *   };
 * };
 *
 * type cases = [
 *   Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
 *   Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
 *   Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,
 *   Expect<Equal<DeepOmit<obj, 'person.nonexistent'>, obj>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/deep-omit
 *
 */

export type DeepOmit<O extends Record<PropertyKey, unknown>, K extends string> = K extends keyof O
  ? Omit<O, K>
  : {
      [P in keyof O]: K extends `${infer Key}.${infer Rest}`
        ? Key extends P
          ? O[Key] extends Record<PropertyKey, unknown>
            ? DeepOmit<O[Key], Rest>
            : O[P]
          : O[P]
        : O[P];
    };
