import { AnyArray } from '../../primitive/index.js';

export type IsObject<T> = T extends (...args: AnyArray) => unknown
  ? false
  : T extends AnyArray
    ? false
    : T extends Record<PropertyKey, unknown>
      ? true
      : object extends T
        ? true
        : false;
