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

## 지원 버전

`Falsy` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
