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

// 성능 테스트를 위한 복잡한 중첩 타입
type NestedLevel1 = { a: string };
type NestedLevel2 = { b: NestedLevel1 };
type NestedLevel3 = { c: NestedLevel2 };
type NestedLevel4 = { d: NestedLevel3 };
type NestedLevel5 = { e: NestedLevel4 };
type NestedLevel6 = { f: NestedLevel5 };
type NestedLevel7 = { g: NestedLevel6 };
type NestedLevel8 = { h: NestedLevel7 };
type NestedLevel9 = { i: NestedLevel8 };
type NestedLevel10 = { j: NestedLevel9 };

// 대규모 유니온 타입
type LargeUnion =
  | { type: 'type1'; value: string }
  | { type: 'type2'; value: number }
  | { type: 'type3'; value: boolean }
  | { type: 'type4'; value: string[] }
  | { type: 'type5'; value: Record<string, any> }
  | { type: 'type6'; value: Map<string, any> }
  | { type: 'type7'; value: Set<any> }
  | { type: 'type8'; value: Promise<any> }
  | { type: 'type9'; value: () => void }
  | { type: 'type10'; value: Date }
  | { type: 'type11'; value: RegExp }
  | { type: 'type12'; value: Error }
  | { type: 'type13'; value: ArrayBuffer }
  | { type: 'type14'; value: SharedArrayBuffer }
  | { type: 'type15'; value: Uint8Array }
  | { type: 'type16'; value: Int8Array }
  | { type: 'type17'; value: Uint16Array }
  | { type: 'type18'; value: Int16Array }
  | { type: 'type19'; value: Uint32Array }
  | { type: 'type20'; value: Int32Array };

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

  // 성능 테스트 케이스
  // 깊게 중첩된 객체 테스트
  Expect<Equal<LookUp<NestedLevel10, 'j'>, NestedLevel10>>,

  // 대규모 유니온 타입 테스트
  Expect<Equal<LookUp<LargeUnion, 'type', 'type10'>, { type: 'type10'; value: Date }>>,

  // 복잡한 조건부 타입 체인 테스트
  Expect<Equal<LookUp<LargeUnion, 'value', string>, { type: 'type1'; value: string }>>,

  // 대량의 유니온 타입 처리 테스트
  Expect<Equal<LookUp<LargeUnion, 'type'>, LargeUnion>>,

  // 재귀적 타입 처리 테스트
  Expect<
    Equal<
      LookUp<NestedLevel10 | { recursive: NestedLevel10 }, 'recursive'>,
      { recursive: NestedLevel10 }
    >
  >,
];
