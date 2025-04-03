import { Equal, Expect } from '../../src/commonness';
import { PartialByKeys } from '../../src/object';

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error: not working in production
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,

  // @ts-expect-error: not working in production
  Expect<Equal<PartialByKeys<{}, 'name'>, {}>>,

  // 엣지 케이스
  Expect<Equal<PartialByKeys<{ a: undefined }, 'a'>, { a?: undefined }>>,
  Expect<Equal<PartialByKeys<{ a: null }, 'a'>, { a?: null }>>,
  Expect<Equal<PartialByKeys<{ a: never }, 'a'>, { a?: never }>>,
  Expect<Equal<PartialByKeys<{ a: unknown }, 'a'>, { a?: unknown }>>,
  Expect<Equal<PartialByKeys<{ a: any }, 'a'>, { a?: any }>>,
  Expect<Equal<PartialByKeys<{ 'a-b': number }, 'a-b'>, { 'a-b'?: number }>>,
  Expect<
    Equal<PartialByKeys<{ [k: number]: string }, number>, { [k: number]: string | undefined }>
  >,
];
