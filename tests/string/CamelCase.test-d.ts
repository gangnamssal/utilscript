import { Equal, Expect } from '../../src/commonness';
import { CamelCase } from '../../src/string';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
  Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
  Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
  Expect<Equal<CamelCase<'foo_bar__'>, 'fooBar__'>>,
  Expect<Equal<CamelCase<'foo_bar_$'>, 'fooBar_$'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,

  // 엣지 케이스
  Expect<Equal<CamelCase<'_'>, '_'>>,
  Expect<Equal<CamelCase<'__'>, '__'>>,
  Expect<Equal<CamelCase<'_foo'>, 'Foo'>>,
  Expect<Equal<CamelCase<'_foo_bar'>, 'FooBar'>>,
  Expect<Equal<CamelCase<'123_foo'>, '123Foo'>>,
  Expect<Equal<CamelCase<'foo_123'>, 'foo_123'>>,
  Expect<Equal<CamelCase<'foo_123_bar'>, 'foo_123Bar'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo--bar'>, 'foo-Bar'>>,
  Expect<Equal<CamelCase<'foo-_bar'>, 'foo-Bar'>>,
  Expect<Equal<CamelCase<'foo_-bar'>, 'foo_Bar'>>,
  Expect<Equal<CamelCase<'$_foo'>, '$Foo'>>,
  Expect<Equal<CamelCase<'foo_$_bar'>, 'foo_$Bar'>>,
];

// 성능 테스트 케이스
type LongString = 'a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z';

type PerformanceTests = [
  // 중간 길이 문자열 테스트
  Expect<Equal<CamelCase<LongString>, 'aBCDEFGHIJKLMNOPQRSTUVWXYZ'>>,
];
