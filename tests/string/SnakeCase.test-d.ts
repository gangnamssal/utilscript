import { Equal, Expect } from '../../src/commonness';
import { SnakeCase } from '../../src/string';

// 기본 테스트 케이스
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

// 복잡한 문자열 테스트
type ComplexString = 'AbCdEfGhIjKlMnOpQrStUvWxYz';
type ExpectedComplexSnakeCase = 'ab_cd_ef_gh_ij_kl_mn_op_qr_st_uv_wx_yz';
type ComplexTest = Expect<Equal<SnakeCase<ComplexString>, ExpectedComplexSnakeCase>>;

// 반복 테스트
type RepeatedTest = Expect<
  Equal<SnakeCase<SnakeCase<SnakeCase<'UserNameTest'>>>, 'user_name_test'>
>;
