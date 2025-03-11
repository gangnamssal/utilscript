---
sidebar_position: 4
---

# DeepCopy

`DeepCopy`는 객체를 재귀적으로 복사하는 TypeScript 유틸리티 타입입니다. 이 타입은 중첩된 객체 구조를 포함한 모든 속성을 깊은 복사를 통해 새로운 객체로 생성합니다.

:::tip
이 유틸리티 타입은 원본 객체의 참조를 끊고 완전히 독립된 복사본을 만들고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O, C } from 'utilscript';

type Original = { a: 1; b: 2 };

type Copied = O.DeepCopy<Original>;

type T = C.Equal<Original, Copied>; // true
```
