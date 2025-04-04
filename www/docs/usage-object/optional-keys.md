---
sidebar_position: 18
---

# OptionalKeys

`OptionalKeys`는 객체 타입에서 선택적(optional) 프로퍼티의 키만 추출하는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 `?` 표시가 있는 선택적 프로퍼티의 키만 추출하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.OptionalKeys<{ a: number; b?: string }>; // 'b'

type T2 = O.OptionalKeys<{ a: undefined; b?: undefined }>; // 'b'

type T3 = O.OptionalKeys<{}>; // never
```

## 지원 버전

`OptionalKeys` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
