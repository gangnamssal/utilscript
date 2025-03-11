---
sidebar_position: 10
---

# LastIndexOf

`LastIndexOf`는 문자열에서 특정 부분 문자열의 마지막 인덱스를 찾는 TypeScript 유틸리티 타입입니다.

:::tip
문자열 내에서 특정 부분 문자열이 마지막으로 등장하는 위치를 찾을 때 유용합니다.
:::

:::info
찾지 못한 경우 -1을 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.LastIndexOf<'abc', 'a'>; // 0

type T2 = S.LastIndexOf<'abcabc', 'abc'>; // 3

type T3 = S.LastIndexOf<'abcabc', 'd'>; // -1
```
