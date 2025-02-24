import { Equal } from '../Equal';
import { Expect } from '../Expect';

/**
 * DeepCopy
 *
 * 객체를 재귀적으로 복사하는 타입
 *
 * @param T 객체
 *
 * @example
 * type Original = { a: 1; b: 2 };
 * type Copied = DeepCopy<Original>;
 *
 * type cases = [
 *   Expect<Equal<Original, Copied>>,
 * ];
 */

export type DeepCopy<T> = T extends object ? { [K in keyof T]: DeepCopy<T[K]> } : T;

/**
 * 테스트 코드
 */

// @ts-ignore

if (process.env.NODE_ENV === 'development') {
  type Original = { a: 1; b: 2 };
  type Copied = DeepCopy<Original>;

  type cases = [Expect<Equal<Original, Copied>>];
}
