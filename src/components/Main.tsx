import { ItemsContext } from "providers/context/ItemsContext";
import { SettingsContext } from "providers/context/SettingsContext";
import { useContext } from "react";

const Main = () => {
  const { items, totalTime } = useContext(ItemsContext);
  const { settings } = useContext(SettingsContext);

  return (
    <section className="row-span-10 border border-slate-200 rounded-md mx-6 mb-6">
      <div className="flex flex-col w-full h-full items-end px-4 py-2">
        <div className="flex flex-row justify-between w-full max-h-12">
          <p className="capitalize font-medium text-lg">{settings.algoType}</p>
          {totalTime! > 0 && (
            <p>
              Total time:
              <span className="font-medium"> {totalTime} seconds</span>
            </p>
          )}
        </div>

        <div className="flex h-full w-full flex-row gap-0.5">
          {items.map((item, index) => (
            <div className="h-full flex flex-col justify-end flex-1 pb-6">
              <div
                id={`${index}`}
                key={`${index} - ${item}`}
                data-tooltip={item}
                className=" min-h-0.5"
                style={{
                  height: `${item / 2.1}%`,
                  background: "#BAE6FD",
                  color: "#0369A1",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
