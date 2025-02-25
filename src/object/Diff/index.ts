import { Equal, Expect } from '../../commonness';

/**
 * Get the difference between two objects
 *
 * 두 객체의 차이점을 반환
 *
 * @param O Object / 객체
 * @param O1 Object / 객체
 * @returns Diff / 차이점
 *
 * @example
 *  type Foo = {
 *   name: string;
 *   age: string;
 * };
 *
 * type Bar = {
 *   name: string;
 *   age: string;
 *   gender: number;
 * };
 *
 * type Coo = {
 *   name: string;
 *   gender: number;
 * };
 *
 * type cases = [
 *   Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
 *   Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
 *   Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
 *   Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
 * ];
 */

export type Diff<O, O1> = Omit<Omit<O, keyof O1> & Omit<O1, keyof O>, never>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type Foo = {
    name: string;
    age: string;
  };

  type Bar = {
    name: string;
    age: string;
    gender: number;
  };

  type Coo = {
    name: string;
    gender: number;
  };

  type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
    Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
    Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
  ];
}
