---
sidebar_position: 4
---

# Extends

`Extends`는 한 타입이 다른 타입의 확장인지 확인하는 TypeScript 유틸리티 타입입니다. 타입 `T`가 타입 `U`의 확장이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
이 타입은 타입 관계를 확인하는 데 유용하며, 조건부 타입을 구현할 때 자주 사용됩니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.Extends<string, string>; // true

type T2 = C.Extends<string, number>; // false
```

## 지원 버전

`Extends` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.17+ | ✅        |
