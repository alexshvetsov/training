import React from 'react';
import { BaseInput } from './base-input';
import { Option } from './option';

export interface SelectInputInterface extends BaseInput {
  options: Option[];
}
