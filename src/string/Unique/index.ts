import { Includes } from '../Includes';

/**
 * Type to remove duplicate characters from a string and keep only unique characters
 *
 * 문자열에서 중복된 문자를 제거하고 유니크한 문자만 남기는 타입
 *
 * @param T String to remove duplicates from / 중복 제거할 문자열
 * @returns String with unique characters / 유니크한 문자만 남은 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Unique<'aabbcc'>, 'abc'>>,
 *   Expect<Equal<Unique<'aabbbcc'>, 'abc'>>,
 *   Expect<Equal<Unique<'aabbbccddeeff'>, 'abcdef'>>,
 *   Expect<
 *     Equal<
 *       Unique<'aabbbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'>,
 *       'abcdefghijklmnopqrstuvwxyz'
 *     >
 *   >,
 * ]
 */

export type Unique<T, R extends string = ''> = T extends `${infer Current}${infer Rest}`
  ? Includes<R, Current> extends true
    ? Unique<Rest, R>
    : Unique<Rest, `${R}${Current}`>
  : R;
