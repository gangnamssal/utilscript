/**
 *
 * Merge two objects
 *
 * 두 객체를 병합합니다.
 *
 * @param F First object / 첫 번째 객체
 *
 * @param S Second object / 두 번째 객체
 *
 * @returns Merged object / 병합된 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<Merge<{ a: 1 }, { b: 2 }>, { a: 1; b: 2 }>>,
 *   Expect<Equal<Merge<{ a: 1 }, { a: 2 }>, { a: 2 }>>,
 *   Expect<Equal<Merge<{ a: 1 }, { a: 2; b: 2 }>, { a: 2; b: 2 }>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/merge
 *
 */
export type Merge<F, S> = Omit<S & Omit<F, keyof S>, never>;
