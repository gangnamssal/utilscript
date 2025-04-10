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

  // 성능 테스트 케이스
  Expect<
    Equal<
      KebabCase<'ABCDEFGHIJKLMNOPQRSTUVWXYZ'>,
      'a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z'
    >
  >,
  Expect<
    Equal<
      KebabCase<'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'>,
      'abcdefghijklmnopqrstuvwxyz-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z'
    >
  >,
];
