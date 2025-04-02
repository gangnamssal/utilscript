import { Equal, Expect } from '../../src/commonness';
import { ParseUrlParams } from '../../src/string';

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
  // 엣지케이스 추가
  Expect<Equal<ParseUrlParams<'/'>, never>>,
  Expect<Equal<ParseUrlParams<'no-params'>, never>>,
  Expect<Equal<ParseUrlParams<':id/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id123'>, 'id123'>>,
  Expect<Equal<ParseUrlParams<'posts/::id'>, ':id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id_user'>, 'id_user'>>,
  Expect<
    Equal<ParseUrlParams<':multiple/:params/:in/:path'>, 'multiple' | 'params' | 'in' | 'path'>
  >,
];
