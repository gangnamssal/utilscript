/**
 * Convert string to number
 * 문자열을 숫자로 변환
 *
 * @param S String to convert / 변환할 문자열
 * @returns Converted number or never if cannot be converted / 변환된 숫자 또는 변환할 수 없는 경우 never
 *
 * @example
 * type Case1 = ToNumber<'0'>; // 0
 * type Case2 = ToNumber<'5'>; // 5
 * type Case3 = ToNumber<'12'>; // 12
 * type Case4 = ToNumber<'27'>; // 27
 * type Case5 = ToNumber<'18@7_$%'>; // never
 */

export type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never;
