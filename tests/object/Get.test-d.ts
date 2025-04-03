import { Equal, Expect } from '../../src/commonness';
import { Get } from '../../src/object';

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
  Expect<Equal<Get<Data, 'foo.baz'>, false>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,

  // 엣지 케이스
  Expect<Equal<Get<{}, 'key'>, never>>,
  Expect<Equal<Get<{ a: null }, 'a'>, null>>,
  Expect<Equal<Get<{ a: undefined }, 'a'>, undefined>>,
  Expect<Equal<Get<{ a: { b: { c: string } } }, 'a.b.c'>, string>>,
  Expect<Equal<Get<{ 'a.b.c': number }, 'a.b.c'>, number>>,
  Expect<Equal<Get<{ a: { b: { c: number } } }, 'a.b'>, { c: number }>>,
  Expect<Equal<Get<{ '': { empty: boolean } }, ''>, { empty: boolean }>>,
  Expect<Equal<Get<{ '': { empty: boolean } }, '.empty'>, boolean>>,
];

type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  'foo.baz': false;
  hello: 'world';
};
