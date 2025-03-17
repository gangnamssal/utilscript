---
sidebar_position: 18
---

# PickByOptional

`PickByOptional`은 객체 타입에서 선택적(optional) 프로퍼티만 선택하는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 선택적(optional)으로 정의된 프로퍼티만 추출하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.PickByOptional<{ foo: number; bar?: string }>; // { bar?: string }

type T2 = O.PickByOptional<{ foo: undefined; bar?: undefined }>; // { bar?: undefined }
```

## 지원 버전

`PickByOptional` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
