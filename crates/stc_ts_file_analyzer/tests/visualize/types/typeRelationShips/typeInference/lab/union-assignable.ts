

declare function foo<T>(x: T, a: T, b: T): T;

foo(1, null as any as string | number | boolean, true) // string | number | boolean

export { }