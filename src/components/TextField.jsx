export default function TextField({ inputName, onChangeBehave, inputValue }) {
  return (
    <div>
      <label htmlFor="annualInvestment">{inputName}</label>
      <input
        type="number"
        value={inputValue}
        name={inputName}
        onChange={onChangeBehave}
      />
    </div>
  );
}
