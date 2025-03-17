---
sidebar_position: 19
---

# PartialReadonly

`PartialReadonly`는 객체 타입에서 특정 프로퍼티를 선택하여 읽기 전용(readonly)으로 만들어주는 TypeScript 유틸리티 타입입니다.

:::tip
객체의 일부 프로퍼티만 읽기 전용으로 만들고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.PartialReadonly<{ name: string; age: number }, 'name'>; // { readonly name: string; age: number }
```

## 지원 버전

`PartialReadonly` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
