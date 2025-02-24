import { Equal } from '../Equal';
import { Expect } from '../Expect';
import { DeepCopy } from '../DeepCopy';

/**
 * Alike
 *
 * 두 객체가 동일한 타입인지 확인하는 타입
 *
 * @param X 객체
 * @param Y 객체
 *
 * @example
 * type cases = [
 *   Expect<Equal<Alike<{ a: 1 }, { a: 1 }>, true>>,
 *   Expect<Equal<Alike<{ a: 1 }, { a: 2 }>, false>>,
 * ];
 */
export type Alike<X, Y> =
  (<T>() => T extends DeepCopy<X> ? 1 : 2) extends <T>() => T extends DeepCopy<Y> ? 1 : 2
    ? true
    : false;

/**
 * 테스트 코드
 */

// @ts-ignore

if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<Alike<{ a: 1 }, { a: 1 }>, true>>,
    Expect<Equal<Alike<{ a: 1 }, { a: 2 }>, false>>,
  ];
}
