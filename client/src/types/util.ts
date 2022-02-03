export type Jsonized<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends Function
        ? never
        : T[K] extends Date
        ? string
        : T[K] extends number
        ? number
        : T[K] extends string
        ? string
        : Jsonized<T[K]>;
    }
  : T;
