import { Equal, Expect } from '../../commonness';

/**
 * Merge two objects
 *
 * 두 객체를 병합
 *
 * @param F First object / 첫 번째 객체
 * @param S Second object / 두 번째 객체
 * @returns Merged object / 병합된 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<Merge<{ a: 1 }, { b: 2 }>, { a: 1; b: 2 }>>,
 *   Expect<Equal<Merge<{ a: 1 }, { a: 2 }>, { a: 2 }>>,
 *   Expect<Equal<Merge<{ a: 1 }, { a: 2; b: 2 }>, { a: 2; b: 2 }>>,
 * ]
 */
export type Merge<F, S> = Omit<S & Omit<F, keyof S>, never>;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type Foo = {
    a: number;
    b: string;
  };
  type Bar = {
    b: number;
    c: boolean;
  };

  type cases = [
    Expect<
      Equal<
        Merge<Foo, Bar>,
        {
          a: number;
          b: number;
          c: boolean;
        }
      >
    >,
    Expect<Equal<Merge<{ a: 1 }, { b: 2 }>, { a: 1; b: 2 }>>,
    Expect<Equal<Merge<{ a: 1 }, { a: 2 }>, { a: 2 }>>,
    Expect<Equal<Merge<{ a: 1 }, { a: 2; b: 2 }>, { a: 2; b: 2 }>>,
  ];
}
