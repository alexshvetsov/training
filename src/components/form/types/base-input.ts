import React from "react";
import FlexItem from "../../../utilitis/types/flex-item";
import GridItem from "../../../utilitis/types/grid-item";

export interface BaseInput {
  name: string;
  type: "text" | "select" | "custom";
  placeholder?:string;
  label?: string;
  customInput?: React.ReactNode;
  className?: string;
  defaultValue?: any;
  gridOptions?: GridItem;
  flexOptions?: FlexItem;
  rules?: {
    required?: boolean | string;
    min?: number | { value: number; message: string };
    max?: number | { value: number; message: string };
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    pattern?: RegExp | { value: RegExp; message: string };
    validate?: Record<string, (value: any) => boolean | string>;
  };
}
