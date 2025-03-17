---
sidebar_position: 25
---

# RequiredKeys

`RequiredKeys`는 객체 타입에서 필수(required) 프로퍼티의 키만 추출하는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 선택적(optional)이 아닌 필수(required) 프로퍼티의 키만 가져오고 싶을 때 유용합니다.
:::

:::info
결과는 유니온 타입으로 반환되며, 필수 프로퍼티가 없는 경우 `never`를 반환합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.RequiredKeys<{ a: number; b?: string }>; // 'a'

type T2 = O.RequiredKeys<{ a: undefined; b?: undefined }>; // 'a'

type T3 = O.RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>; // 'a' | 'c' | 'd'
```

## 지원 버전

`RequiredKeys` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
