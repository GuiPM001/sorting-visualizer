import React, { Dispatch, createContext } from "react";
import { Algorithm } from "enums/Algorithm";

export interface ISettings {
  algoType: Algorithm;
  delay: number;
}

type SettingsContextType = {
  settings: ISettings;
  setSettings: Dispatch<React.SetStateAction<ISettings>>;
  sort: () => void
};

const initialSettings: ISettings = {
  algoType: Algorithm.merge,
  delay: 3,
};

export const SettingsContext = createContext<SettingsContextType>({
  settings: initialSettings,
  setSettings: () => {},
  sort: () => {}
});