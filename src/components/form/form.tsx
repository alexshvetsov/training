import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInterface from "./types/form";
import TextInput from "./components/text-input.tsx";
import SelectInput from "./components/select-input.tsx";
import { Button } from "@mui/material";

interface FormProps {
  form: FormInterface;
  onInputInteraction?: (inputName: string, values: any) => void;
}

const Form = ({ form, onInputInteraction }: FormProps) => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (onInputInteraction) {
        onInputInteraction(name || "", value);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, onInputInteraction]);

  const renderInput = (input: any) => {
    switch (input.type) {
      case "text":
        return <TextInput input={input} key={input.name} />;
      case "select":
        return <SelectInput input={input} key={input.name} />;
      case "custom":
        const CustomComponent = input.component;
        return (
          <CustomComponent
            {...input.props}
            key={input.name}
            onClick={form.onInputInteraction}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(form.onSubmit)}
        className={form.className}
        style={{ ...form.flexBox } || { ...form.gridBox }}
      >
        {form.inputs.map(renderInput)}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
        >
          {form.submitText}
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
