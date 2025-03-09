import { Reversed } from '../Reverse';
import { TrimLeft } from '../TrimLeft';

/**
 * Type that takes a string and returns a new string with all trailing whitespace characters removed
 *
 * 문자열을 받아 모든 후행 공백 문자를 제거한 새로운 문자열을 반환하는 타입
 *
 * @params S - String to be trimmed / 후행 공백 문자를 제거할 문자열
 * @returns String with all trailing whitespace characters removed / 후행 공백 문자를 제거한 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<TrimRight<'str'>, 'str'>>,
 *   Expect<Equal<TrimRight<'str '>, 'str'>>,
 *   Expect<Equal<TrimRight<'str     '>, 'str'>>,
 *   Expect<Equal<TrimRight<'     str     '>, '     str'>>,
 *   Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
 *   Expect<Equal<TrimRight<''>, ''>>,
 *   Expect<Equal<TrimRight<'\n\t '>, ''>>,
 * ];
 */
export type TrimRight<S extends string> = Reversed<TrimLeft<Reversed<S>>>;
