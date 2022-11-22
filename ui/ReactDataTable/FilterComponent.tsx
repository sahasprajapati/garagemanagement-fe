interface FilterProps {
  onFilter: (value: string) => void;
  onClear: () => void;
  filterText: string;
}
export default function FilterComponent({
  onFilter,
  onClear,
  filterText,
}: FilterProps) {
  return (
    <>
      <input value={filterText} placeholder="Search..." onChange={(e) => onFilter(e.target.value)} />
      <button onClick={onClear}>X</button>
    </>
  );
}
