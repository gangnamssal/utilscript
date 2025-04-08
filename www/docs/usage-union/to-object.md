---
sidebar_position: 4
---

# ToObject

`ToObject`는 유니온 타입을 객체로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
유니온 타입을 객체로 변환할 때 유용합니다. 예를 들어, `'a' | 'b' | 'c'`를 `{ a: 'a'; b: 'b'; c: 'c' }`로 변환할 수 있습니다.
:::

## 사용 예시

```ts
import { U } from 'utilscript';

type T = U.ToObject<'a' | 'b' | 'c'>; // { a: 'a'; b: 'b'; c: 'c' }

type T2 = U.ToObject<'a'>; // { a: 'a' }

type T3 = U.ToObject<string>; // { [x: string]: string }

type T4 = U.ToObject<never>; // {}
```

## 지원 버전

`ToObject` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::note
**0.0.13 버전**부터는 다양한 엣지케이스에 대한 예외처리가 추가되었습니다. 또한 제네릭 타입이 PropertyKey로 제한되었습니다.
:::
