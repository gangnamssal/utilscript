import { Tuple } from '../../primitive/index.js';
import { Replace } from '../Replace/index.js';
import { Split } from '../Split';
import { StartsWith } from '../StartWith/index.js';

type Recursive<T extends Tuple, R = never> = T extends [
  infer First extends string,
  ...infer Rest extends string[],
]
  ? StartsWith<First, ':'> extends true
    ? Recursive<Rest, R | Replace<First, ':', ''>>
    : Recursive<Rest, R>
  : R;

/**
 * Extract parameters from a URL path string
 *
 * URL 문자열에서 파라미터를 추출하는 타입
 *
 * @param S URL 경로 문자열 / URL path string
 * @returns 추출된 파라미터 이름들의 유니온 타입 / Union type of extracted parameter names
 *
 * @example
 * type cases = [
 *   Expect<Equal<ParseUrlParams<''>, never>>,
 *   Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
 *   Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
 *   Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
 *   Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
 *   Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
 * ]
 */
export type ParseUrlParams<S extends string> = Recursive<Split<S, '/'>>;
