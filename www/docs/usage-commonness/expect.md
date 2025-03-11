---
sidebar_position: 2
---

# Expect

`Expect`는 값이 `true`인지 확인하는 TypeScript 유틸리티 타입입니다. 확인할 값이 `true`이면 그대로 반환하고, 그렇지 않으면 타입 에러가 발생합니다.

:::tip  
이 타입은 주로 타입 테스트에서 사용되며, `Equal`과 함께 사용하여 두 타입이 동일한지 검증할 수 있습니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.Expect<Equal<true, true>>;

// @ts-expect-error: type error
type T2 = C.Expect<false>;
```
