---
sidebar_position: 9
---

# Entries

`Entries`는 객체의 키와 값을 배열로 반환하는 TypeScript 유틸리티 타입입니다. 이 타입은 객체의 각 속성을 `[키, 값]` 형태의 튜플 유니온 타입으로 변환합니다.

:::tip
이 유틸리티 타입은 객체의 구조를 배열 형태로 다루고 싶을 때 유용하며, JavaScript의 `Object.entries()` 메서드와 유사한 타입 수준의 기능을 제공합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type T = O.Entries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null]
```

## 지원 버전

`Entries` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::note
**0.0.13 버전**부터 엣지케이스에 대한 로직이 개선되어 더 정확한 타입 추론 결과를 제공합니다.
:::
