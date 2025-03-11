---
sidebar_position: 19
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
