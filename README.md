## utilscript

한국어 | [English](./README-en_us.md)

`utilscript`는 TypeScript 유틸 타입 모음으로, 복잡한 타입 조작을 간소화합니다. 타입 변환, 조건부 타입, 배열/객체 조작 등을 지원하며, 타입 안전성과 생산성을 높입니다.

## 시도하기

[TypeScript Playground](https://www.typescriptlang.org/play/?#code/PQKhCgAIUweDcSP3IHUCmAbAxgewLYsgC5aQCuBAlmgM4YBO5ADgZAApoCGAngOa1YkA7ACYBCSIF4NwAF7UGDMgAVABbkqkFZHaQqDdhnxFIKAB4MU9PAOYB3cgUWQABmUo16TBwBpIczQyxWzADMSNFIKNFtOSAiAI1p2WijArFoFTlMAZTpGAjFxQHJdwApyOTkAMRR0SEDaCsJiYwY0FPx2YUIUKmYANwTyflVnCIIo4dMqADo5AAl2BgYo7CFyAW48wGA9mWBwcHIcP1pmAG9IAEEvAGEvUq8AeS8WLwyvAFVIAF8qvhxIAHJB1xyPwA3NtsAJOhpaKkALyQADaAEYvAAmLwAZi8ABYvABWAC6GlUYM6IPAo3wpUoBDMQhOUMgsJO40paGptAAPOSsIFIbQUQA+IFAA)

## 설치하기

명령줄에서 다음 명령어 중 하나를 사용하여 설치하세요.

### With npm

```script
npm install utilscript --save-dev
```

### With yarn

```script
yarn add utilscript --save-dev
```

### With pnpm

```script
pnpm add utilscript -D
```

### With bun

```script
bun install utilscript -dev
```

## 시작하기

`utilscript`는 다음과 같은 모듈로 구성되어 있습니다:

- `A`: 배열(Array) 관련 유틸리티 타입
- `C`: 공통(Commonness) 유틸리티 타입 (조건부 타입, 타입 검사 등)
- `F`: 함수(Function) 관련 유틸리티 타입
- `O`: 객체(Object) 관련 유틸리티 타입
- `P`: 기본 타입(Primitive) 관련 유틸리티 타입
- `S`: 문자열(String) 관련 유틸리티 타입
- `U`: 유니온(Union) 관련 유틸리티 타입

각 모듈은 특정 타입 카테고리에 대한 유틸리티 함수를 제공합니다. 아래 예제를 통해 사용법을 확인하세요:

```ts
import { A, C } from 'utilscript';

type IndexType = A.ToIndex<['a', 'b', 'c']>;
// [0, 1, 2]

type IsTupleType = C.IsTuple<IndexType>;
// true
```

```ts
import { O } from 'utilscript';

type PickByRequiredType = O.PickByRequired<{ a: number; b?: string; c: boolean }>;
// { a: number; c: boolean; }
```

```ts
import { S, U } from 'utilscript';

type UrlParamsType = S.ParseUrlParams<'posts/:id/:user'>;
// "id" | "user"

type ToTupleType = U.ToTuple<IsStringType>;
// ["id", "user"]
```

## 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.
