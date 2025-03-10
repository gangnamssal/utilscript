---
sidebar_position: 3
---

# If

`If`는 조건에 따라 값을 반환하는 TypeScript 유틸리티 타입입니다. 첫 번째 매개변수가 `true`이면 두 번째 매개변수를 반환하고, `false`이면 세 번째 매개변수를 반환합니다. 첫 번째 매개변수가 `boolean` 타입이면 두 번째와 세 번째 매개변수의 유니온 타입을 반환합니다.

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.If<true, 'a', 'b'>; // 'a'

type T2 = C.If<false, 'a', 2>; // 2

type T3 = C.If<boolean, 'a', 2>; // 'a' | 2
```
