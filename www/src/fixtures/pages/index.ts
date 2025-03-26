import type { ActiveTextMap, PositionMap } from '../../types';

/**
 *
 * utilscript Array(Tuple) 관련 position 맵
 *
 * 0 ~ 33 까지 순서대로 작성
 *
 */
const positionAMap = {
  0: {
    code: `import { A } from 'utilscript';
    
type ResultA = { type: string; };
type SuccessA = { status: 200, result: ResultA };
    
type ResultB = { value: number; };
type SuccessB = { status: 200, result: ResultB };`,
  },

  8: {
    code: `import { A } from 'utilscript';
    
type ResultA = { type: string; };
type SuccessA = { status: 200, result: ResultA };
    
type ResultB = { value: number; };
type SuccessB = { status: 200, result: ResultB };
    
type PromiseAllResponse = [SuccessA, SuccessB];
    
type GetResponse<T extends ResultA | ResultB> = A.Filter<PromiseAllResponse, { result: T }>;`,
  },

  16: {
    code: `import { A } from 'utilscript';
    
type ResultA = { type: string; };
type SuccessA = { status: 200, result: ResultA };
    
type ResultB = { value: number; };
type SuccessB = { status: 200, result: ResultB };
    
type PromiseAllResponse = [SuccessA, SuccessB];
    
type GetResponse<T extends ResultA | ResultB> = A.Filter<PromiseAllResponse, { result: T }>;
    
type ResponseA = A.First<GetResponse<ResultA>>;`,
  },

  24: {
    code: `import { A } from 'utilscript';
    
type ResultA = { type: string; };
type SuccessA = { status: 200, result: ResultA };
    
type ResultB = { value: number; };
type SuccessB = { status: 200, result: ResultB };
    
type PromiseAllResponse = [SuccessA, SuccessB];
    
type PromiseAllResponseUnion = A.Union<PromiseAllResponse>;`,
  },
} as PositionMap<'0' | '8' | '16' | '24'>;

/**
 *
 * utilscript Object 관련 position 맵
 *
 * 34 ~ 66 까지 순서대로 작성
 *
 */
const positionOMap = {
  34: {
    code: `import { O } from 'utilscript';
        
interface User {
  name: string;
  age: number;
}
    
type UserWithEmail = O.Append<User, 'email', string>;`,
  },
  42: {
    code: `import { O } from 'utilscript';
    
interface User {
  name: string;
  age: number;
}
  
type UserWithEmail = O.Append<User, 'email', string>;
type GetUserName = O.Get<User, 'name'>;`,
  },

  50: {
    code: `import { O } from 'utilscript';
    
interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type Animal = Cat | Dog;

type CatType = O.LookUp<Animal, 'type', 'cat'>;
type DogBreeds = O.LookUp<Animal, 'breeds', 'Hound'>;`,
  },

  58: {
    code: `import { O, P } from 'utilscript';
    
type BrandedUserId = P.Branded<number, 'id'>;
type BrandedUserName = P.Branded<string, 'userName'>;
type BrandedProfileTitle = P.Branded<string, 'profileTitle'>;
type BrandedProfileImageUrl = P.Branded<string, 'profileImageUrl'>;

interface User {
  id: BrandedUserId;
  name: BrandedUserName;
  profile: {
    title: BrandedProfileTitle;
    imageUrl: BrandedProfileImageUrl;
  };
}

type GetUserProfileImageUrl =  O.Get<User, 'profile.imageUrl'>`,
  },
} as PositionMap<'34' | '42' | '50' | '58'>;

/**
 *
 * utilscript String 관련 position 맵
 *
 * 67 ~ 99 까지 순서대로 작성
 *
 */
const positionSMap = {
  67: {
    code: `import { S } from 'utilscript';
            
type UserName = 'john cena';
    
type CapitalizedUserName = S.Capitalize<UserName>;`,
  },

  75: {
    code: `import { S } from 'utilscript';
        
const userName = 'john cena';

type CapitalizedUserName<S extends string> = S.Capitalize<S>;
type HasJohnInUserName = S.Includes<CapitalizedUserName<typeof userName>, 'John'>;`,
  },

  83: {
    code: `import { S } from 'utilscript';
        
const userName = 'john cena';

type CapitalizedUserName<S extends string> = S.Capitalize<S>;
type SplitUserName = S.Split<CapitalizedUserName<typeof userName>, ' '>;`,
  },

  91: {
    code: `import { S } from 'utilscript';
        
const userName = 'john cena';

type CapitalizedUserName<S extends string> = S.Capitalize<S>;
type SplitUserName = S.Split<CapitalizedUserName<typeof userName>, ' '>;

type FirstUserName = A.First<SplitUserName>;
type LastUserName = A.Last<SplitUserName>;`,
  },
} as PositionMap<'67' | '75' | '83' | '91'>;

export const positionMap = {
  ...positionAMap,
  ...positionOMap,
  ...positionSMap,
};

/**
 *
 * 탭 활성화 상태 맵
 *
 */
export const activeTextMap = {
  67: 'String',
  37: 'Object',
  1: 'Array',
} as ActiveTextMap<'67' | '37' | '1'>;
