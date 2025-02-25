import { Equal, Expect } from '../../commonness';

/**
 * Make certain properties of an object required
 *
 * 특정 프로퍼티를 선택하여 필수로 만들어주는 타입
 *
 * @param T The original object type / 원본 객체 타입
 * @param K The keys to make required / 필수로 만들 키
 *
 * @example
 *   interface User {
 *     name?: string;
 *     age?: number;
 *     address?: string;
 *   }
 *
 *   interface UserRequiredName {
 *     name: string;
 *     age?: number;
 *     address?: string;
 *   }
 *
 * type cases = [
 *   Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
 * ];
 */

export type RequiredByKeys<T, K extends keyof T = keyof T> = Omit<
  Required<Pick<T, K>> & Omit<T, K>,
  never
>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  interface User {
    name?: string;
    age?: number;
    address?: string;
  }

  interface UserRequiredName {
    name: string;
    age?: number;
    address?: string;
  }

  interface UserRequiredNameAndAge {
    name: string;
    age: number;
    address?: string;
  }

  type cases = [
    Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
    Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
    Expect<Equal<RequiredByKeys<User>, Required<User>>>,
    // @ts-expect-error
    Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  ];
}
