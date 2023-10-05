export default function Input({ type, onChange, placeholder, value }) {
  return (
    <Input
      type={type}
      className="input"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
