import { Equal, Expect } from '../../src/commonness';
import { SnakeCase } from '../../src/string';

type cases = [
  Expect<Equal<SnakeCase<'hello'>, 'hello'>>,
  Expect<Equal<SnakeCase<'userName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'getElementById'>, 'get_element_by_id'>>,
  Expect<
    Equal<
      SnakeCase<'getElementById' | 'getElementByClassNames'>,
      'get_element_by_id' | 'get_element_by_class_names'
    >
  >,
  // 엣지 케이스
  Expect<Equal<SnakeCase<''>, ''>>,
  Expect<Equal<SnakeCase<'A'>, 'a'>>,
  Expect<Equal<SnakeCase<'a'>, 'a'>>,
  Expect<Equal<SnakeCase<'123'>, '123'>>,
  Expect<Equal<SnakeCase<'ABC'>, 'a_b_c'>>,
  Expect<Equal<SnakeCase<'_userName'>, '_user_name'>>,
  Expect<Equal<SnakeCase<'userName_'>, 'user_name_'>>,
  Expect<Equal<SnakeCase<'user__name'>, 'user__name'>>,
  Expect<Equal<SnakeCase<'UserName'>, 'user_name'>>,
  Expect<Equal<SnakeCase<'USER_NAME'>, 'u_s_e_r__n_a_m_e'>>,
];
