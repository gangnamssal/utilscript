---
sidebar_position: 13
---

# IsTuple

`IsTuple`은 타입이 튜플인지 확인하는 TypeScript 유틸리티 타입입니다. 타입이 튜플이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.

:::tip  
일반 배열과 달리 튜플은 고정된 길이를 가지며, 각 위치에 특정 타입을 지정할 수 있습니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.IsTuple<[]>; // true

type T2 = C.IsTuple<[number]>; // true

type T3 = C.IsTuple<readonly [1]>; // true

type T4 = C.IsTuple<number[]>; // false

type T5 = C.IsTuple<never>; // false
```

## 지원 버전

`IsTuple` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
