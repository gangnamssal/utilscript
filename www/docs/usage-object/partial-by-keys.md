---
sidebar_position: 19
---

# PartialByKeys

`PartialByKeys`는 객체 타입에서 특정 프로퍼티를 선택하여 선택적(optional)으로 만들어주는 TypeScript 유틸리티 타입입니다.

:::tip
객체의 일부 프로퍼티만 선택적으로 만들고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type T = O.PartialByKeys<User, 'name'>; // UserPartialName

type T2 = O.PartialByKeys<User, 'name' | 'age'>; // UserPartialNameAndAge
```

## 지원 버전

`PartialByKeys` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
