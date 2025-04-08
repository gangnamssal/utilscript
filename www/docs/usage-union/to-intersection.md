---
sidebar_position: 3
---

# ToIntersection

`ToIntersection`은 유니온 타입을 교차 타입으로 변환하는 TypeScript 유틸리티 타입입니다.

:::tip
유니온 타입을 교차 타입으로 변환할 때 유용합니다. 예를 들어, `'a' | 'b'`를 `'a' & 'b'`로 변환할 수 있습니다.
:::

## 사용 예시

```ts
import { U } from 'utilscript';

type T = U.ToIntersection<'a' | 'b'>; // 'a' & 'b'
```

## 지원 버전

`ToIntersection` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.13+ | ✅        |
| 0.0.8+  | ✅        |

## 업데이트 내역

:::note
**0.0.13 버전**부터는 다양한 엣지케이스에 대한 예외처리가 추가되었습니다. 특히 never 타입에 대한 처리가 개선되었습니다.
:::
