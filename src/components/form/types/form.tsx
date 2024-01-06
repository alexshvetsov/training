import GridBox from "../../../utilitis/types/grid-box";
import FlexBox from "../../../utilitis/types/flex-box";
import { BaseInput } from "./base-input";

export default interface FormInterface {
  inputs: BaseInput[];
  onSubmit: (data: any) => void;
  submitText: string;
  gridBox?: GridBox;
  flexBox?: FlexBox;
  className?: string;
  onInputInteraction?: (inputName: string) => void;
}
