import { Expect, Equal } from '../../src/commonness';
import { Entries } from '../../src/object';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

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
