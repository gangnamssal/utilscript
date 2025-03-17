---
sidebar_position: 20
---

# PickByType

`PickByType`은 객체 타입에서 특정 타입의 값을 가진 프로퍼티만 선택하는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 특정 타입(예: string, number, boolean 등)의 값을 가진 프로퍼티만 추출하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type T = O.PickByType<Model, boolean>; // { isReadonly: boolean; isEnable: boolean }

type T2 = O.PickByType<Model, string>; // { name: string }
```

## 지원 버전

`PickByType` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
