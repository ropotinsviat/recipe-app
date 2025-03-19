interface FilterDropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  label: string;
}

export default function FilterDropdown({
  options,
  onSelect,
  label,
}: FilterDropdownProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="border rounded p-2 w-full"
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
