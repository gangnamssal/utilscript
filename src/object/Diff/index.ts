import { Equal } from '../../commonness/Equal';
import { If } from '../../commonness/If';

/**
 *
 * Get the difference between two objects
 *
 * 두 객체의 차이점을 반환
 *
 * @param O Object / 객체
 *
 * @param O1 Object / 객체
 *
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
 *
 * @link https://www.utilscript.site/docs/usage-object/diff
 *
 */

export type Diff<O, O1> = {
  [K in keyof (O & O1) as K extends keyof O
    ? K extends keyof O1
      ? If<Equal<O[K], O1[K]>, never, K>
      : K
    : K extends keyof O1
      ? K
      : never]: K extends keyof O1 ? O1[K] : K extends keyof O ? O[K] : never;
};
