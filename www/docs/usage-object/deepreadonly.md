---
sidebar_position: 6
---

# DeepReadonly

`DeepReadonly`는 객체의 모든 속성을 재귀적으로 읽기 전용으로 만드는 TypeScript 유틸리티 타입입니다. 이 타입은 중첩된 객체 구조를 포함한 모든 속성을 읽기 전용으로 변환합니다.

:::tip
이 유틸리티 타입은 객체의 불변성을 보장하고 의도치 않은 수정을 방지하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type X = { x: { y: { z: string } } };

type T = O.DeepReadonly<X>; // { readonly x: { readonly y: { readonly z: string } } }
```

## 지원 버전

`DeepReadonly` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
