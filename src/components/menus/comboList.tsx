import { comboProps } from "@/utils/interfaces";

export default function ComboList({ items, name }: comboProps) {
  return (
    <div className="flex items-center">
      <select
        name={name}
        id={name}
        className="text-havelockblue-900 rounded-md shadow-sm focus:outline-none focus:border-havelockblue-500 text-sm"
      >
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
