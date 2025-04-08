---
sidebar_position: 1
---

# Append

`Append`는 함수에 인자를 추가하는 TypeScript 유틸리티 타입입니다. 기존 함수 타입에 새로운 인자를 추가할 수 있으며, 단일 타입 또는 배열 형태의 타입을 추가할 수 있습니다.

:::tip
이 유틸리티 타입은 기존 함수의 시그니처를 변경하지 않고 새로운 매개변수를 추가하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { F } from 'utilscript';

type T = F.Append<(a: number, b: string) => number, boolean>;
// (a: number, b: string, x: boolean) => number

type T2 = F.Append<() => void, [undefined, boolean]>;
// (x: undefined, y: boolean) => void

type T3 = F.Append<() => string, [undefined, boolean, null, number, string]>;
// (x: undefined, y: boolean, z: null, a: number, b: string) => string
```

## 지원 버전

`Append` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::note
**0.0.13 버전**부터는 never와 any 타입에 대한 처리가 개선되었습니다. 이를 통해 더 안정적이고 정확한 결과를 제공합니다.
:::
