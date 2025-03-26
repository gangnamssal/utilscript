import { P } from 'utilscript';

export type BrandedCode = P.Branded<string, 'code'>;

export type PositionMap<T extends string = string> = Record<T, { code: BrandedCode }>;

export type BrandedActiveText = P.Branded<'Array' | 'Object' | 'String', 'activeText'>;

export type ActiveTextMap<T extends string = string> = Record<T, BrandedActiveText>;
