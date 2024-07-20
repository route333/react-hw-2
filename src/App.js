import "./App.css";
import Greeting from "./components/H1/H1";
import Message from "./components/Message/Message";
import Button from "./components/Button/Button";

function App() {
  const click = () => {
    console.log("it`s works");
  };
  return (
    <>
      <Greeting name="Oleh" />
      <Message text="you`re so handsome" />
      <Button
        onClick={() => {
          click();
        }}
      />
    </>
  );
}

export default App;
