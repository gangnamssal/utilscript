---
sidebar_position: 15
---

# Mutable

`Mutable`은 객체의 모든 프로퍼티를 가변적으로 만들어주는 TypeScript 유틸리티 타입입니다. 이 타입은 `readonly` 속성이 적용된 객체의 모든 프로퍼티에서 `readonly` 제약을 제거합니다.

:::tip
읽기 전용으로 설정된 객체를 수정 가능한 상태로 변환하고 싶을 때 유용합니다.
:::

## 사용 예시

```ts
import { O } from 'utilscript';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type T = O.Mutable<Readonly<Todo1>>; // Equal Todo1
```

## 지원 버전

`Mutable` 유틸리티 타입은 다음 버전부터 안정적으로 사용할 수 있습니다:

| 버전   | 지원 여부 |
| ------ | --------- |
| 0.0.8+ | ✅        |
