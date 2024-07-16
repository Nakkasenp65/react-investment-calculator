import { useInvContext } from "../context/invContextProvider";
import TextField from "./TextField.jsx";

export default function InputSection() {
  const [inv, setInv] = useInvContext();
  function handleChange(e) {
    setInv({
      ...inv,
      [e.target.name]: Number(e.target.value),
    });
  }

  return (
    <>
      <div></div>
      <div className="input-group">
        <div id="user-input">
          <div className="group">
            <TextField
              inputValue={inv.initialInvestment}
              onChangeBehave={handleChange}
              inputName="initialInvestment"
            />
            <TextField
              inputValue={inv.annualInvestment}
              onChangeBehave={handleChange}
              inputName="annualInvestment"
            />
          </div>
          <div className="group">
            <TextField
              inputValue={inv.expectedReturn}
              onChangeBehave={handleChange}
              inputName="expectedReturn"
            />
            <TextField
              inputValue={inv.duration}
              onChangeBehave={handleChange}
              inputName="duration"
            />
          </div>
        </div>
      </div>
    </>
  );
}
