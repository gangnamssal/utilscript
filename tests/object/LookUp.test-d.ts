import { LookUp } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Foo = {
  foo: string;
  common: boolean;
};

type Bar = {
  bar: number;
  common: boolean;
};

type Other = {
  other: string;
};

// 중첩된 객체 타입 추가
interface Person {
  name: string;
  address: {
    city: string;
    country: 'Korea' | 'USA' | 'Japan';
  };
}

interface Employee {
  name: string;
  address: {
    city: string;
    country: 'UK' | 'Canada';
  };
  department: string;
}

// 유니온 타입에 null/undefined 포함
type MaybeUser = { id: number; username: string } | null | undefined;

type Animal = Cat | Dog;
type People = Person | Employee;

type cases = [
  Expect<Equal<LookUp<Animal, 'type', 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'type', 'cat'>, Cat>>,
  Expect<Equal<LookUp<Animal, 'breeds', 'Curl'>, Cat>>,
  Expect<Equal<LookUp<Animal, 'breeds', 'Boxer'>, Dog>>,
  Expect<Equal<LookUp<Foo | Bar, 'foo'>, Foo>>,
  Expect<
    Equal<
      LookUp<Foo | Bar, 'common'>,
      | {
          foo: string;
          common: boolean;
        }
      | {
          bar: number;
          common: boolean;
        }
    >
  >,
  Expect<
    Equal<
      LookUp<Foo | Bar | Other, 'common'>,
      | {
          foo: string;
          common: boolean;
        }
      | {
          bar: number;
          common: boolean;
        }
    >
  >,
  // 중첩된 객체 속성에 대한 테스트
  Expect<Equal<LookUp<People, 'department'>, Employee>>,
  // 중첩된 객체의 속성 값에 대한 테스트
  Expect<
    Equal<
      LookUp<People, 'address'>['address']['country'],
      'Korea' | 'USA' | 'Japan' | 'UK' | 'Canada'
    >
  >,
  // 특정 중첩 속성 값으로 필터링
  Expect<
    Equal<LookUp<People, 'address', { city: string; country: 'Korea' | 'USA' | 'Japan' }>, Person>
  >,
  // 빈 유니온 타입에 대한 테스트
  Expect<Equal<LookUp<never, 'key'>, never>>,
  // 존재하지 않는 키에 대한 테스트
  Expect<Equal<LookUp<Animal, 'nonexistent'>, never>>,
  // null/undefined가 포함된 유니온 타입 테스트
  Expect<Equal<LookUp<MaybeUser, 'id'>, { id: number; username: string }>>,
  // 기본값 T가 never인 경우 (키만으로 필터링)
  Expect<Equal<LookUp<Animal | { size: 'large' }, 'size'>, { size: 'large' }>>,

  // 엣지 케이스
  Expect<Equal<LookUp<{}, 'key'>, never>>,
  Expect<Equal<LookUp<{ a: null }, 'a'>, { a: null }>>,
  Expect<Equal<LookUp<{ a: undefined }, 'a'>, { a: undefined }>>,
  Expect<Equal<LookUp<{ '': string }, ''>, { '': string }>>,
  Expect<Equal<LookUp<{ [key: string]: number }, 'anyKey'>, { [key: string]: number }>>,
  Expect<Equal<LookUp<{ a: 1 } | { a: 2 }, 'a', 1>, { a: 1 }>>,
  Expect<Equal<LookUp<{ a: 1 } | { a: 2 }, 'a', 3>, never>>,
  Expect<Equal<LookUp<{ a: { b: 1 } } | { a: { b: 2 } }, 'a', { b: 1 }>, { a: { b: 1 } }>>,
  Expect<Equal<LookUp<{ a: any }, 'a'>, { a: any }>>,
  Expect<Equal<LookUp<{ a: unknown }, 'a'>, { a: unknown }>>,
];
