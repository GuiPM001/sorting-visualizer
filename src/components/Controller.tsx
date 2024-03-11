import React, { useContext, useEffect, useState } from "react";
import { ItemsContext } from "providers/context/ItemsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { SettingsContext } from "providers/context/SettingsContext";
import { Algorithm } from "enums/Algorithm";
import Select from "./Select";
import Button from "./Button";
import Input from "./Input";

const Controller = () => {
  const { items, setItems, totalTime, setTotalTime } = useContext(ItemsContext);
  const { sort, settings, setSettings } = useContext(SettingsContext);

  const [arrayLenght, setArrayLenght] = useState<number>(25);
  const [arrayInput, setArrayInput] = useState<string>(items.join(", "));
  const [disabledPlayButton, setDisabledPlayButton] = useState<boolean>(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    resetTime();

    const randomNumbers = [];

    for (let i = 0; i < arrayLenght; i++) {
      randomNumbers.push(Math.floor(Math.random() * 200));
    }

    setItems(randomNumbers);
    setArrayInput(randomNumbers.join(", "));
  };

  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    resetTime();
    setItems(e.target.value.split(", ").map(Number));
    setArrayInput(e.target.value);
  };

  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSettings({
      ...settings,
      delay: e.target.valueAsNumber,
    });
  };

  const onAlgoChange = (algoType: Algorithm) => {
    setSettings({
      ...settings,
      algoType: algoType,
    });
  };

  const resetTime = () => {
    setTotalTime(0);
    setDisabledPlayButton(false);
  }

  return (
    <div className="flex flex-row gap-4 items-end mx-6 pt-12">
      <Select
        label="Algorithm"
        disabled={totalTime === null}
        onChange={onAlgoChange}
        value={settings.algoType}
      />

      <Input
        id="array-lenght"
        label="Array lenght"
        type="number"
        disabled={totalTime === null}
        value={arrayLenght}
        onChange={(e) => setArrayLenght(e.target.valueAsNumber)}
      />

      <Button onClick={generateArray} disabled={totalTime === null}>
        Generate
      </Button>

      <Input
        id="array"
        label=""
        type="text"
        fullWidth={true}
        value={arrayInput}
        onChange={onArrayChange}
        disabled={totalTime === null}
      />

      <div className="flex flex-col">
        <label className="text-sm" htmlFor="delay">
          Animation delay
        </label>
        <input
          className="w-72 py-3 accent-sky-600 active:accent-sky-700"
          type="range"
          name="delay"
          id="delay"
          defaultValue={15}
          min={1}
          onChange={onDelayChange}
          value={settings.delay}
          disabled={totalTime === null}
        />
      </div>

      <button
        className="py-2 px-2 text-2xl active:scale-90 text-slate-800 disabled:opacity-25 disabled:cursor-default"
        data-tooltip="Play"
        onClick={() => {
          setDisabledPlayButton(true)
          sort()
        }}
        disabled={disabledPlayButton}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};

export default Controller;
