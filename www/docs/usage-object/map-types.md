---
sidebar_position: 13
---

# MapTypes

`MapTypes`는 객체의 속성 타입을 다른 타입으로 변환하는 TypeScript 유틸리티 타입입니다. 이 타입은 객체의 특정 타입을 다른 타입으로 매핑할 수 있게 해줍니다.

:::tip
이 유틸리티 타입은 객체의 구조는 유지하면서 특정 타입의 속성만 다른 타입으로 변환하고 싶을 때 유용합니다.
:::

:::info
매핑 규칙을 통해 원본 타입과 변환할 타입을 지정할 수 있습니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>; // { stringToNumber: number }

type T2 = O.MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>; // { name: string }
```

## 지원 버전

`MapTypes` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
