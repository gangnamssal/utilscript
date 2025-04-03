import { Equal, Expect } from '../../src/commonness';
import { KebabCase } from '../../src/string';

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
  Expect<Equal<KebabCase<'123'>, '123'>>,
  Expect<Equal<KebabCase<'F'>, 'f'>>,
  Expect<Equal<KebabCase<'FooBar123'>, 'foo-bar123'>>,
  Expect<Equal<KebabCase<'Foo Bar'>, 'foo -bar'>>,
  Expect<Equal<KebabCase<'Foo--Bar'>, 'foo---bar'>>,
  Expect<Equal<KebabCase<'__FOO_BAR__'>, '__-f-o-o_-b-a-r__'>>,
];
