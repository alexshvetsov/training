import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Option } from "../types/option";
import { AutocompleteInputInterface } from "../types/autocomplete-input";
import { useFormContext, Controller } from "react-hook-form";

const AutocompleteInput: React.FC<{ input: AutocompleteInputInterface }> = ({
  input,
}) => {
  const [options, setOptions] = useState<Option[]>(input.options);
  const { control } = useFormContext();

  useEffect(() => {
    setOptions(input.options);
  }, [input.options]);

  const isOptionEqualToValue = (option: Option, value: any): boolean => {
    return option.value === value.value;
  };

  return (
    <div style={{ ...input.flexOptions } || { ...input.gridOptions }}>
      <Controller
        name={input.name}
        control={control}
        defaultValue={input.defaultValue || null}
        rules={input.rules}
        render={({ field, fieldState }) => (
          <Autocomplete
            {...field}
            options={options}
            getOptionLabel={(option) => option.label || ""}
            isOptionEqualToValue={isOptionEqualToValue}
            onChange={(event, item) => {
              field.onChange(item || null);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={input.label}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : null}
                fullWidth
              />
            )}
          />
        )}
      />
    </div>
  );
};

export default AutocompleteInput;
