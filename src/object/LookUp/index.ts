import { IsNever } from '../../commonness';

/**
 *
 * Extract a type that matches a specific key value
 *
 * 특정 키의 값을 추출하는 타입
 *
 * @param U Union type of object types / 객체 타입의 유니온 타입
 *
 * @param F Key / 추출할 속성의 키 이름
 *
 * @param T Value / 추출할 속성의 값(optional)
 *
 * @returns Object / 추출된 객체 타입
 *
 * @example
 * interface Cat {
 *   type: 'cat';
 *   breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
 * }
 *
 * interface Dog {
 *   type: 'dog';
 *   breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
 *   color: 'brown' | 'white' | 'black';
 * }
 *
 *
 * type Animal = Cat | Dog;
 *
 * type cases = [
 *   Expect<Equal<LookUp<Animal, 'type', 'dog'>, Dog>>,
 *   Expect<Equal<LookUp<Animal, 'type', 'cat'>, Cat>>,
 *   Expect<Equal<LookUp<Animal, 'breeds', 'Curl'>, Cat>>,
 *   Expect<Equal<LookUp<Animal, 'breeds', 'Boxer'>, Dog>>,
 * ]
 *
 * interface Foo {
 *   foo: string;
 *   common: boolean;
 * };
 *
 * interface Bar {
 *   bar: number;
 *   common: boolean;
 * };
 *
 * interface Other {
 *   other: string;
 * };
 *
 * type cases2 = [
 *   Expect<Equal<LookUp<Foo | Bar, 'foo'>, Foo>>,
 *   Expect<Equal<LookUp<Foo | Bar, 'common'>, Foo | Bar>>,
 *   Expect<Equal<LookUp<Foo | Bar | Other, 'common'>, Foo | Bar>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-object/lookup
 *
 */

export type LookUp<U, F, T = never> = U extends any
  ? IsNever<T> extends true
    ? F extends keyof U
      ? U
      : never
    : F extends keyof U
      ? T extends U[F]
        ? U
        : never
      : never
  : never;
