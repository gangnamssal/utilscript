---
sidebar_position: 23
---

# ToObject

`ToObject`는 튜플을 객체로 변환하는 TypeScript 유틸리티 타입입니다. 이 타입은 튜플의 각 요소를 키로 사용하여 객체를 생성합니다.

:::tip
튜플의 요소들을 키와 값이 동일한 객체로 변환하여 객체 형태로 데이터를 다루고 싶을 때 유용합니다.
:::

## 사용법

```ts
import { A } from 'utilscript';

type T = A.ToObject<['a', 'b', 'c']>; // { a: 'a', b: 'b', c: 'c' }
```

## 주의 사항

:::caution
튜플이 아닌 일반 Array 타입이 입력으로 주어질 경우 예상과 다른 결과가 나올 수 있습니다.
:::

```ts
import { A } from 'utilscript';

const arr = ['a', 'b', 'c'];
type T = A.ToObject<typeof arr>; // { [x: string]: string; }
```

## 지원 버전

`ToObject` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
