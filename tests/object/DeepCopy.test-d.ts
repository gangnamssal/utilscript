import { DeepCopy } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// 기본 케이스
type Original = { a: 1; b: 2 };
type Copied = DeepCopy<Original>;

// 중첩된 객체
type NestedOriginal = { a: { b: 1; c: 2 }; d: 3 };
type NestedCopied = DeepCopy<NestedOriginal>;

// 배열
type ArrayOriginal = { a: number[]; b: string[] };
type ArrayCopied = DeepCopy<ArrayOriginal>;

// 빈 객체
type EmptyOriginal = {};
type EmptyCopied = DeepCopy<EmptyOriginal>;

// null과 undefined
type NullUndefinedOriginal = { a: null; b: undefined };
type NullUndefinedCopied = DeepCopy<NullUndefinedOriginal>;

// 함수
type FunctionOriginal = { a: () => void; b: (x: number) => string };
type FunctionCopied = DeepCopy<FunctionOriginal>;

// readonly 속성
type ReadonlyOriginal = { readonly a: number; b: string };
type ReadonlyCopied = DeepCopy<ReadonlyOriginal>;

// 선택적 속성
type OptionalOriginal = { a?: number; b: string };
type OptionalCopied = DeepCopy<OptionalOriginal>;

type cases = [
  Expect<Equal<Original, Copied>>,
  Expect<Equal<NestedOriginal, NestedCopied>>,
  Expect<Equal<ArrayOriginal, ArrayCopied>>,
  Expect<Equal<EmptyOriginal, EmptyCopied>>,
  Expect<Equal<NullUndefinedOriginal, NullUndefinedCopied>>,
  Expect<Equal<FunctionOriginal, FunctionCopied>>,
  Expect<Equal<ReadonlyOriginal, ReadonlyCopied>>,
  Expect<Equal<OptionalOriginal, OptionalCopied>>,
];
