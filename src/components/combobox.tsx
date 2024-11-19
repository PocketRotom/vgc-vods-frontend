import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";

interface CustomComboboxProps {
  array: any[];
  selected: any;
  setSelected: (value: any) => void;
  lastOption?: { id: number; name: string };
  lastOptionFunction?: () => void;
  placeholder?: string;
}

export const ComboboxComponent: React.FC<CustomComboboxProps> =
  function ComboboxComponent({
    array,
    selected,
    setSelected,
    lastOption,
    lastOptionFunction,
    placeholder = "Select an option",
  }) {
    const [query, setQuery] = React.useState<String>("");

    let filteredArray =
      query === ""
        ? array
        : array.filter((item) => {
            const itemName = item.player_name || item.name;
            return itemName.toLowerCase().includes(query.toLowerCase());
          });

    if (
      lastOption &&
      !filteredArray.some((item) => item.id === lastOption.id)
    ) {
      filteredArray = [...filteredArray, lastOption];
    }

    return (
      <Combobox
        as="div"
        value={selected}
        onChange={(event: any) => {
          console.log(event);
          if (event?.id === -1 && lastOptionFunction) {
            setQuery("");
            lastOptionFunction();
            return;
          }
          setSelected(event);
        }}
      >
        <div className="relative mt-2">
          <ComboboxInput
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            onChange={(event: any) => setQuery(event.target.value)}
            placeholder={placeholder}
            displayValue={(event: any) => event?.player_name || event?.name}
          />
          {filteredArray.length > 0 && (
            <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredArray.map((event) => (
                <ComboboxOption
                  key={event.id}
                  value={event}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                >
                  <span className="block truncate group-data-[selected]:font-semibold">
                    {event.player_name || event.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="size-5" aria-hidden="true" />
                  </span>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          )}
        </div>
      </Combobox>
    );
  };
