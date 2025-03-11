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
];
