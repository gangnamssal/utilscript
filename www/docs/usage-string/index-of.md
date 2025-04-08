---
sidebar_position: 7
---

# IndexOf

`IndexOf`는 문자열에서 특정 부분 문자열의 인덱스를 찾는 TypeScript 유틸리티 타입입니다.

:::tip
문자열 내에서 특정 부분 문자열의 위치를 찾을 때 유용합니다.
:::

## 사용 예시

:::info
부분 문자열이 발견되면 해당 인덱스를 반환하고, 찾을 수 없으면 `-1`을 반환합니다.
:::

```ts
import { S } from 'utilscript';

type T = S.IndexOf<'hello', 'e'>; // 1

type T2 = S.IndexOf<'hello', 'x'>; // -1

type T3 = S.IndexOf<'hello', 'lo'>; // 2
```

## 지원 버전

`IndexOf` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
