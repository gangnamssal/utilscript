---
sidebar_position: 2
---

# Append

`Append`는 객체에 새로운 프로퍼티를 추가하는 TypeScript 유틸리티 타입입니다. 이 타입은 기존 객체 타입에 새로운 키와 값을 추가하여 확장된 객체 타입을 생성합니다.

:::tip
이 유틸리티 타입은 기존 객체 타입을 변경하지 않고 새로운 프로퍼티를 추가하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

type User = {
  name: string;
  age: number;
};

type T = O.Append<User, 'email', string>;
// { name: string; age: number; email: string; }
```
