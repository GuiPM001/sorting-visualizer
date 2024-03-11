import { Dispatch, createContext } from "react";

type ItemsContextType = {
  items: number[];
  setItems: Dispatch<React.SetStateAction<number[]>>;
  totalTime: number | null;
  setTotalTime: Dispatch<React.SetStateAction<number | null>>;
};

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  setItems: () => {},
  totalTime: 0,
  setTotalTime: () => {}
});
