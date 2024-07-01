import "./App.css";
import RecordsList from "./Components/RecordsList";
import TwoWayBindingExample from "./Components/TwoWayBindingExample";
import Simple from "./Components/Simple";
import ShowHide from "./Components/ShowHide";
import AddChinldComponent from "./Components/AddChildComponent";
import Sum from "./Components/Sum";
import Counter from "./Components/Counter";
import SearchFilter from "./Components/SearchFilter";

function App() {
  return (
    <>
      <Simple />
      <hr />
      <RecordsList />
      <hr />
      <ShowHide />
      <hr />
      <TwoWayBindingExample />
      <hr />
      <AddChinldComponent />
      <hr />
      <Sum />
      <hr />
      <Counter />
      <hr />
      <SearchFilter />
    </>
  );
}

export default App;
