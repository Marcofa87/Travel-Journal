import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const travels = data.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <>
      <Navbar />
      {travels}
    </>
  );
}

export default App;
