import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name : {props.name}</h1>
      <h1>Last : {props.last}</h1>
      <h1>Age : {props.age}</h1>
    </>
  );
};

const App = () => {
  const name = null;
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "someone"}, updated in real time</h1>
      {name ? (
        <>test</>
      ) : (
        <>
          <h4>
            <Person name={"Johny"} last="Dooe" age="21" />
            <Person name={"Boddy"} last="Dooe" age="21" />
            <Person name={"Shurty"} last="Dooe" age="14" />
            <Person name={"Cinday"} last="Dooe" age="7" />
          </h4>
        </>
      )}
    </div>
  );
};

export default App;
