import { Equal, Expect } from '../../src/commonness';
import { RequiredByKeys } from '../../src/object';

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

// 빈 객체 엣지 케이스
interface EmptyObject {}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error: not working in production
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  // 엣지 케이스: 빈 객체
  Expect<Equal<RequiredByKeys<EmptyObject>, EmptyObject>>,
  // 엣지 케이스: 빈 키 배열
  Expect<Equal<RequiredByKeys<User, never>, User>>,
  // 엣지 케이스: 모든 속성이 이미 필수인 경우
  Expect<Equal<RequiredByKeys<Required<User>>, Required<User>>>,
];
