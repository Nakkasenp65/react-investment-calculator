import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";
import InvContextProvider from "./context/invContextProvider";

function App() {
  return (
    <>
      <InvContextProvider>
        <Header />
        <InputSection />
        <Table />
      </InvContextProvider>
    </>
  );
}

export default App;
