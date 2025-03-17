---
sidebar_position: 21
---

# ToUnion

`ToUnion`은 문자열을 문자의 유니온으로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 각 문자를 유니온 타입으로 변환할 때 유용합니다. 빈 문자열의 경우 `never` 타입을 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.ToUnion<''>; // never

type T2 = S.ToUnion<'hello'>; // 'h' | 'e' | 'l' | 'l' | 'o'
```

## 지원 버전

`ToUnion` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
