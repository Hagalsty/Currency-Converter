export function Select({ options }) {
  return (
    <select>
      {options.map((item) => {
        return <option>{item}</option>;
      })}
    </select>
  );
}
