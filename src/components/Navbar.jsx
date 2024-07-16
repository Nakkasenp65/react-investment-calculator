import investmentImage from "../assets/investment-calculator-logo.png";
export default function Navbar() {
  return (
    <div id="navbar-container">
      <nav id="navbar">
        <img src={investmentImage} alt="investmentImage" />
        <p
          style={{
            fontWeight: 800,
          }}
        >
          Investment Calculator
        </p>
      </nav>
    </div>
  );
}
