---
sidebar_position: 19
---

# StartsWith

`StartsWith`는 문자열이 특정 부분 문자열로 시작하는지 확인하는 TypeScript 유틸리티 타입입니다.

:::tip
문자열이 특정 접두사(prefix)로 시작하는지 확인할 때 유용합니다. 결과는 `true` 또는 `false`의 불리언 타입으로 반환됩니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.StartsWith<'abc', 'ac'>; // false

type T2 = S.StartsWith<'abc', 'ab'>; // true

type T3 = S.StartsWith<'abc', 'abcd'>; // false
```
