import { isOptionalChain } from "typescript";

type Video = {
  title: string;
  author: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {};

type Animal = {
  name: string;
  age: number;
};

type AnimalOptional = Optional<Animal>;

const video2: ReadOnly<Optional<Video>> = {
  title: "test",
};
