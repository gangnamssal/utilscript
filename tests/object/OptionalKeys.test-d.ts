import { Expect, Equal } from '../../src/commonness';
import { OptionalKeys } from '../../src/object';

// 기본 테스트 케이스
type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<
    Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>
  >,
  Expect<Equal<OptionalKeys<{}>, never>>,

  // 엣지 케이스
  Expect<Equal<OptionalKeys<{ a?: undefined }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: null }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: never }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: unknown }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a?: any }>, 'a'>>,
  Expect<Equal<OptionalKeys<{ a: string | undefined; b?: string }>, 'b'>>,
  // @ts-expect-error: not working in production
  Expect<Equal<OptionalKeys<{ [k: string]: number; a?: string }>, 'a'>>,
  // @ts-expect-error: not working in production
  Expect<Equal<OptionalKeys<{ [k: number]: number; 1?: string }>, 1>>,
];

// 성능 테스트 케이스
type LargeObject = {
  prop1: string;
  prop2?: number;
  prop3: boolean;
  prop4?: string[];
  prop5: Record<string, unknown>;
  prop6?: Date;
  prop7: RegExp;
  prop8?: Promise<void>;
  prop9: Map<string, any>;
  prop10?: Set<number>;
  // 더 많은 프로퍼티 추가
  prop11: string;
  prop12?: number;
  prop13: boolean;
  prop14?: string[];
  prop15: Record<string, unknown>;
  prop16?: Date;
  prop17: RegExp;
  prop18?: Promise<void>;
  prop19: Map<string, any>;
  prop20?: Set<number>;
};

// 성능 테스트
type PerformanceTest = [
  // 큰 객체에서 선택적 키 추출 테스트
  Expect<
    Equal<
      OptionalKeys<LargeObject>,
      | 'prop2'
      | 'prop4'
      | 'prop6'
      | 'prop8'
      | 'prop10'
      | 'prop12'
      | 'prop14'
      | 'prop16'
      | 'prop18'
      | 'prop20'
    >
  >,

  // 중첩된 객체 테스트
  Expect<
    Equal<
      OptionalKeys<{
        a: { b: string; c?: number };
        d?: { e: string; f?: boolean };
      }>,
      'd'
    >
  >,

  // 유니온 타입 테스트
  Expect<Equal<OptionalKeys<{ a: string } | { b?: number }>, never>>,
];
