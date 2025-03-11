---
sidebar_position: 22
---

# RequiredByKeys

`RequiredByKeys`는 객체 타입에서 지정된 키를 필수(required)로 만드는 TypeScript 유틸리티 타입입니다.

:::tip
객체에서 특정 프로퍼티만 선택적(optional)에서 필수(required)로 변경하고 싶을 때 유용합니다. 지정하지 않은 키들은 원래 상태를 유지합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type T = O.RequiredByKeys<User, 'name'>; // UserRequiredName

type T2 = O.RequiredByKeys<User, 'name' | 'age'>; // UserRequiredNameAndAge
```
