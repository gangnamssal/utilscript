---
sidebar_position: 5
---

# Tuple

`Tuple`은 읽기 전용 배열을 나타내는 타입입니다.

:::tip
요소의 타입이 동일한 읽기 전용 배열이 필요할 때 유용합니다.
:::

## 사용 예시

```ts
import { P } from 'utilscript';

type UnknownTupleType = P.Tuple;

type StringTupleType = P.Tuple<string>;

type NumberTupleType = P.Tuple<number>;
```

## 지원 버전

`Tuple` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
