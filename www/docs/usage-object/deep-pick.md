---
sidebar_position: 6
---

# DeepPick

`DeepPick`은 문자열 경로를 사용하여 객체에서 특정 값을 선택하는 TypeScript 유틸리티 타입입니다. 이 타입은 중첩된 객체 구조에서도 경로를 통해 원하는 속성을 선택할 수 있습니다.

:::tip
이 유틸리티 타입은 복잡한 객체에서 특정 경로의 속성만 선택하여 새로운 타입을 생성하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O, C } from 'utilscript';

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type T = O.DeepPick<Obj, 'a'>; // { a: number }

type T2 = O.DeepPick<Obj, 'a' | 'obj.e'>; // { a: number } & { obj: { e: string } }

type T3 = O.DeepPick<Obj, 'a' | ''>; // { a: number } & unknown
```

## 지원 버전

`DeepPick` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.9+ | ✅        |
