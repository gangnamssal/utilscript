---
sidebar_position: 20
---

# ToNumber

`ToNumber`는 문자열을 숫자로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열 형태의 숫자를 실제 숫자 타입으로 변환할 때 유용합니다. 변환할 수 없는 문자열의 경우 `never` 타입을 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.ToNumber<'0'>; // 0

type T2 = S.ToNumber<'18@7_$%'>; // never
```

## 지원 버전

`ToNumber` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
