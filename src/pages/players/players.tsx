import React from "react";
import Form from "../../components/form/form.tsx";
import FormInterface from "../../components/form/types/form.ts";
import { AutocompleteInputInterface } from "../../components/form/types/autocomplete-input";
import { Option } from "../../components/form/types/option.ts";
import { TextInputInterface } from "../../components/form/types/text-input.ts";
import { SelectInputInterface } from "../../components/form/types/select-input.ts";
import { useSearchPlayersForm } from "./useSearchPlayersForm.tsx";

const Players = () => {

  const {choosePlayersForm, onInputInteraction } = useSearchPlayersForm()


  return (
    <div>
      <Form
        form={choosePlayersForm}
        onInputInteraction={onInputInteraction}
      ></Form>
    </div>
  );
};

export default Players;
