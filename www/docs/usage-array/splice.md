---
sidebar_position: 23
---

# Splice

`Splice`는 배열에서 요소를 제거하고 선택적으로 새 요소를 추가하는 TypeScript 유틸리티 타입입니다.

:::tip
배열에서 특정 위치의 요소를 제거하거나 새로운 요소를 삽입할 때 유용합니다. JavaScript의 `Array.splice()` 메서드와 유사한 기능을 타입 레벨에서 구현합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.Splice<[1, 2, 3], 1, 1>; // [1, 3]

type T2 = A.Splice<[1, 2, 3], 0, 1, [9]>; // [9, 2, 3]

type T3 = A.Splice<[1, 2, 3], 1, 1, [9, 10]>; // [1, 9, 10, 3]
```

## 주의 사항

:::warning
0.0.16 버전에서는 음수 인덱스를 지원하지 않습니다. JavaScript의 `Array.splice()`와 달리 시작 인덱스에 음수 값을 사용할 수 없습니다.
:::

```ts
import { A } from 'utilscript';

type T = A.Splice<[1, 2, 3], -1, 1>; // [1, 2, 3]
```

## 지원 버전

`Splice` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.16+ | ✅        |
