import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <Button
        label="Button"
        size="medium"
        variant="primary"
        onClick={() => console.log("salam")}
      />
      <Input label="input ."/>
    </>
  );
}

export default App;
