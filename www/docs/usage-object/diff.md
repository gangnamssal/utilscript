---
sidebar_position: 7
---

# Diff

`Diff`는 두 객체 타입 간의 차이점을 추출하는 TypeScript 유틸리티 타입입니다. 이 타입은 두 객체 타입에서 서로 다른 속성들만 포함하는 새로운 타입을 생성합니다.

:::tip
이 유틸리티 타입은 두 객체 타입 간의 차이점을 명확하게 파악하고, 타입 시스템에서 이러한 차이점을 활용하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type Foo = { name: string; age: string };

type Bar = { name: string; age: string; gender: number };

type T = O.Diff<Foo, Bar>; // { gender: number }
```

## 지원 버전

`Diff` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::info
0.0.13 버전부터 엣지케이스에 대한 로직이 개선되어 더 정확한 타입 추론 결과를 제공합니다.
:::
