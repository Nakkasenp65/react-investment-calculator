import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import InvContextProvider from "./context/invContextProvider";

function App() {
  return (
    <>
      <InvContextProvider>
        <Navbar />
        <InputSection />
        <Table />
      </InvContextProvider>
    </>
  );
}

export default App;
