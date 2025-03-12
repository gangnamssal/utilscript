import { DeepCopy } from '../DeepCopy';

/**
 *
 * Type to check if two objects are of the same type
 *
 * 두 객체가 동일한 타입인지 확인하는 타입
 *
 * @param X Compare object / 비교할 객체
 *
 * @param Y Compare object / 비교할 객체
 *
 * @returns Whether the two objects are of the same type / 두 객체가 동일한 타입인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<Alike<{ a: 1 }, { a: 1 }>, true>>,
 *   Expect<Equal<Alike<{ a: 1 }, { a: 2 }>, false>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-object/alike
 *
 */
export type Alike<X, Y> =
  (<T>() => T extends DeepCopy<X> ? 1 : 2) extends <T>() => T extends DeepCopy<Y> ? 1 : 2
    ? true
    : false;
