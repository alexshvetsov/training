import { useEffect, useState } from "react";
import { AutocompleteInputInterface } from "../../components/form/types/autocomplete-input";
import FormInterface from "../../components/form/types/form";
import { Option } from "../../components/form/types/option";
import { SelectInputInterface } from "../../components/form/types/select-input";
import { TextInputInterface } from "../../components/form/types/text-input";
import { fetchPlayers } from "../../utilitis/mocks/players.ts";

export const useSearchPlayersForm = () => {
  const [choosePlayersForm, setChoosePlayersForm] = useState<FormInterface>({
    inputs: [
      {
        name: "username",
        label: "username",
        placeholder: "username",
        type: "text",
        textType: "text",
      } as TextInputInterface,
      {
        name: "select",
        label: "select",
        placeholder: "select",
        type: "select",
        options: [
          { value: "0", label: "0" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
      } as SelectInputInterface,
      {
        type: "autocomplete",
        name: "playerName",
        options: [],
        onInputChange: (value: string, values: Option[]) =>
          onAutocomplete(value, values),
      } as unknown as AutocompleteInputInterface,
    ],
    onSubmit: (data: any) => {
      console.log(data);
    },
    submitText: "submit",
  });

  useEffect(() => {
    fetchPlayers("").then((data) => {
      setChoosePlayersForm((prevState) => {
        const selectInput: AutocompleteInputInterface | any =
          prevState.inputs?.filter((input) => input.name === "playerName")[0];
        const otherInputs: AutocompleteInputInterface | any =
          prevState.inputs?.filter((input) => input.name !== "playerName");
        if (selectInput) selectInput.options = data;
        return { ...prevState, inputs: [...otherInputs, selectInput] };
      });
      return data;
    });
  }, []);

  const onInputInteraction = (inputName: string, values: any): void => {
    console.log(values);
  };
  async function onAutocomplete(
    value: string,
    values: Option[]
  ): Promise<Option[]> {
    return fetchPlayers(value).then((data) => {
      console.log("Players:", data);
      return data;
    });
  }

  return { choosePlayersForm, onInputInteraction };
};
