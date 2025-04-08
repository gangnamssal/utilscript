---
sidebar_position: 22
---

# PickByRequired

`PickByRequired`는 객체 타입에서 필수(required) 프로퍼티만 선택하는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 필수(required)로 정의된 프로퍼티만 추출하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.PickByRequired<{ foo: number; bar?: string }>; // { foo: number }

type T2 = O.PickByRequired<{ foo: undefined; bar?: undefined }>; // { foo: undefined }
```

## 지원 버전

`PickByRequired` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::note
**0.0.13 버전**부터 엣지케이스에 대한 로직이 개선되어 더 정확한 타입 추론 결과를 제공합니다.
:::
