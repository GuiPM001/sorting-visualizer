import { Algorithm } from "enums/Algorithm";

interface SelectProps {
  label: string;
  value: Algorithm;
  disabled?: boolean;
  onChange: (algo: Algorithm) => void;
}

const Select = (props: SelectProps) => {
  const { label, value, disabled, onChange } = props;

  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor="array-lenght">
        {label}
      </label>
      <select
        className="p-2 border border-slate-200 rounded-md"
        name="algo-type"
        id="algo-type"
        onChange={(e) => onChange(e.target.value as Algorithm)}
        value={value}
        disabled={disabled}
      >
        <option value={Algorithm.merge}>Merge sort</option>
        <option value={Algorithm.insertion}>Insertion sort</option>
      </select>
    </div>
  );
};

export default Select;
