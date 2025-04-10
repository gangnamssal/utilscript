import { Length } from '../../array/Length';
import { Push } from '../../array/Push';
import { Tuple } from '../../primitive/Tuple';

/**
 *
 * Extracts the inner type from wrapped types like arrays, functions, promises, etc.
 *
 * 배열, 함수, Promise 등과 같은 래핑된 타입에서 내부 타입을 추출합니다.
 *
 * @param T - The type to unwrap / 언래핑할 타입
 *
 * @param Depth - The maximum recursion depth (default: 10) / 최대 재귀 깊이 (기본값: 10)
 *
 * @returns The inner type of the wrapped type / 래핑된 타입의 내부 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<Unbox<number[]>, number>>,
 *   Expect<Equal<Unbox<() => string>, string>>,
 *   Expect<Equal<Unbox<Promise<boolean>>, boolean>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/un-box
 *
 */
export type UnBox<T, Depth extends number = 10, Compare extends Tuple = []> = Depth extends 0
  ? UnBox<T, 10, Compare>
  : Depth extends Length<Compare>
    ? T
    : T extends Tuple<infer A>
      ? UnBox<A, Depth, Push<Compare, unknown>>
      : T extends (...args: Tuple) => infer F
        ? UnBox<F, Depth, Push<Compare, unknown>>
        : T extends Promise<infer P>
          ? UnBox<P, Depth, Push<Compare, unknown>>
          : T;
