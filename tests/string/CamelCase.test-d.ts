import { Equal, Expect } from '../../src/commonness';
import { CamelCase } from '../../src/string';

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
