type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean

type TypeName<T> = T extends string ? "string" : T extends number ? "number" : "object";

type T0 = TypeName<string>; // 'string'
