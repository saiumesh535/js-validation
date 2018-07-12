export interface types {
  email: string;
  number: number;
  boolean: Boolean;
}

export interface config {
  min: number;
  max: number;
  type: types;
}

export interface Ireturn {
  for: string;
  errorType: string;
  value: any;
}

export declare function validate(input: Object, config: Object): Array<Ireturn>;