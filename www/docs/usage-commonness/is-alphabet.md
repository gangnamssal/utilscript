---
sidebar_position: 4
---

# IsAlphabet

`IsAlphabet`은 문자열이 알파벳인지 확인하는 TypeScript 유틸리티 타입입니다. 문자열이 알파벳이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsAlphabet<'a'>; // true

type T2 = C.IsAlphabet<'1'>; // false
```
