---
sidebar_position: 1
---

# Alike

`Alike`는 두 객체가 동일한 타입인지 확인하는 TypeScript 유틸리티 타입입니다. 이 타입은 두 객체의 구조적 타입이 동일한지 확인하며, `깊은 복사(DeepCopy)`를 통해 정확한 비교를 수행합니다.

:::tip
이 유틸리티 타입은 두 객체의 타입 구조가 정확히 일치하는지 확인하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type T = O.Alike<{ a: 1 }, { a: 1 }>; // true

type T2 = O.Alike<{ a: 1 }, { a: 2 }>; // false
```

## 지원 버전

`Alike` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
