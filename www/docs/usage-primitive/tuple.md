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
