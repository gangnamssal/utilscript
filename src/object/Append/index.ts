/**
 *
 * Type to append a new property to an object
 *
 * 객체에 새로운 프로퍼티를 추가하는 유틸리티 타입
 *
 * @param T Original object type / 원본 객체 타입
 *
 * @param U Type of the key for the property to add (only string type is allowed) / 추가할 프로퍼티의 키 타입 (string 타입만 허용)
 *
 * @param V Type of the value for the property to add / 추가할 프로퍼티의 값 타입
 *
 * @returns A new object type with the new property added / 새로운 프로퍼티가 추가된 객체 타입
 *
 * @example
 * type User = {
 *   name: string;
 *   age: number;
 * }
 *
 * type UserWithEmail = Append<User, 'email', string>;
 * // 결과: {
 * //   name: string;
 * //   age: number;
 * //   email: string;
 * // }
 *
 * @link https://www.utilscript.site/docs/usage-object/append
 *
 */

export type Append<T, U extends PropertyKey, V> = {
  [P in keyof (Omit<T, U> & Record<U, V>)]: (Omit<T, U> & Record<U, V>)[P];
};
