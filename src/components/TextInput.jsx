export default function TextInput({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
