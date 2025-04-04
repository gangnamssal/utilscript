---
sidebar_position: 17
---

# OmitByType

`OmitByType`은 객체 타입 T에서 타입이 U인 프로퍼티를 제외한 새로운 타입을 생성하는 TypeScript 유틸리티 타입입니다. 이 타입은 특정 타입의 프로퍼티만 선택적으로 제외하고 싶을 때 유용합니다.

:::tip
객체에서 특정 타입(예: boolean, string 등)을 가진 프로퍼티들만 제외하고 싶을 때 유용합니다.
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

type T = O.OmitByType<Model, boolean>; // { name: string; count: number }

type T2 = O.OmitByType<Model, string>; // { count: number; isReadonly: boolean; isEnable: boolean }
```

## 지원 버전

`OmitByType` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::info
0.0.13 버전부터 엣지케이스에 대한 로직이 개선되어 더 정확한 타입 추론 결과를 제공합니다.
:::
