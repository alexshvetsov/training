import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { TextInputInterface } from "../types/text-input";

interface TextInputProps {
  input: TextInputInterface;
}

const TextInput = ({ input }: TextInputProps) => {
  const { control } = useFormContext();

  return (
    <div style={{ ...input.flexOptions } || { ...input.gridOptions }}>
      <Controller
        name={input.name}
        control={control}
        defaultValue={input.defaultValue || ""}
        rules={input.rules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={input.label}
            variant="outlined"
            type={input.textType}
            error={!!error}
            helperText={error ? error.message : ""}
            autoComplete={input.name}
            fullWidth
          />
        )}
      />
    </div>
  );
};

export default TextInput;
