import { useInvContext } from "../context/invContextProvider";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Table() {
  const [inv, setInv] = useInvContext();
  const data = calculateInvestmentResults(inv);

  const isValid = inv.duration >= 1 && inv.initialInvestment >= 1;
  if (isValid) {
    const initInv =
      data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    return (
      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment value</th>
            <th scope="col">Interest {"(Year)"}</th>
            <th scope="col">Total Interest</th>
            <th scope="col">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => {
            const totalInterest =
              dat.valueEndOfYear - dat.annualInvestment * dat.year - initInv;

            const totalInv = dat.valueEndOfYear - totalInterest;
            return (
              <tr key={dat.year}>
                <th>{dat.year}</th>
                <td>{formatter.format(dat.valueEndOfYear)}</td>
                <td>{formatter.format(dat.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInv)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <p id="warning" className="center">
        <span
          style={{
            color: "#ff3a3a",
            fontWeight: "bold",
            backgroundColor: "black",
            padding: "4px",
            borderRadius: "4px",
          }}
        >
          Invalid values :{" "}
        </span>
        Please enter valid values
      </p>
    );
  }
}
