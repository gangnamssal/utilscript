/**
 * Creates a new type by excluding properties of type U from object type T.
 *
 * 객체 타입 T에서 타입이 U인 프로퍼티를 제외한 새로운 타입을 생성합니다.
 *
 * @param T - The original object type / 원본 객체 타입
 * @param U - The type of properties to exclude / 제외할 프로퍼티의 타입
 *
 * @example
 * interface Model {
 *   name: string;
 *   count: number;
 *   isReadonly: boolean;
 *   isEnable: boolean;
 * }
 *
 * type cases = [
 *   Expect<Equal<OmitByType<Model, boolean>, { name: string, count: number }>>,
 *   Expect<Equal<OmitByType<Model, string>, { count: number, isReadonly: boolean, isEnable: boolean }>>,
 *   Expect<Equal<OmitByType<Model, number>, { name: string, isReadonly: boolean, isEnable: boolean }>>,
 * ]
 */
export type OmitByType<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] };
