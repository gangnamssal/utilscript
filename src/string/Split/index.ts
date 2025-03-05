import { Equal } from '../../commonness';

/**
 * Split a string into an array of strings
 *
 * 문자열을 문자열 배열로 분리하는 타입
 *
 * @param S String to split / 분리할 문자열
 * @param D Delimiter to split by / 분리할 문자
 * @returns Array of split strings / 분리된 문자열 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Split<'Hi! How are you?'>, ['Hi! How are you?']>>,
 *   Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
 *   Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
 *   Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
 *   Expect<Equal<Split<'', ''>, []>>,
 *   Expect<Equal<Split<'The sine in cosine', 'in'>, ['The s', 'e ', ' cos', 'e']>>,
 *   Expect<Equal<Split<'Never say never, forever and ever.', 'ver'>, ['Ne', ' say ne', ', fore', ' and e', '.']>>,
 *   Expect<Equal<Split<'', 'z'>, ['']>>,
 *   Expect<Equal<Split<''>, ['']>>,
 *   Expect<Equal<Split<string, 'whatever'>, string[]>>,
 * ]
 */
export type Split<S extends string, D extends string | never = never> = [D] extends [never]
  ? [S]
  : Equal<S, D> extends true
    ? []
    : string extends S
      ? string[]
      : S extends `${infer First}${D}${infer Rest}`
        ? Rest extends ''
          ? [First]
          : [First, ...Split<Rest, D>]
        : [S];
