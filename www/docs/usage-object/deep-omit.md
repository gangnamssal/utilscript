---
sidebar_position: 5
---

# DeepOmit

`DeepOmit`은 문자열 경로를 사용하여 객체에서 속성을 깊이 제거하는 TypeScript 유틸리티 타입입니다. 이 타입은 중첩된 객체 구조에서 특정 경로의 속성을 제거하고 나머지 구조는 유지합니다.

:::tip
이 유틸리티 타입은 복잡한 객체에서 특정 중첩 속성만 제거하고 싶을 때 유용합니다. 일반 `Omit`과 달리 점(.) 표기법을 사용하여 깊은 수준의 속성에 접근할 수 있습니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type obj = {
  person: {
    name: string;
    age: {
      value: number;
    };
  };
};

type T = O.DeepOmit<obj, 'person'>; // {}

type T2 = O.Equal<DeepOmit<obj, 'person.name'>>; // { person: { age: { value: number } } }

type T3 = O.DeepOmit<obj, 'person.nonexistent'>; // { person: { name: string; age: {} } }
```

## 지원 버전

`DeepOmit` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전    | 지원 여부 |
| ------- | --------- |
| 0.0.14+ | ✅        |
