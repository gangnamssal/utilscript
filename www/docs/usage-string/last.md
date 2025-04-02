---
sidebar_position: 9
---

# Last

`Last`는 문자열의 마지막 문자를 가져오는 TypeScript 유틸리티 타입입니다.

:::tip
문자열에서 마지막 글자를 추출할 때 유용합니다.
:::

## 사용 예시

```ts
import { S } from 'utilscript';

type T = S.Last<'hello'>; // 'o'

type T2 = S.Last<'world'>; // 'd'

type T3 = S.Last<'typescript'>; // 't'
```

## 지원 버전

`Last` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::info
0.0.13 버전부터 타입 추론 로직이 개선되어 더 정확한 결과를 제공합니다.
:::
