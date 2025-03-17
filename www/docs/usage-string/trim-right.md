---
sidebar_position: 24
---

# TrimRight

`TrimRight`는 문자열의 오른쪽 공백을 제거하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 오른쪽에 있는 공백 문자(스페이스, 탭, 줄바꿈 등)를 제거할 때 유용합니다. 빈 문자열의 경우 빈 문자열을 그대로 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.TrimRight<'str '>; // 'str'

type T2 = S.TrimRight<'     str     '>; // '     str'
```

## 지원 버전

`TrimRight` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
