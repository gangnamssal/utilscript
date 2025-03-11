---
sidebar_position: 5
---

# First

`First`는 문자열의 첫 번째 문자를 반환하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열에서 첫 번째 문자를 추출할 때 유용합니다. 문자열이 비어있지 않으면 첫 번째 문자를 반환하고, 비어있으면 `never`를 반환합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.First<'abc'>; // 'a'

type T2 = S.First<'123'>; // '1'

type T3 = S.First<''>; // never
```
