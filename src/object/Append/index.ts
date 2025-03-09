/**
 *
 * Type to append a new property to an object
 *
 * 객체에 새로운 프로퍼티를 추가하는 유틸리티 타입
 *
 * @params T 원본 객체 타입
 * @params U 추가할 프로퍼티의 키 타입 (string 타입만 허용)
 * @params V 추가할 프로퍼티의 값 타입
 * @returns 새로운 프로퍼티가 추가된 객체 타입을 반환합니다
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
 */

export type Append<T, U extends PropertyKey, V> = {
  [P in keyof (T & Record<U, V>)]: (T & Record<U, V>)[P];
};
