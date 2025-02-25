import { Equal, Expect } from '../../commonness';

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

export type Append<T, U extends string, V> = {
  [P in keyof (T & Record<U, V>)]: (T & Record<U, V>)[P];
};

/**
 * 테스트 코드
 */
// @ts-ignore

if (process.env.NODE_ENV === 'development') {
  type test1 = {
    key: 'cat';
    value: 'green';
  };

  type testExpect1 = {
    key: 'cat';
    value: 'green';
    home: boolean;
  };

  type test2 = {
    key: 'dog' | undefined;
    value: 'white';
    sun: true;
  };

  type testExpect2 = {
    key: 'dog' | undefined;
    value: 'white';
    sun: true;
    home: 1;
  };

  type test3 = {
    key: 'cow';
    value: 'yellow';
    sun: false;
  };

  type testExpect3 = {
    key: 'cow';
    value: 'yellow';
    sun: false;
    moon: false | undefined;
  };

  type cases = [
    Expect<Equal<Append<test1, 'home', boolean>, testExpect1>>,
    Expect<Equal<Append<test2, 'home', 1>, testExpect2>>,
    Expect<Equal<Append<test3, 'moon', false | undefined>, testExpect3>>,
  ];
}
