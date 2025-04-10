import { Equal, Expect } from '../../src/commonness';
import { MapTypes } from '../../src/object';

// 기본 테스트 케이스
type cases = [
  Expect<
    Equal<
      MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>,
      { stringToArray: [] }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>,
      { stringToNumber: number }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { stringToNumber: string; skipParsingMe: boolean },
        { mapFrom: string; mapTo: number }
      >,
      { stringToNumber: number; skipParsingMe: boolean }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { date: string },
        { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }
      >,
      { date: null | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>,
      { date: null | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { fields: Record<string, boolean> },
        { mapFrom: Record<string, boolean>; mapTo: string[] }
      >,
      { fields: string[] }
    >
  >,
  Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
  Expect<
    Equal<
      MapTypes<
        { name: string; date: Date },
        { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
      >,
      { name: boolean; date: string }
    >
  >,

  // 엣지 케이스
  Expect<Equal<MapTypes<{}, { mapFrom: string; mapTo: number }>, {}>>,
  Expect<Equal<MapTypes<{ a: undefined }, { mapFrom: undefined; mapTo: null }>, { a: null }>>,
  Expect<Equal<MapTypes<{ a: null }, { mapFrom: null; mapTo: undefined }>, { a: undefined }>>,
  Expect<Equal<MapTypes<{ a: never }, { mapFrom: never; mapTo: string }>, { a: string }>>,
  Expect<Equal<MapTypes<{ a: unknown }, { mapFrom: unknown; mapTo: string }>, { a: string }>>,
  Expect<Equal<MapTypes<{ a: any }, { mapFrom: any; mapTo: string }>, { a: string }>>,
  Expect<
    Equal<
      MapTypes<
        { a: string | number },
        { mapFrom: string; mapTo: boolean } | { mapFrom: number; mapTo: Date }
      >,
      { a: boolean | Date }
    >
  >,
  Expect<
    Equal<
      MapTypes<
        { a: string; b: number; c: boolean },
        { mapFrom: string; mapTo: null } | { mapFrom: number; mapTo: null }
      >,
      { a: null; b: null; c: boolean }
    >
  >,
];

// 성능 테스트 케이스
type LargeObject = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: Record<string, number>;
  prop6: Date;
  prop7: null;
  prop8: undefined;
  prop9: string | number;
  prop10: { nested: string };
  prop11: string;
  prop12: number;
  prop13: boolean;
  prop14: string[];
  prop15: Record<string, number>;
  prop16: Date;
  prop17: null;
  prop18: undefined;
  prop19: string | number;
  prop20: { nested: string };
};

type ComplexMappingRules =
  | { mapFrom: string; mapTo: boolean }
  | { mapFrom: number; mapTo: string }
  | { mapFrom: boolean; mapTo: number }
  | { mapFrom: string[]; mapTo: Set<string> }
  | { mapFrom: Record<string, number>; mapTo: Map<string, number> }
  | { mapFrom: Date; mapTo: number }
  | { mapFrom: null; mapTo: undefined }
  | { mapFrom: undefined; mapTo: null }
  | { mapFrom: string | number; mapTo: symbol };

// 대규모 객체와 복잡한 매핑 규칙으로 성능 테스트
type PerformanceTest = MapTypes<LargeObject, ComplexMappingRules>;

// 깊은 중첩 객체 성능 테스트
type NestedLevel1 = { a: string };
type NestedLevel2 = { b: NestedLevel1 };
type NestedLevel3 = { c: NestedLevel2 };
type NestedLevel4 = { d: NestedLevel3 };
type NestedLevel5 = { e: NestedLevel4 };

type DeepNestedTest = MapTypes<NestedLevel5, { mapFrom: string; mapTo: number }>;

// 유니온 타입 성능 테스트
type UnionTest = MapTypes<
  { a: string | number | boolean | null | undefined | symbol | object },
  { mapFrom: string | number | boolean; mapTo: Date }
>;

// 재귀적 타입 성능 테스트
type RecursiveType<T> = {
  value: T;
  next: RecursiveType<T> | null;
};

type RecursiveTest = MapTypes<RecursiveType<string>, { mapFrom: string; mapTo: number }>;
