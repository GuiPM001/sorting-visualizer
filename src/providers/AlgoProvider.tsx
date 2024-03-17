import { useState } from "react";
import { ISettings, SettingsContext } from "./context/SettingsContext";
import { ItemsContext } from "./context/ItemsContext";
import { Algorithm } from "enums/Algorithm";
import { getInsertionSortAnims } from "utils/algorithms/insertion-sort";
import { getMergeSortAnims } from "utils/algorithms/merge-sort";
import { animateMerge, animateSwitch } from "utils/animations";
import { getQuickSortAnims } from "utils/algorithms/quick-sort";

interface Props {
  children: React.ReactNode;
}

const initialSettings: ISettings = {
  algoType: Algorithm.merge,
  delay: 3,
};

const AlgoProvider: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<ISettings>(initialSettings);
  const [items, setItems] = useState<number[]>([]);
  const [totalTime, setTotalTime] = useState<number | null>(0);

  const sort = () => {
    setTotalTime(null);
    switch (settings.algoType) {
      case Algorithm.merge:
        const aux: number[] = [];
        const animArray: number[][] = [];
        const nums = [...items];
        getMergeSortAnims(nums, aux, animArray, 0, items.length - 1);
        animateMerge({
          newArray: nums,
          animationArray: animArray,
          delay: settings.delay,
          setItems,
          setTotalTime
        })
        break;
      case Algorithm.insertion:
        const { newArray, animationArray } = getInsertionSortAnims(items);
        animateSwitch({
          newArray,
          animationArray,
          delay: settings.delay,
          setItems,
          setTotalTime,
        });
        break;
      case Algorithm.quick:
        const { quickSorted, quickSortAnims } = getQuickSortAnims(items);
        animateSwitch({
          newArray: quickSorted,
          animationArray: quickSortAnims,
          delay: settings.delay,
          setItems,
          setTotalTime
        });
        break;
      default:
        break;
    }
  };

  const animateDivs = (newArray: number[], animationArray: number[][]) => {
    const sky100 = "#0369A1";
    const sky700 = "#BAE6FD";

    const startTime = performance.now();

    animationArray.forEach(([first, second], index) => {
      const div1 = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);

      if (!div1 || !div2) return;

      setTimeout(() => {
        div1.style.background = sky100;
        div2.style.background = sky100;

        const div1Height = div1.style.height;
        div1.style.height = div2.style.height;
        div2.style.height = div1Height;

        setTimeout(() => {
          div1.style.background = sky700;
          div2.style.background = sky700;

          if (index === animationArray.length - 1) {
            const endTime = performance.now();
            calculateTotalTime(startTime, endTime);

            setItems(newArray);
          }
        }, settings.delay * 5);
      }, settings.delay * index * 5);
    });
  };

  const animateMergeDivs = (newArray: number[], animationArray: number[][]) => {
    const sky100 = "#0369A1";
    const sky700 = "#BAE6FD";

    const startTime = performance.now();

    animationArray.forEach(([newHeight, index], idx) => {
      const div1 = document.getElementById(`${index}`);

      if (!div1) return;

      setTimeout(() => {
        div1.style.background = sky100;

        div1.style.height = `${newHeight / 2.1}%`;

        setTimeout(() => {
          div1.style.background = sky700;

          if (idx === animationArray.length - 1) {
            const endTime = performance.now();
            calculateTotalTime(startTime, endTime);

            setItems(newArray);
          }
        }, settings.delay * 5);
      }, settings.delay * idx * 5);
    });
  };

  const calculateTotalTime = (startTime: number, endTime: number) => {
    const total = endTime - startTime;
    setTotalTime(Number((total / 1000).toFixed(2)));

    return;
  };

  return (
    <ItemsContext.Provider value={{ items, setItems, totalTime, setTotalTime }}>
      <SettingsContext.Provider value={{ settings, setSettings, sort }}>
        {children}
      </SettingsContext.Provider>
    </ItemsContext.Provider>
  );
};

export default AlgoProvider;
