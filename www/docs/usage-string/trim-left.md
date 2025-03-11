---
sidebar_position: 23
---

# TrimLeft

`TrimLeft`는 문자열의 왼쪽 공백을 제거하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 왼쪽에 있는 공백 문자(스페이스, 탭, 줄바꿈 등)를 제거할 때 유용합니다. 빈 문자열의 경우 빈 문자열을 그대로 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.TrimLeft<'  Hello World  '>; // 'Hello World  '

type T2 = S.TrimLeft<'    \n\t foo bar '>; // 'foo bar '
```
