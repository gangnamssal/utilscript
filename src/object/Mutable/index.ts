/**
 * 
 * Make all properties of an object mutable
 *
 * 객체의 모든 프로퍼티를 가변적으로 만들어주는 타입
 *
 * @param T The original object type / 원본 객체 타입
 *
 * @returns Mutable object / 가변적인 객체
 * @example
 *   interface Todo1 {
 *     title: string;
 *     description: string;
 *     completed: boolean;
 *     meta: {
 *       author: string;
 *     };
 *   }

 *   type cases = [
 *     Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
 *   ];
 *
 * @link https://www.utilscript.site/docs/usage-object/mutable
 *
 */

export type Mutable<T extends Record<PropertyKey, any>> = { -readonly [P in keyof T]: T[P] };
