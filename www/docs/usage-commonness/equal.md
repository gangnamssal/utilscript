---
sidebar_position: 1
---

# Equal

`Equal`은 두 값이 동일한지 확인하는 TypeScript 유틸리티 타입입니다. 두 값이 정확히 같은 타입인지 검사하여 결과를 `true` 또는 `false`로 반환합니다.

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.Equal<1, 1>; // true

type T2 = C.Equal<1, 2>; // false
```
