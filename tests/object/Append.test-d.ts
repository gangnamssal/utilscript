import { Append } from '../../src/object';
import { Equal, Expect } from '../../src/commonness';

// 기본 테스트 케이스
type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  moon: false | undefined;
};

// 엣지 케이스
type emptyObject = {};
type emptyObjectExpect = {
  key: string;
};

type existingKeyObject = {
  key: number;
};

type existingKeyObjectExpect = {
  key: string;
};

type readonlyObject = {
  readonly prop: string;
};

type readonlyObjectExpect = {
  readonly prop: string;
  newProp: boolean;
};

// 성능 테스트 케이스
type LargeObject = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested: string };
  prop6: () => void;
  prop7: Map<string, any>;
  prop8: Set<number>;
  prop9: Promise<void>;
  prop10: Date;
  prop11: RegExp;
  prop12: symbol;
  prop13: bigint;
  prop14: unknown;
  prop15: never;
  prop16: null;
  prop17: undefined;
  prop18: string | number;
  prop19: string & { _brand: 'special' };
  prop20: Record<string, any>;
};

type LargeObjectExpect = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested: string };
  prop6: () => void;
  prop7: Map<string, any>;
  prop8: Set<number>;
  prop9: Promise<void>;
  prop10: Date;
  prop11: RegExp;
  prop12: symbol;
  prop13: bigint;
  prop14: unknown;
  prop15: never;
  prop16: null;
  prop17: undefined;
  prop18: string | number;
  prop19: string & { _brand: 'special' };
  prop20: Record<string, any>;
  newProp: { complex: { nested: { value: string } } };
};

// 깊은 중첩 객체 테스트
type DeepNestedObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: string;
        };
      };
    };
  };
};

type DeepNestedObjectExpect = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: string;
        };
      };
    };
  };
  newDeepProp: { a: { b: { c: number } } };
};

type cases = [
  Expect<Equal<Append<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<Append<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<Append<test3, 'moon', false | undefined>, testExpect3>>,

  // 엣지 케이스
  Expect<Equal<Append<emptyObject, 'key', string>, emptyObjectExpect>>,
  Expect<Equal<Append<existingKeyObject, 'key', string>, existingKeyObjectExpect>>,
  Expect<Equal<Append<readonlyObject, 'newProp', boolean>, readonlyObjectExpect>>,
  Expect<Equal<Append<{}, never, never>, {}>>,
  Expect<Equal<Append<{}, any, any>, { [key: string]: any }>>,

  // 성능 테스트 케이스
  Expect<
    Equal<
      Append<LargeObject, 'newProp', { complex: { nested: { value: string } } }>,
      LargeObjectExpect
    >
  >,
  Expect<
    Equal<
      Append<DeepNestedObject, 'newDeepProp', { a: { b: { c: number } } }>,
      DeepNestedObjectExpect
    >
  >,
];
