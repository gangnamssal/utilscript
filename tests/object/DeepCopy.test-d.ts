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

// 성능 테스트
type DeepNestedObj = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                h: {
                  i: {
                    j: number;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};
type DeepNestedCopied = DeepCopy<DeepNestedObj>;

// 많은 속성을 가진 객체
type LargeObj = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: symbol;
  prop5: null;
  prop6: undefined;
  prop7: never;
  prop8: any;
  prop9: unknown;
  prop10: string[];
  prop11: { nested: number };
  prop12: () => void;
  prop13: Map<string, number>;
  prop14: Set<number>;
  prop15: Promise<string>;
};
type LargeObjCopied = DeepCopy<LargeObj>;

type cases = [
  Expect<Equal<Original, Copied>>,
  Expect<Equal<NestedOriginal, NestedCopied>>,
  Expect<Equal<ArrayOriginal, ArrayCopied>>,
  Expect<Equal<EmptyOriginal, EmptyCopied>>,
  Expect<Equal<NullUndefinedOriginal, NullUndefinedCopied>>,
  Expect<Equal<FunctionOriginal, FunctionCopied>>,
  Expect<Equal<ReadonlyOriginal, ReadonlyCopied>>,
  Expect<Equal<OptionalOriginal, OptionalCopied>>,
  Expect<Equal<DeepNestedObj, DeepNestedCopied>>,
  Expect<Equal<LargeObj, LargeObjCopied>>,
];
