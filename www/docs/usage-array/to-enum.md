---
sidebar_position: 20
---

# ToEnum

`ToEnum`은 튜플을 열거형으로 변환하는 TypeScript 유틸리티 타입입니다. 튜플의 각 요소는 대문자로 시작하는 키로 변환되며, 값은 원래 요소 또는 인덱스가 됩니다.

:::tip
튜플을 열거형(Enum)으로 변환하여 값에 의미 있는 이름을 부여하고 타입 안전성을 높이고 싶을 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const;

type T = A.ToEnum<typeof OperatingSystem>;
// { readonly MacOS: 'macOS'; readonly Windows: 'Windows'; readonly Linux: 'Linux'; }

type T2 = A.ToEnum<typeof OperatingSystem, true>;
// { readonly MacOS: 0; readonly Windows: 1; readonly Linux: 2; }
```

:::info
두 번째 인자로 `true`를 전달하면 값 대신 인덱스를 반환하는 열거형이 생성됩니다. 이는 숫자 기반 열거형이 필요한 경우 유용합니다.
:::

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = ['a', 'b', 'c'];
type T = A.ToEnum<typeof arr>; // {}
```

## 지원 버전

`ToEnum` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
