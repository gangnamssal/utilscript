import { Expect, Equal } from '../../src/commonness';
import { Entries } from '../../src/object';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

// 기본 테스트 케이스
type cases = [
  Expect<Equal<Entries<Model>, ModelEntries>>,
  Expect<Equal<Entries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<Entries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<Entries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<Entries<{ key: string | undefined }>, ['key', string | undefined]>>,

  // 엣지 케이스
  Expect<Equal<Entries<{}>, never>>,
  Expect<Equal<Entries<{ readonly key: string }>, ['key', string]>>,
  Expect<Equal<Entries<{ [key: string]: number }>, [string, number]>>,
  Expect<Equal<Entries<{ [key: number]: string }>, [number, string]>>,
  Expect<Equal<Entries<{ [key: symbol]: boolean }>, [symbol, boolean]>>,
  Expect<Equal<Entries<Record<string, never>>, [string, never]>>,
];

// 성능 테스트
type LargeObject = {
  prop1: string;
  prop2: number;
  prop3: boolean;
  prop4: string[];
  prop5: { nested: string };
  prop6: Map<string, any>;
  prop7: Set<number>;
  prop8: Promise<void>;
  prop9: () => void;
  prop10: Date;
  // ... 더 많은 속성들
  prop20: Record<string, unknown>;
};

type LargeObjectEntries = Entries<LargeObject>;

// 깊은 중첩 객체 성능 테스트
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

type DeepNestedEntries = Entries<DeepNestedObject>;

// 유니온 타입 성능 테스트
type ComplexUnion =
  | { type: 'a'; value: string }
  | { type: 'b'; value: number }
  | { type: 'c'; value: boolean }
  | { type: 'd'; value: string[] };

type ComplexUnionEntries = Entries<ComplexUnion>;
