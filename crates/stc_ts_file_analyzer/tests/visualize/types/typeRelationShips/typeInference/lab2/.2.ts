

declare function f2<T>(a: T, b: (a: T) => T): T

f2('a', (foo) => null as any as Object) // "a"
export { }