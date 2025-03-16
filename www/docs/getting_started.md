---
sidebar_position: 1
---

# Getting started

먼저, **utilscript**를 로컬에 설치해야 합니다.

## Install

터미널에서 다음 명령어 중 하나를 사용하여 설치하세요.

### With npm

```bash
npm install utilscript --save-dev
```

### With yarn

```bash
yarn add utilscript --save-dev
```

### With pnpm

```bash
pnpm add utilscript -D
```

### With bun

```bash
bun install utilscript -dev
```

이제 설치가 완료되었습니다. 다음 단계로 넘어가서 utilscript를 사용해 보세요. 아래에서 기본적인 사용법을 확인할 수 있습니다.

## Basic Usage

`utilscript`는 다음과 같은 모듈로 구성되어 있습니다:

```ts
import { A, C, F, O, P, S, U } from 'utilscript';
```

- `A`: 배열(Array, Tuple) 관련 유틸리티 타입
- `C`: 공통(Commonness) 유틸리티 타입 (조건부 타입, 타입 검사 등)
- `F`: 함수(Function) 관련 유틸리티 타입
- `O`: 객체(Object) 관련 유틸리티 타입
- `P`: 기본 타입(Primitive) 관련 유틸리티 타입
- `S`: 문자열(String) 관련 유틸리티 타입
- `U`: 유니온(Union) 관련 유틸리티 타입

각 모듈은 특정 타입 카테고리에 대한 유틸리티 함수를 제공합니다.
