import { Equal, Expect } from '../../src/commonness';
import { DeepOmit } from '../../src/object';

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

// 추가 테스트를 위한 복잡한 객체 타입
type complexObj = {
  user: {
    info: {
      name: string;
      contact: {
        email: string;
        phone: number;
      };
      address: {
        city: string;
        country: string;
      };
    };
    settings: {
      theme: string;
      notifications: boolean;
    };
  };
  posts: {
    id: number;
    title: string;
    content: string;
  }[];
};

type T = DeepOmit<obj, 'person.age.value.nonexistent'>;

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,

  // 엣지 케이스 추가
  Expect<Equal<DeepOmit<obj, ''>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age'>, { person: { name: string } }>>,
  Expect<Equal<DeepOmit<obj, 'person.nonexistent'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value.nonexistent'>, obj>>,
  Expect<
    Equal<
      DeepOmit<complexObj, 'user.info.contact'>,
      {
        user: {
          info: { name: string; address: { city: string; country: string } };
          settings: { theme: string; notifications: boolean };
        };
        posts: { id: number; title: string; content: string }[];
      }
    >
  >,
  Expect<
    Equal<
      DeepOmit<complexObj, 'user.info.contact.email'>,
      {
        user: {
          info: {
            name: string;
            contact: { phone: number };
            address: { city: string; country: string };
          };
          settings: { theme: string; notifications: boolean };
        };
        posts: { id: number; title: string; content: string }[];
      }
    >
  >,
  Expect<
    Equal<
      DeepOmit<complexObj, 'posts'>,
      {
        user: {
          info: {
            name: string;
            contact: { email: string; phone: number };
            address: { city: string; country: string };
          };
          settings: { theme: string; notifications: boolean };
        };
      }
    >
  >,

  // @ts-expect-error: 객체 타입이 아닌 경우
  DeepOmit<string, 'length'>,
  // @ts-expect-error: 객체 타입이 아닌 경우
  DeepOmit<number, 'toString'>,
  // @ts-expect-error: 두 번째 인자가 문자열이 아닌 경우
  DeepOmit<obj, 123>,
];
