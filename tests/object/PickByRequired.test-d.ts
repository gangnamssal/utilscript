import { Expect, Equal } from '../../src/commonness';
import { PickByRequired } from '../../src/object';

type cases = [
  Expect<Equal<PickByRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<PickByRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
];
