import React from 'react';
import { BaseInput } from './base-input';

export interface Option {
  value: string;
  label: React.ReactNode;   
}

export interface SelectInputInterface extends BaseInput {
  options: Option[];
}
