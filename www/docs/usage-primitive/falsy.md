---
sidebar_position: 4
---

# Falsy

`Falsy`는 JavaScript에서 거짓으로 평가되는 모든 값들의 유니온 타입입니다.

:::tip
조건문에서 거짓으로 평가되는 모든 값을 포함하는 타입이 필요할 때 유용합니다.
:::

## 사용 예시

```ts
import { P } from 'utilscript';

type FalsyType = P.Falsy;
```
