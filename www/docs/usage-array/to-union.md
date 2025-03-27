---
sidebar_position: 23
---

# ToUnion

`ToUnion`은 튜플을 유니온 타입으로 변환하는 TypeScript 유틸리티 타입입니다. 이 타입은 튜플의 모든 요소를 유니온 타입으로 결합합니다.

:::tip
튜플의 모든 요소를 유니온 타입으로 결합하여 타입 검사나 조건부 타입에서 활용하고 싶을 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.ToUnion<[123, '456', true]>; //  123 | '456' | true

type T2 = A.ToUnion<[123]>; // 123
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = [123, '456', true];
type T = A.ToUnion<typeof arr>; // string | number | boolean
```

## 지원 버전

`ToUnion` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
