---
sidebar_position: 11
---

# Length

`Length`는 문자열의 길이를 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 길이를 타입 레벨에서 계산할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Length<'abc'>; // 3

type T2 = S.Length<''>; // 0
```

## 지원 버전

`Length` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
