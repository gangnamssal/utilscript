---
sidebar_position: 16
---

# UnBox

`UnBox`는 배열, 함수, Promise 등과 같은 래핑된 타입에서 내부 타입을 추출하는 TypeScript 유틸리티 타입입니다.

:::tip  
중첩된 래핑 타입에서도 재귀적으로 내부 타입을 추출할 수 있으며, 기본적으로 최대 10단계까지 재귀 추출을 지원합니다.
:::

:::tip 재귀 깊이 제어
`UnBox<T, N>`에서 `N` 값을 조정하여 원하는 깊이까지만 타입을 추출할 수 있습니다. 이는 복잡한 중첩 타입 구조에서 특정 레벨의 타입만 필요할 때 유용합니다.
:::

## 사용 예시

```ts
import { C } from 'utilscript';

type T = C.UnBox<() => number>; // number

type T2 = C.UnBox<number[]>; // number

type T3 = C.UnBox<number[][][][], 1>; // number[][][]

type T4 = C.UnBox<[[[[number]]]], 2>; // [[number]]

type T5 = C.UnBox<() => Promise<() => Array<Promise<boolean>>>>; // boolean
```

## 지원 버전

`UnBox` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.12+ | ✅        |
