import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { SelectInputInterface } from "../types/select-input";

interface SelectProps {
  input: SelectInputInterface;
}

const SelectInput = ({ input }: SelectProps) => {
  const { control } = useFormContext();

  return (
    <div style={{ ...input.flexOptions } || { ...input.gridOptions }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>{input.label}</InputLabel>
        <Controller
          name={input.name}
          control={control}
          defaultValue={input.defaultValue || ""}
          rules={input.rules}
          render={({ field, fieldState: { error } }) => (
            <>
              <MuiSelect {...field} label={input.label} error={!!error}>
                {input.options.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </MuiSelect>
              {error && <FormHelperText error>{error.message}</FormHelperText>}
            </>
          )}
        />
      </FormControl>
    </div>
  );
};

export default SelectInput;
