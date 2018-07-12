export type Types = 'email' | 'number' | 'boolean';


export interface IValidation {
  min?: number;
  max?: number;
  type?: Types;
}

export interface IConfig {
  [key : string]: IValidation
}

export interface Ireturn {
  for: string;
  errorType: string;
  value: any;
}

export declare function validate(input: Object, config: IConfig): Ireturn[];