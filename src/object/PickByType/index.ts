/**
 *
 * Pick object properties by value type
 *
 * 특정 타입을 기준으로 객체의 키와 값을 선택하는 타입
 *
 * @param T The original object type / 원본 객체 타입
 *
 * @param U The type to filter by / 선택할 값의 타입
 *
 * @returns Object with only properties of type U / 선택된 키와 값으로 이루어진 객체 타입
 *
 * @example
 *   interface Model {
 *     name: string;
 *     count: number;
 *     isReadonly: boolean;
 *     isEnable: boolean;
 *   }
 *
 * type cases = [
 *   Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
 *   Expect<Equal<PickByType<Model, string>, { name: string }>>,
 *   Expect<Equal<PickByType<Model, number>, { count: number }>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-object/pick-by-type
 *
 */

export type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] };
