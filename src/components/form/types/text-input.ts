import { BaseInput } from "./base-input";

export interface TextInputInterface extends BaseInput {
  textType: "text" | "email" | "password" | "number";
}
