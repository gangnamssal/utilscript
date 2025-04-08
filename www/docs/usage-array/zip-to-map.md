---
sidebar_position: 33
---

# ZipToMap

`ZipToMap`은 튜플의 튜플을 맵(객체)으로 변환하는 TypeScript 유틸리티 타입입니다. 이 타입은 키-값 쌍으로 구성된 튜플들을 받아 해당 키-값 쌍을 속성으로 가진 객체 타입을 생성합니다.

:::tip
키-값 쌍으로 구성된 튜플 배열을 객체로 변환할 때 유용합니다.
:::

:::tip
데이터를 맵 형태로 구조화하여 접근성을 높일 수 있습니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.ZipToMap<[[1, 2], [3, 4], [5, 6]]>; // { 1: 2; 3: 4; 5: 6 }
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
type T = A.ZipToMap<typeof a>; // unknown
```

## 지원 버전

`ZipToMap` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
