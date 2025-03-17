---
sidebar_position: 11
---

# GetToObject

`GetToObject`는 문자열 경로를 사용하여 객체에서 값을 가져오는 TypeScript 유틸리티 타입입니다. 이 타입은 중첩된 객체 구조에서 특정 경로에 있는 값을 객체 형태로 추출할 수 있게 해줍니다.

:::tip
이 유틸리티 타입은 복잡한 객체 구조에서 특정 경로의 값을 타입 안전하게 추출하고자 할 때 유용합니다. 경로가 존재하지 않는 경우 `never` 타입을 반환합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.GetToObject<{ a: 1 }, 'a'>; // { a: 1 }

type T2 = O.GetToObject<{ a: 1 }, 'b'>; // never

type T3 = O.GetToObject<{ a: { b: { c: 1 } } }, 'a.b.d'>; // { a: { b: { c: 1 } } }

type T2 = O.GetToObject<{ a: { b: { c: 1 } } }, 'a.k.d'>; // never
```

## 지원 버전

`GetToObject` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.9+ | ✅        |
