import type { ActiveTextMap, AnimatedCodeDescriptionType, PositionMap } from '../../types';
import { FeatureIcons } from '../../Icons';

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

/**
 *
 * 라이브러리 설명 카드 정보
 *
 */
export const descriptionList = [
  {
    icon: <FeatureIcons id='Bundle' />,
    title: 'Bundle',
    description: '외부 의존성 없이 바로 사용할 수 있는 독립형 라이브러리예요.',
  },
  {
    icon: <FeatureIcons id='Utility' />,
    title: 'Utility',
    description: '다양한 유틸리티 타입을 한곳에서 제공해 개발을 더 편리하게 도와줘요.',
  },
  {
    icon: <FeatureIcons id='Intuitive' />,
    title: 'Intuitive',
    description: '직관적인 API 덕분에 쉽게 이해하고 빠르게 적용할 수 있어요.',
  },
  {
    icon: <FeatureIcons id='Size' />,
    title: 'Size',
    description: '작은 용량으로 프로젝트에 부담 없이 추가할 수 있어요.',
  },
] as const;

/**
 *
 * AnimatedCodeDescription List
 *
 */
export const animatedCodeDescriptionList = [
  {
    title: 'Array',
    description: '🚀 배열 타입을 쉽게 조작할 수 있어요. 복잡한 작업도 한 줄로 해결해요.',
  },
  {
    title: 'Object',
    description:
      '🔍 유용한 객체 타입 유틸리티 함수들을 제공해요. 복잡한 객체도 간결하게 다룰 수 있어요.',
  },
  {
    title: 'String',
    description:
      '💬 문자열 타입에 유용한 유틸리티 함수들을 제공해용. 문자열 작업을 간결하게 처리해 보세요.',
  },
] as Array<AnimatedCodeDescriptionType>;
