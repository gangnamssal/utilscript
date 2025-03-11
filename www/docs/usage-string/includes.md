---
sidebar_position: 6
---

# Includes

`Includes`는 문자열에 부분 문자열이 포함되어 있는지 확인하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열 내에 특정 부분 문자열이 존재하는지 확인할 때 유용합니다. 부분 문자열이 포함되어 있으면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Includes<'hello', 'e'>; // true

type T2 = S.Includes<'hello', 'a'>; // false
```
