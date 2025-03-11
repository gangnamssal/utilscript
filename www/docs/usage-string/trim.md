---
sidebar_position: 22
---

# Trim

`Trim`은 문자열의 양쪽 공백을 제거하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열의 시작과 끝에 있는 공백을 제거할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Trim<'  Hello World  '>; // 'Hello World'
```
