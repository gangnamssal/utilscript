---
sidebar_position: 29
---

# Unique

`Unique`는 튜플에서 중복된 요소를 제거하고 유니크한 요소만 남기는 TypeScript 유틸리티 타입입니다. 이 타입은 튜플 내의 모든 중복 요소를 제거하여 고유한 값만 포함하는 새로운 튜플을 생성합니다.

:::tip
튜플에서 중복된 값을 제거하여 고유한 요소만 남기고 싶을 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Unique<[1, 1, 2, 2, 3, 3]>; // [1, 2, 3]

type T2 = A.Unique<[string, number, 1, 'a', 1, string, 2, 'a']>; // [string, number, 1, "a", 2]
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [1, 1, 2, 2, 3, 3];
type T = A.Unique<typeof arr>; // []
```

## 지원 버전

`Unique` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
