---
sidebar_position: 9
---

# Get

`Get`은 문자열 경로를 사용하여 객체에서 값을 가져오는 TypeScript 유틸리티 타입입니다. 이 타입은 중첩된 객체 구조에서도 값을 안전하게 추출할 수 있게 해줍니다.

:::tip
이 유틸리티 타입은 복잡한 객체 구조에서 특정 경로의 값에 타입 안전하게 접근할 때 유용합니다.
:::

:::info
점(`.`) 표기법을 사용하여 중첩된 객체의 속성에 접근할 수 있습니다. 예: `'a.b.c'`
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.Get<{ a: 1 }, 'a'>; // 1

type T2 = O.Get<{ a: { b: 2 } }, 'a.b'>; // 2

type T3 = O.Get<{ a: { b: 2 } }, 'a.c'>; // never
```
