import React from 'react';
import { BaseInput } from './base-input';
import { Option } from './option';

export interface AutocompleteInputInterface extends BaseInput {
  options: Option[];
  onInputChange:(value:string, values:Option[])=> Option[]
}
